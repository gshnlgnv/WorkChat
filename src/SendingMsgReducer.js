import {SENDING_MSG, EDIT_MESSAGE, DELETE_MESSAGE} from "./consts";

const initialState = {
    messages: []
};

export const sendingMsgReducer = (state = initialState, action) => {

    switch (action.type) {
        case SENDING_MSG:

            console.log(state.messages);

            // let newMessages = state.messages.concat();

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
            };
        default:
            return state;
    }
};