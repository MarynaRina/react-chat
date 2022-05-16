import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile__photo}>
                <img src="./profilePhoto.png" alt="profile photo" />
            </div>

            <div className={s.descr}>
                <div className={s.descrText}>
                    descr
                </div>
                <div className={s.descrIcon}>
                <img width={22} src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-pencil-user-interface-kmg-design-detailed-outline-kmg-design.png" />
                </div>
            </div>
        </div>
    )
};


