import { combineReducers } from "redux";
import searcher from "./searchReducer";
import api from './apiReducer';
import cart from './cartReducer';

export default combineReducers({
    searcher,
    api,
    cart
});