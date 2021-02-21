export enum AUTH_ACTION_TYPE {
    SET_USER_DATA= 'SET_USER_DATA'
}

type AuthReducerType = {
    userId: number | null
    email: string | null
    login:  string | null
    isAuth?: boolean
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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

type SetUserDataType = {
    type: AUTH_ACTION_TYPE.SET_USER_DATA
    data: AuthReducerType
}

type AuthReducerACType = SetUserDataType

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null): SetUserDataType => ({type: AUTH_ACTION_TYPE.SET_USER_DATA, data: {userId, email, login}})