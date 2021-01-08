import React, { Component } from 'react'
import Child from './FrInputRefs'
class ParentForwardRefs extends Component {
    constructor(props) {
        super(props)
        this.inputRefs = React.forwardRef()
    }

    handleFocusClick = () =>{
        this.inputRefs.current.focus()
    }
    
    render() {
        return (
            <div>
                <Child ref={this.inputRefs} />
                <button onClick={this.handleFocusClick} type='submit' >submit</button>
            </div>
        )
    }
}

export default ParentForwardRefs
