import {
    SWITCH_SINGIN_MODAL, SWITCH_SINGUP_MODAL, SWITCH_RESET_PASSWORD_MODAL
} from '../constants/actions'


export const switchSingUPModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_SINGUP_MODAL, singup: state})
    }
};

export const switchSingINModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_SINGIN_MODAL, singin: state})
    }
};

export const switchResetPasswordModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_RESET_PASSWORD_MODAL, reset_password: state})
    }
};