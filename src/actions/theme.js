import {SET_THEME} from '../constants/actions'


export const set_theme = () => {
    return (dispatch, getState) => {
        const {theme} = getState();
        let index = 0;

        if (theme.theme_night) {
            index = 0;
            document.body.className = '';
        } else {
            index = 1;
            document.body.className = 'body_night';
        }

        dispatch({
            type: SET_THEME,
            index
        })
    }
};