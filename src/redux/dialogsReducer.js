const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are ypu' },
        { id: 3, message: 'Sun' },
        { id: 4, message: 'Tomato' },
        { id: 5, message: 'English' },
    ],
    dialogs: [
        { id: 1, name: 'Nina' },
        { id: 2, name: 'Pol' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Tonya' },
        { id: 5, name: 'Sonya' },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
                newMessageText: '',
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};

export const updateNewMessageTextCreator = body => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: body,
    };
};

export default dialogsReducer;
