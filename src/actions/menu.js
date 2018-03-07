import {SET_TOP_PANEL, SET_MY_ORDERS} from '../constants/actions'


export const set_top_panel = number => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_TOP_PANEL,
            number
        })
    }
};


export const set_my_orders = number => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_MY_ORDERS,
            number
        })
    }
};