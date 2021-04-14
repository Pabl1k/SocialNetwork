import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (newPost: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postElements =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addNewPost = (value: AddPostFormType) => {
        props.addPost(value.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

type AddPostFormType = {
    newPost: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPost' placeholder='Enter new post...'/></div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    </>
}
const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts;