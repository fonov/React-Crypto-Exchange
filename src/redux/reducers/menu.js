import {SET_TOP_PANEL} from '../../constants/actions'

const initialState = {top_panel: 1, left_panel: 0};

const menu = (state=initialState, action) => {
    switch (action.type) {
        case SET_TOP_PANEL:
            return {
                ...state,
                top_panel: action.number
            };
        default:
            return state
    }
};

export default menu