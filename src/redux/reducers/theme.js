import Theme from '../../constants/theme'
import {SET_THEME} from '../../constants/actions'


const get_theme = (index) => {
  let current_theme = {};

  for(let item of Object.keys(Theme)) {
      current_theme[item] = Theme[item][index]
  }

  return current_theme
};


const state = (state = get_theme(0), action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...get_theme(action.index)
            };
        default:
            return state
    }
};


export default state