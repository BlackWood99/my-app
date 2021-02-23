import { usersAPI } from '../api/api'

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 8,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [],
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users }
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFetchingProgress
                    ? [state.isFollowingProgress, action.userId]
                    : [state.isFollowingProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export let toggleFollow = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export let toggleFollowingProgress = (isFetchingProgress, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetchingProgress,
        userId
    }
}

export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export let setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export let setCurrPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(50))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}