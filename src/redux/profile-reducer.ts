import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./store";

enum ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    newPostText: ''
};

const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_POST:{
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
    }
        case ACTION_TYPE.UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}
export const addPostAC = () => {
    return {
        type: ACTION_TYPE.ADD_POST
    } as const
}

export const updateNewPostTextPostAC = (newText: string) => {
    return {
        type: ACTION_TYPE.UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;