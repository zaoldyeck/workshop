import React,{Component,PropTypes} from "react"
import {Route,RouteHandler,Link} from "react-router"

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <hr/>
                <p>Posted by: Hege Refsnes</p>

                <p>Contact information: <a href="mailto:someone@example.com">
                    someone@example.com</a>.</p>
            </footer>
        )
    }
}