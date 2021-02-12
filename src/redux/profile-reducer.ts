import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./store";

export enum PROFILE_ACTION_TYPE {
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
        case PROFILE_ACTION_TYPE.ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}
export const addPostAC = () => {
    return {
        type: PROFILE_ACTION_TYPE.ADD_POST
    } as const
}

export const updateNewPostTextPostAC = (newText: string) => {
    return {
        type: PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;