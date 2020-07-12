import * as actionType from '../actions/actionTypes';

const initialState = {
    latLng:{},
    description:''
};

const reducer = (state = initialState, action) => {
    if(action.type === actionType.CURRENT_LOCATION){
        const newState = {...state};
        newState.latLng = {...action.data}
        return newState;
    }
    if(action.type === actionType.DESCRIPTION_LOCATION){
        const newState = {...state};
        newState.description = action.data;
        return newState;
    }
   // console.log(action);

    return state
};

export default reducer;

