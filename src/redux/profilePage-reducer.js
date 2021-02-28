import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, text: 'hihi, my followers'},
        {id: 2, text: 'do you like music?)'},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1, 
                text: action.postText
            }
            
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case SET_PROFILE_USER:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default: 
            return state
    }
}

export let addNewPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    }
}

const setProfileUser = (profile) => {
    return {
        type: SET_PROFILE_USER,
        profile
    }
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateProfileStatus = (status) => {
    debugger
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export const getProfileUser = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfileUser(response.data))
            })
    }
}
