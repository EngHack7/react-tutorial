import React, { Component } from 'react'


class Refs extends Component {

    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    

    focusInput = () =>{
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input ref={this.textInput} />
                <input  ref={this.textInput} />

            </div>
        )
    }
}

export default Refs
