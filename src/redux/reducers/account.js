import {SINGIN, SINGOUT} from '../../constants/actions'


let initState = {};

if (process.env.NODE_ENV === 'development') {
    initState = {};
}

const state = (state = initState, action) => {
    switch (action.type) {
        case SINGIN:
            return {};
        case SINGOUT:
            return null;
        default:
            return state
    }
};

export default state