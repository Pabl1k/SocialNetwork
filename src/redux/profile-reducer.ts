import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./store";
import {AxiosType} from "../components/Profile/ProfileContainer";

export enum PROFILE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE'
}

type AddPostACType = {
    type: PROFILE_ACTION_TYPE.ADD_POST,
}
type UpdateNewPostTextPostACType = {
    type: PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT,
    newText: string
}
type SetUserProfileACType = {
    type: PROFILE_ACTION_TYPE.SET_USER_PROFILE,
    profile: AxiosType | null
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state: ProfilePageType = initialState, action: ProfileACType): ProfilePageType => {
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
        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            debugger
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export type ProfileACType = AddPostACType | UpdateNewPostTextPostACType | SetUserProfileACType;

export const addPostAC = (): AddPostACType => {
    return {
        type: PROFILE_ACTION_TYPE.ADD_POST
    }
}

export const updateNewPostTextPostAC = (newText: string): UpdateNewPostTextPostACType => {
    return {
        type: PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export const setUserProfile = (profile: AxiosType | null): SetUserProfileACType => {
    return {type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile}
}

export default profileReducer;