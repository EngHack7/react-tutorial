import react , {Component} from 'react';

 class Message extends Component {

    constructor(){
        super()
        this.state = {
            message : 'hello hamza'
        }
    }

    onMessageChange(){
        this.setState({message : 'hello subscriber'})
    }

    render(){

        return <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onMessageChange() }>change</button>
        <button onClick={() => this.props.passedMethod(`Message`) }>Alert from parent</button>

        </>
    }
}
export default Message