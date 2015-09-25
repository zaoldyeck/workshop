var Path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var isDev = JSON.parse(process.env.DEV || "true")

var entries = ["./js/app.jsx"]
var loaders = ["babel?stage=0&plugins=babel-plugin-object-assign"]
if (isDev) {
    entries.unshift("webpack-dev-server/client?http://0.0.0.0:8080", "webpack/hot/only-dev-server")
    loaders.unshift("react-hot")
}

module.exports = {
    // 生成 sourcemaps
    // 這是給 webpack-dev-server 看的參數
    // 一般生成 production 檔案時會用 webpack -p 就不會吐出 sourcemaps
    devtool: 'eval', //'#source-map'

    // 將來生成 bundle.js
    entry: entries,

    output: {
        // 有 multiple entry point 時，這裏一定要用變數寫法，不然多個產出 js file 會彼此覆寫
        //filename: "[name].js"

        path: Path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: ''
    },

    // 這是 webpack-dev-server 會看的 config
    // 有加這段的話，平常在 cli 跑 $ webpack-dev-server 時就不需另外加 --content-base .build/ 這參數
    devServer: {
        hot: true,

        // 要寫絕對路徑
        contentBase: Path.resolve(__dirname, "./build"),

        // 下面三個永遠存在
        filename: '[name].js',
        publicPath: '/',
        outputPath: '/',

        // 啟動 livereload 功能
        // 等於是 cli 時有無下 --inline 參數
        inline: true,

        // webpack-dev-middleware options
        quiet: true,  // 設為 true 即不會顯示太多 debug 訊息，讓 console 乾淨一點
        noInfo: true,
        lazy: false,  // false 是啟動 watch mode，有變化即自動編譯
        stats: {colors: true, cached: false, cachedAssets: false}
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            __DEV__: isDev
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Promise: "bluebird"
        })
    ],

    resolve: {
        alias: {
            // 'redux': path.join(__dirname, '..', '..', 'src')
            // 'redux': 'redux'
        },
        // require() 時不用加 .suffix
        extensions: ['', '.js', '.jsx']
    },

    // 主要是啟動 babel-loader
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: [/node_modules/, /vendor/], loaders: loaders},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ],
        noParse: ["react", "jquery", "bootstrap", "react-router", "redux"]
    }
};