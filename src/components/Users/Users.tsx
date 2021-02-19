import React from "react";
import {UsersStateType} from "../../redux/users-reducer";
import styles from './Users.module.css';
import axios from "axios";
import photoForUsers from "./../../assets/img/photoForUsers.jpg"

type UsersPropsType = {
    users: Array<UsersStateType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: string) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChange = (pageNumber: number) => {
         this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
}

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                     onClick={() => {this.onPageChange(p)}}>{p}</span>
                    })}
                        </div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                        <span>
                        <div>
                        <img src={u.photos.small !== null ? u.photos.small : photoForUsers} className={styles.userPhoto}/>
                        </div>
                        <div>
                    {u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
                    }
                        </div>
                        </span>
                        <span>
                        <span>
                        <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                        </span>
                        <br/>
                        </span>
                        </div>)
                    }
                        </div>
                        )
                    }
                    }

