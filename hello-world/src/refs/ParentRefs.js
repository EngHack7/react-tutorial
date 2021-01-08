import React, { Component } from 'react'
import Refs from './Refs'
import Portal from './Portals'

class ParentRefs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter : 0
        }
        this.inputRefs = React.createRef()
    }

    increment = () => {
        this.setState((prev) =>({
            counter : prev.counter + 1
        }))
    }

    callRefs =() =>{
        this.inputRefs.current.focusInput();
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <Refs  ref={this.inputRefs} />
                <input
                type="button"
                value="Focus the text input"
                onClick={this.callRefs}
        />
          portal work- counter = {this.state.counter}
        <button onClick={this.increment} >increment</button>
        <Portal counter={this.state.counter} increment={this.increment}/>
            </div>
        )
    }
}

export default ParentRefs
