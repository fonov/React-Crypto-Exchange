import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'


export default class CheckBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state: false
        }
    }

    render() {
        const {state} = this.state;

        return(
            <div className='my-checkbox' onClick={() => this.setState({state: !state})}>
                {state ? <FontAwesome name='check'/> : null}
            </div>
        )
    }
}