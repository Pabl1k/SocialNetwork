import React from 'react';
import {addPostAC, updateNewPostTextPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostAC())
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextPostAC(text);
                    store.dispatch(action)
                }
                return (
                    <MyPosts profilePage={state.profilePage}
                             updateNewPostText={onPostChange}
                             addPost={addPost}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}