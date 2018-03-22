import {switchSingINModal} from './modals'


export const baseWrapper = (event) => {
    return (dispatch, getState) => {
        const {account} = getState();

        if (account) {
            event()
        } else {
            dispatch(switchSingINModal(true))
        }
    }
};