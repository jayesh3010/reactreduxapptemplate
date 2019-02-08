import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function homeInformations(state = initialState.homeInfo, action) {

    //debugger;
    if(action.type === types.LOAD_HOME_INFO) {
        return action.homeInfo;
    } else
        return state;
}
