import React,{Component,PropTypes} from "react"
import {connect} from "react-redux"
import * as CounterActions from "../actions/CounterActions"

@connect(state => ({
    counter: state.counter
}))
export default
class Index extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired
    }

    handleClickIncrement(e) {
        this.props.dispatch(CounterActions.increment())
    }

    handleClickDecrement(e) {
        this.props.dispatch(CounterActions.decrement())
    }

    render() {
        return (
            <div>
                <div>首頁</div>
                <br/>

                <div>計數器</div>
                <button type="button" onClick={::this.handleClickDecrement}>-</button>
                <span>{this.props.counter}</span>
                <button type="button" onClick={::this.handleClickIncrement}>+</button>
            </div>
        )
    }
}