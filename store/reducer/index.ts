import { combineReducers } from 'redux';
import counterReducer from './counter';
import location from './location';

const rootReducer = combineReducers({
    counter: counterReducer,
    location: location,
});

export default rootReducer;