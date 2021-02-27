import React, {useEffect} from "react";
import styles from "./Users.module.css";
import photoForUsers from "../../assets/img/photoForUsers.jpg";
import {UsersStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";

type UsersPropsType = {
    users: Array<UsersStateType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    onPageChange: (pageNumber: number) => void
    toggleFollowPending: (followPending: boolean, userId: number) => void
}

export const Users = (props: UsersPropsType) => {
    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    useEffect(() => {document.title = 'Users'}, [])

    let pages = [];
    for (let i = 1; i <= 20; i++) { // pagesCount contains 2018 pages with 5 users each, I've left just 20 pages
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.unselectedPage}
                                 onClick={() => {
                                     props.onPageChange(p)
                                 }}>{p + ' '}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : photoForUsers}
                             className={styles.userPhoto}/>
                             </NavLink>
                        </div>
                        <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.toggleFollowPending(true, +(u.id))
                            usersAPI.unfollowUser(+(u.id))
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowPending(false, +(u.id))
                                });

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.toggleFollowPending(true, +(u.id))
                            usersAPI.followUser(+(u.id))
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowPending(false, +(u.id))
                                });
                        }}>Follow</button>
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
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.unselectedPage}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}>{p + ' '}</span>
            })}
        </div>
    )
}