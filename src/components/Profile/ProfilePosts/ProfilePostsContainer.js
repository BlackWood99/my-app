import ProfilePosts from './ProfilePosts'
import { addNewPostActionCreator } from "../../../redux/profilePage-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (postText) => {
            dispatch(addNewPostActionCreator(postText))
        },
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer