import React from "react"
import {Router,Route,IndexRoute} from "react-router"

import App from "./containers/App"
import Index from "./components/Index"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="sign_in" component={SignIn}/>
        <Route path="sign_up" component={SignUp}/>
    </Route>
)