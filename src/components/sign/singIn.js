import React, { Component } from 'react';
import Sign from './baseSing'
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from "../../constants/urls";
import {singIN} from '../../actions/index'


class SingIn extends Component {

    render() {

        const {push, singIN} = this.props;

        return (
            <Sign>
                <div className='text-center'>
                    <strong className='it-fs24'>
                        Sign In
                    </strong>
                </div>
                <FormGroup className='text-left'>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" />
                </FormGroup>
                <FormGroup className='text-left'>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" name="password" />
                </FormGroup>
                <div className='text-center it-fs16 mt-4'>
                    <span className='text-primary it-pointer'>Forgot your password?</span>
                </div>
                <Button color="primary" size="lg" block className='mt-4' onClick={() => singIN()}>
                    Sign in
                </Button>
                <div className='text-center it-fs16 mt-4'>
                    Don't have an account?
                    <span className='text-primary ml-1 it-pointer' onClick={() => push(URLS.SIGNUP)}>
                        Sign up
                    </span>
                </div>
            </Sign>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        singIN: () => dispatch(singIN())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);