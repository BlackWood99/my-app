
import ProfilePosts from './ProfilePosts'
import { addNewPostActionCreator, updatePostActionCreator } from "../../../redux/profilePage-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.postText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostActionCreator(text))
        },
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer