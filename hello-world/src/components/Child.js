import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.passedMethod("child")} >Show event from the parent</button>
        </div>
    )
}

export default Child
