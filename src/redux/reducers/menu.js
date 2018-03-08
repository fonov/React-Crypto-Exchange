import {SET_TOP_PANEL, SET_MY_ORDERS, SET_ORDER_CLOSE_MODAL} from '../../constants/actions'


const initialState = {top_panel: 2, left_panel: 0, my_orders: 0, order_close_modal: false};

const menu = (state=initialState, action) => {
    switch (action.type) {
        case SET_TOP_PANEL:
            return {
                ...state,
                top_panel: action.number
            };
        case SET_MY_ORDERS:
            return {
                ...state,
                my_orders: action.number
            };
        case SET_ORDER_CLOSE_MODAL:
            return {
                ...state,
                order_close_modal: action.modal
            };
        default:
            return state
    }
};

export default menu