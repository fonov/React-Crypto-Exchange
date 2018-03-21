import React, { Component } from 'react';
import Sign from './sign'
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from "../../constants/urls";


class ResetPassword extends Component {

    render() {

        const {push} = this.props;

        return (
            <Sign>
                <div className='text-center'>
                    <strong className='it-fs24'>
                        Reset password
                    </strong>
                </div>
                <FormGroup className='text-left'>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" />
                </FormGroup>
                <Button color="primary" size="lg" block className='mt-4'>
                    Reset password
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);