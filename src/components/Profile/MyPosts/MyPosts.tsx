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
        props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElementRef = React.createRef<any>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElementRef.current.value
        props.updateNewPostText(text)
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