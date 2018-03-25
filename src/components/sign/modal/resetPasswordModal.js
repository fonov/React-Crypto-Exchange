import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../../constants/urls'
import BaseSingModal from './baseSingModal'
import {switchResetPasswordModal} from '../../../actions/modals'


class ResetPasswordModal extends Component {

    render() {

        const {push, reset_password, switchResetPasswordModal} = this.props;

        return (
            <BaseSingModal
                isOpen={reset_password}
                toggle={() => switchResetPasswordModal(false)}
            >
                <div className='text-center'>
                    <strong className='it-fs24 mt-4 it-fw6'>
                        Reset password
                    </strong>
                </div>
                <FormGroup className='text-left mt-4'>
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
            </BaseSingModal>
        )
    }
}

const mapStateToProps = state => {
    return {
        reset_password: state.modals.reset_password
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switchResetPasswordModal: state => dispatch(switchResetPasswordModal(state))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordModal);