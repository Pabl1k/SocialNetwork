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
}

export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className={styles.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : photoForUsers} className={styles.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>
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

