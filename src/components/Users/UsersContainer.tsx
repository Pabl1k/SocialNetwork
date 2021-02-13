import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";


let MapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: string) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Users) //as any