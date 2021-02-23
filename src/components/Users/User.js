import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'

const User = (props) => {

    return (
        <div className={styles.block_item} >
            <div className={styles.avatar}>
                <NavLink to={'/profile/' + props.userId}>
                    <img
                        src={props.photoUrl.small || props.photoUrl.large || 'http://cdn.onlinewebfonts.com/svg/img_227996.png'}
                        alt="avatar"
                    />
                </NavLink>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.descriptionBlock}>
                    <div className={styles.fullName}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={styles.status}>
                        <span>{props.status}</span>
                    </div>
                    <div className={styles.city}>
                        <span>Bikini Bottom</span>
                    </div>
                </div>

                <div className={styles.buttonsBlock}>
                    {
                        props.followed ? <button disabled={props.isFollowingProgress.some(id => id === props.userId)} 
                            onClick={() => props.unfollow(props.userId)} className={styles.btnUnfollow}>Unfollow</button> 
                        : <button disabled={props.isFollowingProgress.some(id => id === props.userId)} 
                            onClick={() => props.follow(props.userId)} className={styles.btnFollow}>Follow</button>
                    }
                    <button className={styles.btnSendMsg}>Send message</button>
                </div>
            </div>
        </div>
    )

}

export default User