import {combineReducers} from "redux";
import graphReducer from "./tempReducer";

export default combineReducers({
    graph: graphReducer
})