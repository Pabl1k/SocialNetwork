import {authAPI} from "../API/api";
import {Action, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AllActionTypes, RootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export enum AUTH_ACTION_TYPE {
    SET_USER_DATA = 'SET_USER_DATA'
}

type AuthReducerType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthReducerACType) => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetUserDataType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA
    payload: AuthReducerType
}

export type AuthReducerACType = SetUserDataType

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => ({
    type: AUTH_ACTION_TYPE.SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

//thunk
type ThunkType = ThunkAction<void, RootStateType, unknown, AllActionTypes>

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean = true): ThunkType => (dispatch: ThunkDispatch<RootStateType, unknown, AllActionTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}) as any)
            }
        });
}

export const logoutUserTC = (): ThunkType => (dispatch: ThunkDispatch<RootStateType, unknown, AllActionTypes>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}