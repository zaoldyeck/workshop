import {GET_ACCOUNT_FROM_COOKIE,SIGN_UP,SIGN_IN,SIGN_OUT} from "../constants/ActionTypes"
import cookie from "react-cookie"

const initialState = {
    isLogin: false,
    isAdmin: false,
    accessToken: "",
    photoUrl: "",
    coin: 0
}

export default function account(account = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT_FROM_COOKIE:
            return cookie.load("account") || initialState
        case SIGN_IN:
            cookie.save("account", action.account)
            return action.account
        case SIGN_OUT:
            cookie.remove("account")
            return initialState
        default:
            return account
    }
}