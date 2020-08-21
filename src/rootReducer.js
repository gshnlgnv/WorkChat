import {combineReducers} from "redux";
import {loginReducer} from './loginReducer';
import {sendingMsgReducer} from './SendingMsgReducer';

export const rootReducer = combineReducers({
    loginReducer,
    sendingMsgReducer,
});