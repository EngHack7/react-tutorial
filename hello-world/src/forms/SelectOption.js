import React from 'react'
import Persons from '../components/ListPersonsService'

function SelectOption({value, name}) {
    return (
        <option value={value}>{name}</option>          
        
    )
}

export default SelectOption
