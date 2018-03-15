import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//Custom
import menu from './menu'
import theme from './theme'
import LeftPage from './LeftPage'


const reducers = combineReducers({
    router: routerReducer,
    menu,
    theme,
    LeftPage
});

export default reducers