import { combineReducers } from 'redux';
import location from './location';
import getAvailable from './getAvailable';

const rootReducer = combineReducers({ 
    location: location,
    getAvailable:getAvailable,
});

export default rootReducer;