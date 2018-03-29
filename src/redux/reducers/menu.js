import {SET_TOP_PANEL, SET_MY_ORDERS, SWITCH_NOTIFICATION} from '../../constants/actions'


let initialState = {top_panel: 2, left_panel: 0, my_orders: 0, notification: false};

if (process.env.NODE_ENV === 'development') {
    initialState = {top_panel: 2, left_panel: 0, my_orders: 0, notification: false};
}

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
        case SWITCH_NOTIFICATION:
            return {
                ...state,
                notification: !state.notification
            };
        default:
            return state
    }
};

export default menu