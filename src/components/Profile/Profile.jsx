import s from './Profile.module.css';
import MyPostsContainer from './MyPost/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({ store, profile }) => {
    // if (!profile) {
    //     return <Preloader />;
    // }
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} />
            <hr />
            <MyPostsContainer /* store={store} */ />
        </div>
    );
};
