import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <img src='./logo.png' alt='Logo' />
        </div>
    );
};
