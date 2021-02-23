import React from 'react'
import User from './User'
import styles from './Users.module.css'


let Users = (props) => {

    let usersList = props.users.map(u => {
        return <User userId={u.id} photoUrl={u.photos} name={u.name}
            status={u.status} followed={u.followed}
            isFollowingProgress={props.isFollowingProgress} 
            follow={props.follow} unfollow={props.unfollow}/>
    })

    let pagesCount = Math.ceil( props.totalCount / props.pageSize )
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.block} >
            <div className={styles.paginator} >
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? styles.selectedPage : 'page'} onClick={() => props.onChangedCurrPage(p)}>
                            {p}
                        </span>
                    })
                }
            </div>
            {usersList}
        </div>
    )
}
    
export default Users