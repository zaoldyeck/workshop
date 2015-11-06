import React from "react"
import {render} from "react-dom"
import {Router} from "react-router"
import history from "./history"
import {createHashHistory} from "history"
import routes from "./routes"
import {DevTools,DebugPanel,LogMonitor} from "redux-devtools/lib/react"
import {Provider} from "react-redux"
import configureStore from "./store/configureStore"

export const store = configureStore()

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById("container")
)