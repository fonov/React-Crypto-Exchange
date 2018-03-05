import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//Custom
import menu from './menu'
import theme from './theme'

const reducers = combineReducers({
    router: routerReducer,
    menu,
    theme
});

export default reducers