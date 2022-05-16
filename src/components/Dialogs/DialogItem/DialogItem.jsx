import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

export const DialogItem = ({ id, name }) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};
