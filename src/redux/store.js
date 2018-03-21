import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers/index'
import otherReducers from './otherReducers/index'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'


const history = createHistory();

const route_middleware = routerMiddleware(history);


const store = () => {
    if (process.env.NODE_ENV === 'development') {
        return createStore(
            combineReducers({
                ...reducers,
                ...otherReducers
            }),
            compose(
                applyMiddleware(ReduxThunk),
                applyMiddleware(route_middleware),
                applyMiddleware(logger)
            )
        );
    } else {
        return createStore(
            combineReducers({
                ...reducers,
                ...otherReducers
            }),
            compose(
                applyMiddleware(ReduxThunk),
                applyMiddleware(route_middleware)
            )
        );
    }
};

export {
    store,
    history
}