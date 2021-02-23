import React from 'react'
import pIt from './MyPost.module.css'

const MyPost = (props) => {
    return (
        <div className={pIt.postItem}>
            <p>{props.text}</p>
        </div>
    )
}

export default MyPost