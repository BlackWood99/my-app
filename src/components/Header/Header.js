import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.block}>
                    <div className={styles.logoBlock}>
                        <a href="/profile/14946" className={styles.logo}>LOGO</a>
                    </div>

                    <div className={styles.authBlock}>
                        {props.isAuth ? <a href='/profile/14946'>{props.login}</a>
                        : 
                            <NavLink to="/login"/>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header