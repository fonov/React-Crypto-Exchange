import React, { Component } from 'react';
import Sign from './sign'
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../constants/urls'


class SingUp extends Component {

    render() {

        const {push} = this.props;

        return (
            <Sign>
                <div className='text-center'>
                    <strong className='it-fs24'>
                        Create an account
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
                <FormGroup className='text-left'>
                    <Label for="exampleEmail">Password confirmation</Label>
                    <Input type="password" name="password_confirmation"/>
                </FormGroup>
                <div className='text-center it-fs16 mt-4'>
                    By creating an account, you are agreeing
                    <p className='text-primary'>to the Terms</p>
                </div>
                <Button color="primary" size="lg" block className='mt-4'>
                    Sign up
                </Button>
                <div className='text-center it-fs16 mt-4'>
                    Already have an account?
                    <span className='text-primary it-pointer ml-1' onClick={() => push(URLS.SIGNIN)}>
                        Sign in
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);