import React,{Component,PropTypes} from "react"
import {Route,RouteHandler,Link} from "react-router"
import {connect} from "react-redux"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default class App extends Component {

    constructor(props, context) {
        super(props, context)
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