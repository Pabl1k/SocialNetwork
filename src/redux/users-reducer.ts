export enum USERS_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
}

export type LocationType = {
    country: string
    city: string
}
type PhotoSize = {
    small: any
    large: any
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
}

let initialState: UsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        /*case USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }*/
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

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
/*
type SetTotalUserCountACType = {
    type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT
    count: number
}*/
type setIsFetchingAC = {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}


export type UsersACType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | setIsFetchingAC

export const follow = (userId: string): FollowACType => ({type: USERS_ACTION_TYPE.FOLLOW, userId})
export const unfollow = (userId: string): UnfollowACType => ({type: USERS_ACTION_TYPE.UNFOLLOW, userId})
export const setUsers = (users: string) => ({type: USERS_ACTION_TYPE.SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: USERS_ACTION_TYPE.SET_CURRENT_PAGE, currentPage})
//export const setTotalUsersCount = (totalUsersCount: number) => ({type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;