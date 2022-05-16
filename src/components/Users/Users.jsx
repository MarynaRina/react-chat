import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/icon.svg';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <div className={s.users}>
                <h1>Users will be here</h1>
                {this.props.users.map(user => (
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
                                            this.props.unFollow(user.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            this.props.follow(user.id);
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
                            <h2 className={s.country}>
                                {'user.location.country'}
                            </h2>
                            <p className={s.city}>{'user.location.city'}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
