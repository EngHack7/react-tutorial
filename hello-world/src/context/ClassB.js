import React, { Component } from 'react'
import ClassC from './ClassC'
class ClassB extends Component {
    render() {
        return (
            <div>
                <ClassC />
            </div>
        )
    }
}

export default ClassB
