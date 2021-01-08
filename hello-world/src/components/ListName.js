import React from 'react'
import Person from './Person'
import Persons from './ListPersonsService'
function ListName() {
    // const arr = ['hamza','omar','abdallah']
    const nameList = Persons.map(person => <Person key={person._id} name={person.name} /> )
    return (
        <div>
            {nameList}
        </div>
    )
}

export default ListName
