import React from 'react';
import s from './MyPosts.module.css';
import { useRef } from 'react';
import { Post } from './Post/Post';

export const MyPosts = ({ posts, addPost, updateNewPostText, newPostText }) => {
    let postsElements = posts.map(post => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let ref = useRef(null);

    let onAddPost = () => {
        addPost();
    };

    let onPostChange = () => {
        let text = ref.current.value;
        updateNewPostText(text);
    };

    return (
        <div className={s.my_post}>
            <h3 className={s.postsTitle}>My posts:</h3>
            <div className='create-post'>
                <textarea
                    onChange={onPostChange}
                    value={newPostText}
                    ref={ref}
                    className={s.story}
                    id='story'
                    name='story'
                    rows='4'
                    cols='66'
                />
                <div>
                    <button onClick={onAddPost} className={s.button_4}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
