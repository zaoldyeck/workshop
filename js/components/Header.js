import React,{Component,PropTypes} from "react"
import {Route,RouteHandler,Link} from "react-router"

export default class Header extends Component {

    constructor(props, context) {
        super(props, context)
    }

    componentWillUpdate() {

    }

    render() {
        return (
            <article>
                <header>
                    <h1>Most important heading here</h1>

                    <h3>Less important heading here</h3>

                    <p>Some additional information here</p>
                    <ul>
                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/sign_in">登入</Link></li>
                        <li><Link to="/sign_up">註冊</Link></li>
                    </ul>
                </header>
                <p>Lorem Ipsum dolor set amet....</p>
                <hr/>
            </article>
        )
    }
}