import React from 'react'
import Users from "./Users"
import Preloader from '../common/Preloader/Preloader'
import { connect } from "react-redux";
import { setCurrPage, getUsers, follow, unfollow } from "../../redux/usersPage-reducer";
import withAuthRedirect from '../../hoc/withAuthredirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangedCurrPage = (page) => {
        this.props.setCurrPage(page)
        this.props.getUsers(page, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
    }
}

let mapDispatchToProps = {
    setCurrPage,
    getUsers,
    follow,
    unfollow
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer)


