import React from 'react'
import { NavLink } from 'react-router-dom'
import dialog from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <NavLink to={"/chat/" + props.id} className={dialog.navLink}>
            <div className={dialog.item} key={props.id}>

                <div className={dialog.avatar}>
                    <img src="https://fb.ru/misc/i/gallery/38782/1639192.jpg" alt="ava" />
                </div>
                <div className={dialog.info}>

                    <div className={dialog.topBlock}>
                        <h4>{props.name}</h4>
                        <span>15:45</span>
                    </div>
                    <p>{props.lastMes}</p>

                </div>

            </div>
        </NavLink>
    )
}

export default DialogItem