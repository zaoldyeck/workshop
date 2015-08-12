import React,{Component} from "react"
import {Route,RouteHandler,Link} from "react-router"
import {connect} from "react-redux"
import * as AccountActions from "../actions/AccountActions"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

@connect(state => ({

}))
export default
class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.props.dispatch(AccountActions.getAccountFromCookie())
    }

    render() {
        return (
            <div>
                <Header/>
                <RouteHandler/>
                <Footer/>
            </div>
        )
    }
}