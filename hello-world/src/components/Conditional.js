import React, { Component } from 'react'


class Conditional extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
 
    render() {

        return this.state.isLoggedIn && <h1>Hello user</h1>
//////////////////////////////////////////////////////////////////////////////
//                       ternary conditional from es6        
        // return this.state.isLoggedIn ?  <h1>Hello user</h1> :
        // <h1>must loggedIn</h1>
//////////////////////////////////////////////////////////////////////////////  
//         second way declare variable and assign HTML element to this var      
        // let message;
        //         if (this.state.isLoggedIn) {
        //           message =  <h1>Hello user</h1>
        //         } else {
        //             message =  <h1>must loggedIn</h1>
        //         }
        //         return message
//////////////////////////////////////////////////////////////////////////////     
//                      first way if else                    
                // if else not in jsx and not work in return 
                // if (this.state.isLoggedIn) {
                //   return  <h1>Hello user</h1>
                // } else {
                //     return <h1>must loggedIn</h1>
                // }
        
        
    }
}

export default Conditional
