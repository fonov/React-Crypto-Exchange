import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const reducers = combineReducers({
    router: routerReducer
});

export default reducers