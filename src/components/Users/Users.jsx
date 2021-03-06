import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/icon.svg';
import { NavLink } from 'react-router-dom';

export const Users = props => {
    /* let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    );*/

    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            {pages.map(page => {
                return (
                    <span
                        className={
                            props.currentPage === page ? s.selectedPage : s.page
                        }
                        onClick={() => {
                            props.onPageChanged(page);
                        }}
                    >
                        {page}
                    </span>
                );
            })}

            <h1>Users will be here</h1>

            {props.users.map(user => (
                <div className={s.wrapper} key={user.id}>
                    <div className={s.pic}>
                        <NavLink to={'/profile/' + user.id}>
                            <img
                                className={s.img}
                                src={
                                    user.photos.small !== null
                                        ? user.photos.small
                                        : userPhoto
                                }
                                alt='avatar'
                            />
                        </NavLink>
                        <span className={s.btn}>
                            {user.followed ? (
                                <button
                                    disabled={props.followingInProgress.some(
                                        id => id === user.id
                                    )}
                                    onClick={() => {
                                        props.unFollow(user.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(
                                        id => id === user.id
                                    )}
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
