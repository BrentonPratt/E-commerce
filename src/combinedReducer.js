import { combineReducers } from "redux";
import searcher from "./searchReducer";
import api from './apiReducer';

export default combineReducers({
    searcher,
    api
});