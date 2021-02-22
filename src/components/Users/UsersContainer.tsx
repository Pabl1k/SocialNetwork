import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    unfollow,
    UsersStateType
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

type UsersPropsType = {
    users: Array<UsersStateType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: string) => void
    setCurrentPage: (pageNumber: number) => void
    pageSize: number
    currentPage: number
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}/>
        </>
    }
}

let MapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(MapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, toggleIsFetching})(UsersContainer)