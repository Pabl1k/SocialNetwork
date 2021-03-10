import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_item}>
                <NavLink to="/profile" activeClassName={s.nav_item_activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.nav_item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.nav_item_activeLink}>Messages</NavLink>
            </div>
            <div className={s.nav_item}>
                <a>News</a>
            </div>
            <div className={s.nav_item}>
                <a>Music</a>
            </div>
            <div className={s.nav_item}>
                <a>Settings</a>
            </div>
            <br />
            <div className={s.nav_item} >
                <NavLink to={'/users'}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;