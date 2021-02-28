import React from 'react'
import Users from "./Users"
import Preloader from '../common/Preloader/Preloader'
import { connect } from "react-redux";
import { setCurrPage, requestUsers, follow, unfollow } from "../../redux/usersPage-reducer";
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getIsFollowingProgress } from '../../redux/users-selector';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangedCurrPage = (page) => {
        this.props.setCurrPage(page)
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedCurrPage={this.onChangedCurrPage}
                isFollowingProgress={this.props.isFollowingProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />}
        </>
    }
        
}

///

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
    }
}

let mapDispatchToProps = {
    setCurrPage,
    requestUsers,
    follow,
    unfollow
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)


