import {createStore,applyMiddleware,compose} from "redux"
//import thunkMiddleware from "redux-thunk"
import promiseMiddleware from "../middleware/promiseMiddleware"
import loggerMiddleware from "redux-logger"
import {devTools,persistState} from "redux-devtools"
import rootReducer from "../reducers"

const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware, loggerMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore)

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}