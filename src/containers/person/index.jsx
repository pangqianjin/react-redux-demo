import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <h3>当前求和为:{this.props.count}</h3>
                <input ref={c=>this.nameNode=c} placeholder='输入人的名字'/>
                <input ref={c=>this.ageNode=c} placeholder='输入人的年龄'/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((person)=>{
                            return <li key={person.id}>姓名:{person.name} 年龄:{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    (state)=>({persons: state.persons, count: state.count}),
    {
        addPerson: createAddPersonAction
    }
)(Person)
