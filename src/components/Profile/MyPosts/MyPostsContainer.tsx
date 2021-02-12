import React from 'react';
import {addPostAC, updateNewPostTextPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let MapStateToProps = (state: any) => {
    return {
        profilePage: state.profileReducer
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextPostAC(newText))
        }
    }
}

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)