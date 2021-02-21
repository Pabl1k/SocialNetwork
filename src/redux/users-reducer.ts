export enum USERS_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
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
}

let initialState: UsersReducerType = {
    users: [],
    pageSize: 20,
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
export const setUsers = (users: string): any => ({type: USERS_ACTION_TYPE.SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({type: USERS_ACTION_TYPE.SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingAC => ({type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;

/* totalUsersCount group
// SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
/!*case USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
          return {
              ...state, totalUsersCount: action.count
          }*!/
/!*
type SetTotalUserCountACType = {
    type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT
    count: number
}*!/
//export const setTotalUsersCount = (totalUsersCount: number) => ({type: USERS_ACTION_TYPE.SET_TOTAL_USERS_COUNT, count: totalUsersCount})*/
