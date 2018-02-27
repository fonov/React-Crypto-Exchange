import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//Custom
import menu from './menu'

const reducers = combineReducers({
    router: routerReducer,
    menu
});

export default reducers