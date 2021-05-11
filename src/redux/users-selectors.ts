import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersState = (state: RootStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = (state: RootStateType) => {
    return getUsersState(state).filter(u => true)
}
export const getUsersSuperSelector = createSelector(getUsersState, (users) => {
    return users.filter(u => true)
});
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowPending = (state: RootStateType) => {
    return state.usersPage.followPending
}