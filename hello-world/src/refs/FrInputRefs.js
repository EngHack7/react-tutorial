import React from 'react'

const ChildForward = React.forwardRef((props,refs)=>{
    return ( <>
            <input ref={refs} />
            <input ref={refs} />
        </>)
    
})

export default ChildForward;