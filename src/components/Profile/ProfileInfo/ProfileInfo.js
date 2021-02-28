import React from 'react'
import ProfilePerson from './ProfilePerson.js'
import ProfilePicture from './ProfilePicture.js'
import styles from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    return (
        <div className={styles.info}>
            <ProfilePicture profile={props.profile}/>
            <ProfilePerson profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
    
}

export default ProfileInfo