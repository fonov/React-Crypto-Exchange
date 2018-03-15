import {OPEN_PAGE, CLOSE_PAGE} from '../constants/actions'
import {push} from "react-router-redux";


export const OpenPageAction = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({
                type: OPEN_PAGE
            })
        }, 70)
    }
};

export const ClosePageAction = url => {
    return (dispatch, getState) => {
        dispatch({
            type: CLOSE_PAGE
        });

        setTimeout(() => {
            dispatch(push(url))
        }, 200)
    }
};