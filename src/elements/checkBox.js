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
        const {state} = this.state, {className = {}, label} = this.props;

        return [
            <div className={`my-checkbox ${className}`} onClick={() => this.setState({state: !state})}>
                {state ? <FontAwesome name='check'/> : null}
            </div>,
            <span onClick={() => this.setState({state: !state})}>
                {label}
            </span>
        ]
    }
}