import {combineReducers, createStore} from 'redux';
import profileReducer, {PROFILE_ACTION_TYPE} from "./profile-reducer";
import {DIALOGS_ACTION_TYPE} from "./dialogs-reducer"
import dialogsReducer from "./dialogs-reducer";
import usersReducer, {USERS_ACTION_TYPE, UsersReducerType} from "./users-reducer";
import {DialogsPageType, ProfilePageType} from "./store";

export type RootStateType = {
    profileReducer: ProfilePageType
    dialogsReducer: DialogsPageType
    usersPage: UsersReducerType
}

export type ActionType =
    PROFILE_ACTION_TYPE.ADD_POST
    | PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT
    | DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE
    | DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY
    | USERS_ACTION_TYPE.FOLLOW
    | USERS_ACTION_TYPE.UNFOLLOW
    | USERS_ACTION_TYPE.SET_USERS

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
//@ts-ignore
window.store = store