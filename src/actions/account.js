import {SINGIN, SINGOUT} from '../constants/actions'


export const singIN = () => {
    return (distpath, getState) => {
        distpath({type: SINGIN})
    }
};

export const singOUT = () => {
    return (dispatch, getState) => {
        dispatch({type: SINGOUT})
    }
};