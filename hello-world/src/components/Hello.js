import react from 'react'

const Hello = (props) => {
    console.log(props)
    return (
       <>
            <div>
              {props.name} <hr/> {props.children}
            </div>
       </>
    )
}

export default Hello;