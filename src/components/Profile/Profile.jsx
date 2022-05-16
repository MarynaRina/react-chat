import s from './Profile.module.css';
import MyPostsContainer from './MyPost/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo copy';

export const Profile = ({store}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </div>
    );
};
