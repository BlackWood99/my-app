import React from 'react'
import MyPost from './MyPost'
import styles from './ProfilePosts.module.css'
import { Field, Form } from 'react-final-form'


const ProfilePosts = (props) => {

    let posts = props.posts.map(p => {
        return <MyPost key={p.id} id={p.id} text={p.text}/>
    })

    let onAddNewPost = (postText) => {
        props.addNewPost(postText)
    }

    return (
        <div className="profileBlock_posts">

            <Form
                onSubmit={values => onAddNewPost(values.postText)}
                validate={values => {
                    const errors = {}
                    if (!values.postText) {
                        errors.postText = 'Required'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.createPost}>
                            <img className={styles.createPostImg} 
                                src="http://cdn.onlinewebfonts.com/svg/img_227996.png" alt="avatar" 
                            />

                            <Field name="postText">
                                {({ input, meta }) => (
                                    <input {...input} type="textarea" placeholder="Have you some news?" className={styles.textArea} />
                                )}
                            </Field>
                            
                            <button type="submit" disabled={submitting} className={styles.submit}> 
                                Publish
                            </button>
                        </div>
                    </form>
                )}
            />
    
            {posts}

        </div>
    )
}

export default ProfilePosts