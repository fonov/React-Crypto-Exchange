import {SINGIN, SINGOUT} from '../../constants/actions'


const initState = null;

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