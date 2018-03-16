import {SET_TOP_PANEL, SET_MY_ORDERS, SET_ORDER_CLOSE_MODAL, SWITCH_NOTIFICATION} from '../constants/actions'


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

export const set_order_close_modal = modal => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_ORDER_CLOSE_MODAL,
            modal
        })
    }
};

export const switch_notification = () => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_NOTIFICATION})
    }
};