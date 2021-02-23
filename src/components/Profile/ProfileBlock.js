import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer.js'
// import styles from './ProfileBlock.module.css'

const ProfileBlock = (props) => {
    
        return (
            <div className="profileBlock">
                
                <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus} />

                <ProfilePostsContainer />
                
            </div>
        )
}

export default ProfileBlock