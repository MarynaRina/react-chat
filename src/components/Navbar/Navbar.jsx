import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = ({ isAuth, login }) => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink
                    to='/profile'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/dialogs'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/news'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/music'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/settings'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    Settings
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/users'
                    style={({ isActive }) => ({
                        color: isActive ? '#1a6acd' : '#636267',
                        fontWeight: isActive ? '600' : '400',
                    })}
                >
                    Users
                </NavLink>
                <div className={s.item}>
                    {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </nav>
    );
};
