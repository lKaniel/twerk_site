import {SET_OFFLINE_CLIENT_STATUS, SET_ONLINE_CLIENT_STATUS} from "../actions/actionTypes";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const initialState = {
    isOnline: true
};

export default function graphReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ONLINE_CLIENT_STATUS:
            return {
                ...state,
                isOnline: true
            }
        case SET_OFFLINE_CLIENT_STATUS:
            return {
                ...state,
                isOnline: false
            }
        default:
            return state;
    }
}
