import * as actionType from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    if (action.type === actionType.GET_AVAILABLE) {
        const newState = [...action.crews]
        return newState;
    }
    return state;
}

export default reducer;