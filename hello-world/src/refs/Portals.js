import React from 'react'
import ReactDOM from 'react-dom'

function Portals(props) {
    return ReactDOM.createPortal(
        <React.Fragment>
            portal work- counter = {props.counter}
        <button onClick={props.increment} >increment</button>

        </React.Fragment >
        ,
        document.getElementById('first-portal')
    )
}

e