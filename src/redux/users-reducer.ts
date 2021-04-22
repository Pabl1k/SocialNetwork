import {usersAPI} from "../API/api";
import {Dispatch} from "redux";

export enum USERS_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_FOLLOW_PENDING = 'TOGGLE_FOLLOW_PENDING'
}

type PhotoSize = {
    small: string | null
    large: string | null
}
export type UsersStateType = {
    id: string
    photos: PhotoSize
    name: string
    followed: boolean
    status: string | null
}

export type UsersReducerType = {
    users: Array<UsersStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followPending: Array<number>
}

let initialState: UsersReducerType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followPending: []
};

const usersReducer = (state: UsersReducerType = initialState, action: UsersACType) => {
    switch (action.type) {
        case USERS_ACTION_TYPE.FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case USERS_ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case USERS_ACTION_TYPE.SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case USERS_ACTION_TYPE.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case USERS_ACTION_TYPE.TOGGLE_FOLLOW_PENDING:
            return action.followPending
                ? {...state, followPending: [...state.followPending, action.userId]}
                : {...state, followPending: [...state.followPending.filter(id => id !== action.userId)]}

        default:
            return state;
    }
}

type FollowACType = {
    type: USERS_ACTION_TYPE.FOLLOW
    userId: string
}
type UnfollowACType = {
    type: USERS_ACTION_TYPE.UNFOLLOW
    userId: string
}
type SetUsersACType = {
    type: USERS_ACTION_TYPE.SET_USERS
    users: Array<UsersStateType>
}
type SetCurrentPageACType = {
    type: USERS_ACTION_TYPE.SET_CURRENT_PAGE
    currentPage: number
}
type SetIsFetchingAC = {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}
type SetTotalUserCountACType = {
    type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT
    count: number
}
type ToggleFollowPendingType = {
    type: USERS_ACTION_TYPE.TOGGLE_FOLLOW_PENDING
    followPending: boolean
    userId: number
}

export type UsersACType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetIsFetchingAC
    | SetTotalUserCountACType
    | ToggleFollowPendingType

export const followSuccess = (userId: string): FollowACType => ({type: USERS_ACTION_TYPE.FOLLOW, userId})
export const unfollowSuccess = (userId: string): UnfollowACType => ({type: USERS_ACTION_TYPE.UNFOLLOW, userId})
export const setUsers = (users: Array<UsersStateType>): SetUsersACType => ({type: USERS_ACTION_TYPE.SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({
    type: USERS_ACTION_TYPE.SET_CURRENT_PAGE,
    currentPage
})
export const toggleIsFetching = (isFetching: boolean): SetIsFetchingAC => ({
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING,
    isFetching
})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUserCountACType => ({
    type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleFollowPending = (followPending: boolean, userId: number): ToggleFollowPendingType => ({
    type: USERS_ACTION_TYPE.TOGGLE_FOLLOW_PENDING,
    followPending,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => { // thunk
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        });
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowPending(true, +(userId)))
        usersAPI.followUser(+(userId))
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowPending(false, +(userId)))
            });
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowPending(true, +(userId)))
        usersAPI.unfollowUser(+(userId))
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowPending(false, +(userId)))
            });
    }
}


export default usersReducer;