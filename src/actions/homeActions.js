import * as types from './actionTypes';

export function loadHomeInfoSuccess(homeInfo) {

    return {type: types.LOAD_HOME_INFO, homeInfo: homeInfo};
}

export function loadHomeInfoError(err) {

    return {type: types.LOAD_HOME_INFO_ERROR, homeInfo: err};
}

export function loadHomeInfo() {
    return function action(dispatch) {

        return fetch("/api/homeinfo")
            .then(response => response.json())
            .then(json => {
                dispatch(loadHomeInfoSuccess(json));
            }).catch(error => {
                dispatch(loadHomeInfoError(error));
            });

    };
}