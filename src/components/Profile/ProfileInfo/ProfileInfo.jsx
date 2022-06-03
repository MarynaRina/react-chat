import { Preloader } from '../../common/Preloader';
import s from './ProfileInfo.module.css';

export const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={s.profile__photo}>
                <img
                    alt='profile__photo'
                    src='https://garytylerphotography.com/wp-content/gallery/sunsets/sunset-02.08.18.jpg'
                />
            </div>
            <div className={s.descr}>
                <div className={s.descrIcon}>
                    <img src={profile.photos.small} alt='profile_img' />
                </div>
                <h1 className={ s.h1}>Description</h1>
                {!profile.aboutMe ? <p>About me</p> : <p>{profile.aboutMe}</p>}
                <div className={s.job}>
                    {profile.lookingForAJob === true
                        ? 'Found a job'
                        : 'Dont found a job'}
                </div>
            </div>
        </div>
    );
};
