import {OPEN_PAGE, CLOSE_PAGE} from '../../constants/actions'

const InitState = false;

const State = (state=InitState, action) => {
    switch (action.type) {
        case OPEN_PAGE:
            return true;
        case CLOSE_PAGE:
            return false;
        default:
            return state
    }
};

export default State