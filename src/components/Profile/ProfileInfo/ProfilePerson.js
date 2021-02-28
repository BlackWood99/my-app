import React from 'react'
import styles from './ProfilePerson.module.css'
import Preloader from '../../common/Preloader/Preloader'
import Status from './Status'

const ProfilePerson = (props) => {
    
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={styles.block}>
                <div className={styles.person}>

                    <div className={styles.topBlock}>
                        <h4>{props.profile.fullName}</h4>
                        <span>online</span>
                    </div>

                    <Status status={props.status} updateStatus={props.updateStatus}/>

                    <div className={styles.item}>
                        <div className={styles.first}>
                            <span>Date of Birth:</span>
                        </div>
                        <div className={styles.second}>
                            <span>12.06.1999</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.first}>
                            <span>City:</span>
                        </div>
                        <div className={styles.second}>
                            <span>Nab.Chelny</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.first}>
                            <span>Telefon:</span>
                        </div>
                        <div className={styles.second}>
                            <span>89503131608</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.first}>
                            <span>Education:</span>
                        </div>
                        <div className={styles.second}>
                            <span>KGAMT (Programmer)</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.first}>
                            <span>Web-site:</span>
                        </div>
                        <div className={styles.second}>
                            <span>{props.profile.contacts.vk}</span>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default ProfilePerson