import React from 'react'
import { NavLink } from 'react-router-dom'
import a from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={a.block}>
            <nav className={a.menu}>
                <NavLink className={a.link} to="/profile">Profile</NavLink>
                <NavLink className={a.link} to="/users">Friends</NavLink>
                <NavLink className={a.link} to="/dialogs">Messages</NavLink>
                <a className={a.link} href="#s">News</a>
                <a className={a.link} href="#s">Music</a>

                <a className={a.link} href="#s">Settings</a>
            </nav>
        </aside>
    )
}

export default Aside