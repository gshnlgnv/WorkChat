import {
    GETTING_LOGIN_PASSWORD,
    SENDING_MSG,
    EDIT_MESSAGE,
    DELETE_MESSAGE,
} from './consts';

export const gettingLoginAndPassword = (loginValue, passwordValue) => {
    return {
        type: GETTING_LOGIN_PASSWORD,
        login: loginValue,
        password: passwordValue,
    }
};

export const sendingMessage = (message) => {
    return {
        type: SENDING_MSG,
        payload: message,
    }
};


export function editMessage(id, messages) {
    return {
        type: EDIT_MESSAGE,
        payload: messages,
    };
};

export function deleteMessage(id) {
    return {
        type: DELETE_MESSAGE,
        id: id,
    };
};