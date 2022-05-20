import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/icon.svg';

export const Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            {pages.map(p => {
                return (
                    <span
                        className={
                            props.currentPage === p
                                ? s.selectedPage
                                : s.page
                        }
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                    >
                        {p}
                    </span>
                );
            })}
            <h1>Users will be here</h1>

            {props.users.map(user => (
                <div className={s.wrapper} key={user.id}>
                    <div className={s.pic}>
                        <img
                            className={s.img}
                            src={
                                user.photos.small !== null
                                    ? user.photos.small
                                    : userPhoto
                            }
                            alt='avatar'
                        />
                        <span className={s.btn}>
                            {user.followed ? (
                                <button
                                    onClick={() => {
                                        props.unFollow(user.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(user.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </span>
                    </div>

                    <div className={s.info}>
                        <h2 className={s.name}>{user.name}</h2>
                        <p className={s.status}>{user.status}</p>
                    </div>
                    <div className={s.location}>
                        <h2 className={s.country}>{'user.location.country'}</h2>
                        <p className={s.city}>{'user.location.city'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
