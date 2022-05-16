import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { MessageItems } from './MessageItem/MessageItem';

export const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageText }) => {
    let state = dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    ));

    let messagesElements = state.messages.map(message => (
        <MessageItems message={message.message} key={message.id} />
    ));

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        sendMessage();
    };

    let onNewMessageChange = e => {
        let body = e.target.value;
        updateNewMessageText(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            id='story'
                            name='story'
                            rows='10'
                            cols='50'
                            value={newMessageText}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}
                            className={s.button_4}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
