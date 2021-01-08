import React, { Component } from 'react'

export class EvintBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : "new message"
        }
        // this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler =() =>{
        this.setState({
            message : "new press"
        })
        console.log(this);
    }
    
    render() {
        return (

            <div>
                <h1> {this.state.message}</h1>
                {/* <button onClick={() => this.eventHandler.bind(this)}>ClickMe</button> approach 1
                <button onClick={() => this.eventHandler()}>ClickMe</button>      approach 2*/} 
                <button onClick={this.eventHandler}>ClickMe</button> approach 3 4 
            </div>
        )
    }
}

export default EvintBind
