import React, { Component } from 'react'
import {UserConsumer} from './userContext'


class ClassC extends Component {
    render() {
        return (
            
           <UserConsumer>
       {user => {
					return <div>Hello {user.name} your Age = {user.age}</div>
				}}
           </UserConsumer>
        )
    }
}

export default ClassC