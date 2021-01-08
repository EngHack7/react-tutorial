import React, { Component } from 'react'
import MemoComp from './MemoComp'
import Pure from './PureComponent'


class ChaneStateWithtime extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 number : 0,
                 number2 : 2
            }
        }
        

     componentDidMount(){
        var x = 0;
         setInterval(()=>{
             x=x+1
            console.log(x)
                
                 this.setState(({number}) => ({
                    number : number+1
                }))
            
         },2000)
     }
    render() {console.log('parent component')
        return (
            <div>
                parent component
                <MemoComp number={this.state.number2} />
                <Pure number={this.state.number} />
            </div>
        )
    }
}

export default ChaneStateWithtime
