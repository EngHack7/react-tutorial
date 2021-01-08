import React, { Component } from 'react'

class Post extends Component {
    render() {
        console.log('PostWork ', this.props)

        return (
            <React.Fragment>
                <h2>{this.props.id} - {this.props.title}</h2>
            </React.Fragment>
        )
    }
}

export default Post
