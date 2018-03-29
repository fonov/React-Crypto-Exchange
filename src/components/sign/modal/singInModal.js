import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../../constants/urls'
import BaseSingModal from './baseSingModal'
import {singIN, switchSingINModal, switchSingUPModal, switchResetPasswordModal} from '../../../actions/index'


class SingUpModal extends Component {

    render() {

        const {
            push, switchSingINModal, singin, switchSingUPModal, switchResetPasswordModal, singIN
        } = this.props;

        return (
            <BaseSingModal
                isOpen={singin}
                toggle={() => switchSingINModal(false)}
            >
                <div className='text-center'>
                    <strong className='it-fs24 it-fw6'>
                        Sign In
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
                <div className='text-center it-fs16 mt-4'>
                    <span
                        className='text-primary it-pointer'
                        onClick={() => {
                            switchSingINModal(false);
                            setTimeout(() => switchResetPasswordModal(true), 150)
                        }}
                    >
                        Forgot your password?
                    </span>
                </div>
                <Button color="primary" size="lg" block className='mt-4' onClick={() => {
                    switchSingINModal(false);
                    singIN()
                }}>
                    Sign in
                </Button>
                <div className='text-center it-fs16 mt-4'>
                    Don't have an account?
                    <span
                        className='text-primary ml-1 it-pointer'
                        onClick={() => {
                            switchSingINModal(false);
                            setTimeout(() => switchSingUPModal(true), 150)
                        }}
                    >
                        Sign up
                    </span>
                </div>
            </BaseSingModal>
        )
    }
}

const mapStateToProps = state => {
    return {
        singin: state.modals.singin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switchSingINModal: state => dispatch(switchSingINModal(state)),
        switchSingUPModal: state => dispatch(switchSingUPModal(state)),
        switchResetPasswordModal: state => dispatch(switchResetPasswordModal(state)),
        singIN: () => dispatch(singIN())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUpModal);