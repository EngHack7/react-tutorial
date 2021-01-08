import React, { Component } from 'react'
import {UserProvider} from './userContext'
import ClassB from './ClassB'
class ClassA extends Component {
    render() {
        return (
            <div>
                <UserProvider value={{name : 'hamza',age : 17}}>
                    <ClassB />
                </UserProvider>
            </div>
        )
    }
}
export default ClassA