import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileACType} from "./profile-reducer";
import dialogsReducer, {DialogsDispatchType} from "./dialogs-reducer";
import usersReducer, {UsersACType} from "./users-reducer";
import {authReducer, AuthReducerACType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

type ReducersType = typeof reducer

export type RootStateType = ReturnType<ReducersType>

export type AllActionTypes = ProfileACType | DialogsDispatchType | UsersACType | AuthReducerACType  ;

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
//@ts-ignore
window.store = store