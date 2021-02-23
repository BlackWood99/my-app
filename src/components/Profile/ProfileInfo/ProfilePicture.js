import React from 'react'
import styles from './ProfilePicture.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfilePicture = (props) => {
    
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={styles.block}>
                <div className={styles.picBlock}>
                    <img className={styles.pic} 
                        src={props.profile.photos.small || props.profile.photos.large || 'http://cdn.onlinewebfonts.com/svg/img_227996.png'} 
                        alt="avatar" />
                </div>
            </div>
        )
    }
}

export default ProfilePicture