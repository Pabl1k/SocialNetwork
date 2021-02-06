import React from 'react';
import {addPostAC, updateNewPostTextPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfilePageType, StoreType} from "../../../redux/store";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<PropsType> = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextPostAC(text);
        props.store.dispatch(action)
    }
    return (
        <MyPosts profilePage={state.profilePage} updateNewPostText={onPostChange} addPost={addPost} />
    )
}