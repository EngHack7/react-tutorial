import React, { Component } from 'react'
import Persons from '../components/ListPersonsService'
import Option from './SelectOption'
class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             topic : 'select value'
        }
    }

    onUserNameChange = (event) => {
        this.setState({
            userName : event.target.value
        },()=>{
            console.log(this.state.userName);
        })
    }
    onSelect =(event) =>{
        this.setState({
            topic : event.target.value
        },console.log(event.target.value))
    }
    
    onSubmit =(event) =>{
        alert(`${this.state.userName}  ${this.state.topic} `)
        event.preventDefault()
    }

    render() {
        const options = Persons.map(person =><Option  key={person._id} value={person.name} name={person.email} />)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>user name </label>
                    <input value={this.state.userName} onChange={this.onUserNameChange} />
                    <select onChange={this.onSelect}>
                        {options}
                    </select>
                    <button type="submit" >submit</button>
                </form>
            </div>
        )
    }
}

export default Form
