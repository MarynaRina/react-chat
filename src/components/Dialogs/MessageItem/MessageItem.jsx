import s from '../Dialogs.module.css'

export const MessageItems = ({ message }) => {
    return (
        <div className={s.message}>{message}</div>
    );
};