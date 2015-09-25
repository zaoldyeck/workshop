import {combineReducers} from "redux"

import account from "./account"
import counter from "./counter"

const rootReducer = combineReducers({
    account,
    counter
})

export default rootReducer