import {GET_ACCOUNT_FROM_COOKIE,SIGN_IN,SIGN_OUT} from '../constants/ActionTypes'

export function getAccountFromCookie() {
    return {
        type: GET_ACCOUNT_FROM_COOKIE
    }
}

export function signIn(account) {
    return {
        type: SIGN_IN,
        account: account
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}