import {
    GETTING_LOGIN_PASSWORD,
    VALID_PASSWORD,
    VALID_LOGIN,
} from './consts';

const initialState = {
    login: "",
    password: "",
    auth: false,
};

const loginPasswordChecking = (a,b) => {
       return (a === VALID_LOGIN && b === VALID_PASSWORD);
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_LOGIN_PASSWORD:
            return {
                ...state,
                login: action.login,
                password: action.password,
                auth: loginPasswordChecking(action.login, action.password),
            };
        default:
            return state;

    }
};