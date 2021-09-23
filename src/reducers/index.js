import counterReducer from './counter';
import loginReducer from './isLogged';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default allReducers;