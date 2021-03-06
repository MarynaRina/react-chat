import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
    _state: {
        profilePage: {},
        dialogsPage: {},
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );

        this._callSubscriber(this._state);
    },
};

export default store;
