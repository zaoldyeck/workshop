import React,{Component,PropTypes} from "react"
import {bindActionCreators} from "redux"
import {Route,RouteHandler,Link} from "react-router"
import {connect} from "react-redux"
import * as AccountActions from "../actions/AccountActions"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.props.dispatch(AccountActions.getAccountFromCookie())
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    actions: PropTypes.object.isRequired
}

export default connect((dispatch)=> {
    return {
        actions: bindActionCreators(AccountActions, dispatch)
    }
})(App)