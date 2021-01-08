import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'
class PostsList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (value) => {this.setState({
                posts : value.data
            },() => {console.log(this.state.posts)})}
        ).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        const {postsd} = this.state 
        const posts = this.state.posts.map((post)=>(<Post key={post.id}  title={post.title} />))
         
       
        return (
            <div>
                {/* {
                    postsd.length ?
                    postsd.map((post) =><h3> {post.title}</h3>) : null 
                    
    } */
    posts
    }
            </div>
        )
    }
}
export default PostsList