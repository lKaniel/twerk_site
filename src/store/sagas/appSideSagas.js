import { put, takeEvery} from "redux-saga/effects";
import {SET_OFFLINE_CLIENT_STATUS, SET_ONLINE_CLIENT_STATUS} from "../actions/actionTypes";
import {eventChannel} from "redux-saga";


export function* mediaSagaWatcher() {
    const onlineChannel = eventChannel((emitter) => {
        window.addEventListener('online', emitter);
        return () => window.removeEventListener('online', emitter);
    });
    yield takeEvery(onlineChannel, setOnline);


    const offlineChannel = eventChannel((emitter) => {
        window.addEventListener('offline', emitter);
        return () => window.removeEventListener('offline', emitter);
    });
    yield takeEvery(offlineChannel, setOffline);
}

function* setOnline() {
    yield put({type: SET_ONLINE_CLIENT_STATUS});
}

function* setOffline() {
    yield put({type: SET_OFFLINE_CLIENT_STATUS});
}
