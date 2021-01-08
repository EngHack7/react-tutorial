import React, { Component } from 'react'
import Child from './Child'
import Message from './Message'
 class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(arg){
        alert("this is Parent Alert " + arg)
    }
    
    render() {
        return (
            <div>
                <Child passedMethod = {this.eventHandler}  />
                <Message passedMethod = {this.eventHandler}  />
            </div>
        )
    }
}
export default Parent