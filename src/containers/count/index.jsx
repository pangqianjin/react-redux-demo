import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createDecreatementAction,createIncreatementAction,createIncreatementAsynAction } from '../../redux/actions/count'

class Count extends Component {
    increatement = ()=>{
        this.props.add(1)
    }

    decreatement = ()=>{
        this.props.decrease(1)
    }

    increatementAsyn = ()=>{
        this.props.addAsyn(1, 1000)
    }

    render() {
        return (
            <div>
                <hr></hr>
                <h2>我是Count组件</h2>
                <h3>当前求和为：{this.props.count}, Person共有{this.props.personCount}人</h3>
                <button onClick={this.increatement}>+</button>
                <button onClick={this.decreatement}>-</button>
                <button onClick={this.increatementAsyn}>异步+</button>
            </div>
        )
    }
}


export default connect(
    (state)=>({count: state.count, personCount: state.persons.length}),
    {
        add: createIncreatementAction,
        decrease: createDecreatementAction,
        addAsyn: createIncreatementAsynAction
    }
)(Count)