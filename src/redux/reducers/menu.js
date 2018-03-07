import {SET_TOP_PANEL, SET_MY_ORDERS} from '../../constants/actions'


const initialState = {top_panel: 2, left_panel: 0, my_orders: 0};

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
        default:
            return state
    }
};

export default menu