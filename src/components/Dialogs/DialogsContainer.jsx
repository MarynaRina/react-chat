import { connect } from 'react-redux';
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
let mapDispatchToProps = dispatch => {
    return {
        updateNewMessageText: body => {
            dispatch(updateNewMessageTextCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
