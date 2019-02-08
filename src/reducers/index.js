import {combineReducers} from 'redux';
import homeInformations from './homeInfoReducer';

const rootReducer = combineReducers({
    homeInfo : homeInformations
});

export  default rootReducer;
