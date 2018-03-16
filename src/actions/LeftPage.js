import {OPEN_PAGE, CLOSE_PAGE} from '../constants/actions'
import {push} from "react-router-redux";


export const OpenPageAction = () => {
    return (dispatch, getState) => {
        dispatch({type: OPEN_PAGE})
    }
};

export const ClosePageAction = url => {
    return (dispatch, getState) => {
        dispatch({type: CLOSE_PAGE, back_url: url});

        setTimeout(() => {
            dispatch(push(url))
        }, 350)
    }
};