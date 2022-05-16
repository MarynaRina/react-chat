import s from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src="./avatar.png" alt="profile" />
                <span>{props.message}</span>
            </div>
            <div className={s.likePost}>
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-heart-basic-ui-elements-flatart-icons-outline-flatarticons.png" /> 
                {props.likeCount}
            </div>
        </div>
    )
};


