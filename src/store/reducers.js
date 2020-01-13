import {combineReducers} from "redux"
import {authReducer} from "./Auth/reducers";
import {userstableReducer} from "./UsersTable/reducers";
import {reducer as formReducer } from "redux-form"


export default combineReducers({
    auth: authReducer,
    userstable: userstableReducer,
    form: formReducer
});