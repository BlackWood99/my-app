import React from 'react'
import m from './Message.module.css'

const Message = (props) => {

    return (

            <div className={m.item}>

                <div className={m.avatar}>
                    <img src="https://fb.ru/misc/i/gallery/38782/1639192.jpg" alt="ava" />
                </div>
                <div className={m.messBlock }>
                    <h4>Bill Gates</h4>
                    <p>{props.mess}</p>
                </div>

            </div>

    )
}

export default Message