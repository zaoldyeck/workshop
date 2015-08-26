import React from "react"
import Router from "react-router"
import routes from "./routes"
import {DevTools,DebugPanel,LogMonitor} from "redux-devtools/lib/react"
import DiffMonitor from "redux-devtools-diff-monitor"
import {Provider} from "react-redux"
import configureStore from "./store/configureStore"

const store = configureStore()

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(
        <div className="app">
            <Provider store={store}>
                {()=> <Root />}
            </Provider>
            {DEV ? <DevTools store={store} monitor={DiffMonitor}/> : ""}
        </div>,
        document.getElementById("container"))
})