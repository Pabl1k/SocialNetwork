import {getAuthUserDataTC} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./redux-store";

enum APP_ACTION_TYPE {
    INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY'
}

type AppReducerType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: InitializedType): AppReducerType => {
    switch (action.type) {
        case APP_ACTION_TYPE.INITIALIZED_SUCCESSFULLY:
            return {...state, initialized: true}
        default:
            return state;
    }
}

type InitializedType = ReturnType<typeof initializedSuccessfully>

type ThunkType = ThunkAction<void, RootStateType, unknown, InitializedType>

// AC
export const initializedSuccessfully = () => ({type: APP_ACTION_TYPE.INITIALIZED_SUCCESSFULLY} as const)
// TC
export const initializeApp = (): ThunkType => (dispatch: ThunkDispatch<RootStateType, unknown, InitializedType>) => {
    let getAuthUserDataPromise = dispatch(getAuthUserDataTC())
    Promise.all([getAuthUserDataPromise])
    .then(() => {
        dispatch(initializedSuccessfully())
    })
}

export default appReducer;