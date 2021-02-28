import React from 'react'
import { connect } from 'react-redux'
import ProfileBlock from './ProfileBlock.js'
import { getProfileUser, getProfileStatus, updateProfileStatus } from '../../redux/profilePage-reducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthredirect.js'
import { compose } from 'redux'

class ProfileBlockContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userId
        if (!id) id = 14946
        
        this.props.getProfileUser(id)
        this.props.getProfileStatus(id)
    }

    render() {
        return (
            <div className="profileBlock">
                <ProfileBlock {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        status: state.profilePage.status,
    }
}

const mapDispatchToProps = {getProfileUser, getProfileStatus, updateProfileStatus}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileBlockContainer)
