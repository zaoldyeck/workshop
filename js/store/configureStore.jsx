import {createStore,applyMiddleware,compose} from "redux"
import asyncMiddleware from "redux-async"
import {devTools,persistState} from "redux-devtools"
import rootReducer from "../reducers"

const createStoreWithMiddleware = compose(
    applyMiddleware(asyncMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}