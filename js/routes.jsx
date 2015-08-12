import React from "react"
import {Router,Route,DefaultRoute} from "react-router"

import App from "./containers/App"
import Index from "./components/Index"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

export default (
    <Route>
        <Route name="app" handler={App} path="/">
            <DefaultRoute name="index" handler={Index}/>
            <Route name="sign_in" handler={SignIn} path="sign_in"/>
            <Route name="sign_up" handler={SignUp} path="sign_up"/>
        </Route>
    </Route>
)