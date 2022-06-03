import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = ({ isAuth, login }) => {
    return (
        <>
            <div className={s.header}>
                <img src='./logo.png' alt='Logo' />
                <h1>Chat</h1>
            </div>
            
        </>
    );
};
