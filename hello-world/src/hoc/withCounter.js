import React from 'react'

const WithCounter = (WrappedComponent) =>{
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }

        increment = () =>{
            this.setState(prevState => {
				return { count: prevState.count + 1 }
			})
        }

        render(){
           return(
                <WrappedComponent count={this.state.count}
                increment = {this.increment}
                // {...this.props.name} must spread props come from child to represent in WrappedComponent
                />
           )
        }
    }
    return WithCounter //return class i declared to export (new class will not exported without this return)
}
export default WithCounter