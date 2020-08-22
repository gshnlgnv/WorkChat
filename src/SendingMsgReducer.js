import {
    SENDING_MSG,
    EDIT_MESSAGE,
    DELETE_MESSAGE
} from "./consts";

const initialState = {
    messages: []
};

export const sendingMsgReducer = (state = initialState, action) => {

    console.log(action.id);

    switch (action.type) {
        case SENDING_MSG:
            return {
                ...state,
                messages: state.messages.concat({
                    text: action.payload,
                    id: Date.now(),
                })
            };
        case EDIT_MESSAGE:
            return {
                ...state,
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                id: action.id,
                messages: state.messages.filter( (item) => item.id !== action.id),
            };
        default:
            return state;
    }
};