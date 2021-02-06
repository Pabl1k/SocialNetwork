import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const updateNewPostTextPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;