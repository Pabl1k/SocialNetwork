export enum USERS_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS'
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
}

let initialState: UsersReducerType = {
    users: []
}

/*{
    users: [{
        id: v1(),
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU',
        followed: false,
        fullName: 'Dmitriy',
        status: "I'm a boss",
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: v1(),
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU',
            followed: true,
            fullName: 'Sasha',
            status: "I'm a boss too",
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU',
            followed: false,
            fullName: 'Andrey',
            status: "I'm a boss too",
            location: {city: 'Kiev', country: 'Ukraine'}
        }]
};*/

const usersReducer = (state: UsersReducerType  = initialState, action: UsersACType) => {
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
        case USERS_ACTION_TYPE.SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
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
export type UsersACType = FollowACType | UnfollowACType | SetUsersACType

export const followAC = (userId: string): FollowACType => ({type: USERS_ACTION_TYPE.FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowACType => ({type: USERS_ACTION_TYPE.UNFOLLOW, userId})
export const setUsersAC = (users: string) => ({type: USERS_ACTION_TYPE.SET_USERS, users})

export default usersReducer;