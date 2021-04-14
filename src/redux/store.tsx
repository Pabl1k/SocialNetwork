import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {AxiosType} from "../components/Profile/ProfileContainer";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: null | AxiosType
    status: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    addNewPost?: (id: string, message: string, likesCount: number) => void
    updateNewPostText?: (id: string, message: string, likesCount: number) => void
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'It\'s my first post', likesCount: 11},
                {id: v1(), message: 'Blabla', likesCount: 11},
                {id: v1(), message: 'Dada', likesCount: 11}
            ],
            profile: null,
            status: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Valera'}
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'}
            ],
        }
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._onChange();
    }
}

export default store;