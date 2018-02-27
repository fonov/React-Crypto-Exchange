import {SET_TOP_PANEL} from '../constants/actions'


export const set_top_panel = number => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_TOP_PANEL,
            number
        })
    }
};