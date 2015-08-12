import React from "react"
import Router from "react-router"
import routes from "./routes"
import {createStore,applyMiddleware,combineReducers,compose} from "redux"
import {devTools,persistState} from "redux-devtools"
import {DevTools,DebugPanel,LogMonitor} from "redux-devtools/lib/react"
import DiffMonitor from "redux-devtools-diff-monitor"
//import thunk from "redux-thunk"
import {Provider} from "react-redux"
import * as reducers from "./reducers"
import promiseMiddleware from "./utils/PromiseMiddleware"

const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore)
const reducer = combineReducers(reducers)
const store = finalCreateStore(reducer)

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