import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }


    Increment () {
        
       this.setState((prevState) => ({
            count : prevState.count + 1
        }),() => console.log('log from callback',this.state.count))
        console.log(this.state.count)
    }
    

    render() {
        return (
            <div>
                <p>Counter - {this.state.count}</p>
                <button onClick={()=>this.Increment()} >increment</button>
            </div>
        )
    }
}

export default Counter
