import React, { Component } from 'react'

class PureComponent extends React.PureComponent {
    render() {
        console.log('Pure component');
        return (
            <div>
                pure component
            </div>
        )
    }
}

export default PureComponent
