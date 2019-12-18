import {combineReducers} from "redux"
import {authReducer} from "./Auth/reducers";
import {userstableReducer} from "./UsersTable/reducers";


export default combineReducers({
    auth: authReducer,
    userstable: userstableReducer
});