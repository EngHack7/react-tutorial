import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increment} >number count {this.props.count}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
