import {combineReducers} from "redux"
import {authReducer} from "./Auth/reducers";


export default combineReducers({
    auth: authReducer
});