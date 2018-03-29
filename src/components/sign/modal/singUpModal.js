import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../../constants/urls'
import BaseSingModal from './baseSingModal'
import {switchSingUPModal, switchSingINModal} from '../../../actions/modals'


class SingUpModal extends Component {

    render() {

        const {push, singup, switchSingUPModal, switchSingINModal} = this.props;

        return (
            <BaseSingModal
                isOpen={singup}
                toggle={() => switchSingUPModal(false)}
            >
                <div className='text-center'>
                    <strong className='it-fs24 it-fw6'>
                        Create an account
                    </strong>
                </div>
                <FormGroup className='text-left mt-4'>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" />
                </FormGroup>
                <FormGroup className='text-left mt-2'>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" name="password" />
                </FormGroup>
                <FormGroup className='text-left mt-2'>
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
                    <span
                        className='text-primary it-pointer ml-1'
                        onClick={() => {
                            switchSingUPModal(false);
                            setTimeout(() => switchSingINModal(true), 150)
                        }}
                    >
                        Sign in
                    </span>
                </div>
            </BaseSingModal>
        )
    }
}

const mapStateToProps = state => {
    return {
        singup: state.modals.singup
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switchSingUPModal: state => dispatch(switchSingUPModal(state)),
        switchSingINModal: state => dispatch(switchSingINModal(state))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUpModal);