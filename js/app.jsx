import React from "react"
import {Router} from "react-router"
import {createHashHistory} from "history"
import routes from "./routes"
import {DevTools,DebugPanel,LogMonitor} from "redux-devtools/lib/react"
import {Provider} from "react-redux"
import configureStore from "./store/configureStore"

let history = createHashHistory()
const store = configureStore()

React.render(
    <div className="app">
        <Provider store={store}>
            {()=> <Router history={history} routes={routes}/>}
        </Provider>
        {__DEV__ ?
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false}/>
            </DebugPanel> : ""}
    </div>,
    document.getElementById("container")
)