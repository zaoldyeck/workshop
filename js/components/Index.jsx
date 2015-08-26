import React,{Component,PropTypes} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as CounterActions from "../actions/CounterActions"

class Index extends Component {

    handleClickIncrement(e) {
        this.props.actions.increment()
    }

    handleClickDecrement(e) {
        this.props.actions.decrement()
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

Index.propTypes = {
    counter: PropTypes.number.isRequired
}

export default connect((state)=> {
    return {
        counter: state.counter
    }
}, (dispatch)=> {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    }
})(Index)