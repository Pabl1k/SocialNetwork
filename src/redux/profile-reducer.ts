import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./store";
import {AxiosType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../API/api";
import {Dispatch} from "redux";

export enum PROFILE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS',
    UPDATE_STATUS = 'UPDATE_STATUS'
}

type AddPostACType = {
    type: PROFILE_ACTION_TYPE.ADD_POST,
    newPost: string
}

type SetUserProfileACType = {
    type: PROFILE_ACTION_TYPE.SET_USER_PROFILE,
    profile: AxiosType | null
}
type SetStatusACType = {
    type: PROFILE_ACTION_TYPE.SET_STATUS
    status: string
}

type UpdateStatusType = {
    type: PROFILE_ACTION_TYPE.UPDATE_STATUS
    payload: {
        status: string
    }
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state: ProfilePageType = initialState, action: ProfileACType): ProfilePageType => {
    switch (action.type) {
        case PROFILE_ACTION_TYPE.ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case PROFILE_ACTION_TYPE.SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case PROFILE_ACTION_TYPE.UPDATE_STATUS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export type ProfileACType = AddPostACType | SetUserProfileACType | SetStatusACType | UpdateStatusType;

export const addPostAC = (newPost: string): AddPostACType => {
    return {
        type: PROFILE_ACTION_TYPE.ADD_POST,
        newPost
    }
}

export const setUserProfile = (profile: AxiosType | null): SetUserProfileACType => ({type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusACType => ({type: PROFILE_ACTION_TYPE.SET_STATUS, status})
export const updateStatusAC = (status: string): UpdateStatusType => ({type: PROFILE_ACTION_TYPE.UPDATE_STATUS, payload: {status}})

// thunk
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateStatusAC(status))
            }
        })
}

export default profileReducer;