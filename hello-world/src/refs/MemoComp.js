import React from 'react'

function MemoComp({number}) {
    console.log('memo component' ,number)
    return (
        
        <React.Fragment>
            <h4>Memo work </h4>
        </React.Fragment>
    )
}

export default React.memo(MemoComp)
