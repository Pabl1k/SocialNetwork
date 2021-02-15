import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from "../../../redux/store";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postElements =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElementRef.current) {
            props.updateNewPostText(newPostElementRef.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementRef}
                              onChange={onPostChange}
                              value={props.profilePage.newPostText}
                              placeholder={'Enter new post...'}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;