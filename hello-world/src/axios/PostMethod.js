import React, { Component } from 'react'
import axios from 'axios'
class PostMethod extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }
     
    handleSubmit = (event) =>{

        event.preventDefault()
        const {userId,title,body} = this.state
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            userId,title,body
        }).then((res)=>{console.log(res)}).catch(error => console.log(error) )
    }

    onChangeHandle =  e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
       
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.onChangeHandle} name="userId" value={this.state.userId}  />
                    <input onChange={this.onChangeHandle} name="title" value={this.state.title} />
                    <input onChange={this.onChangeHandle} name="body" value={this.state.body} />
                    <button type="submit" >send data by axios</button>
                </form>
            </div>
        )
    }
}

export default PostMethod
