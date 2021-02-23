import React from 'react'
import MyPost from './MyPost'
import crP from './ProfilePosts.module.css'



const ProfilePosts = (props) => {

    let posts = props.posts.map(p => {

        return <MyPost key={p.id} id={p.id} text={p.text}/>
 
    })

    let refTextarea = React.createRef()

    let onChangeText = () => {
        let text = refTextarea.current.value
        props.updatePostText(text)
    }

    let onAddNewPost = () => {
        props.addNewPost()
    }

    return (
        <div className="profileBlock_posts">

            <div className={crP.createPost}>
                <img className={crP.createPostImg} 
                    src="https://avante.biz/wp-content/uploads/Cute-Pictures-Of-Puppies-Wallpapers/Cute-Pictures-Of-Puppies-Wallpapers-012.jpg" alt="avatar" 
                />
                
                <input ref={refTextarea} type="textarea" placeholder="Have you some news?" 
                    className={crP.textArea} onChange={onChangeText} value={props.newPostText}/>
                
                <input type="submit" value="Publish" className={crP.submit} onClick={ onAddNewPost }/>
            </div>
    
            {posts}

        </div>
    )
}

export default ProfilePosts