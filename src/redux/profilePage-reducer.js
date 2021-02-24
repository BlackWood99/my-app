import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_TEXTPOST = 'UPDATE_TEXTPOST'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

let initialState = {
    posts: [
        {id: 1, text: 'hihi, my followers'},
        {id: 2, text: 'do you like music?)'},
    ],
    postText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.postText === '') return state

            let newPost = {
                id: state.posts.length + 1, 
                text: state.postText
            }
            
            return {
                ...state,
                posts: [newPost, ...state.posts],
                postText: ''
            }
        case UPDATE_TEXTPOST:
            return {
                ...state,
                postText: action.newText
            }
        case SET_PROFILE_USER:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_STATUS:
            return {...state, status: action.status}
        default: 
            return state
    }
}

export let addNewPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export let updatePostActionCreator = (txt) => {
    return {
        type: UPDATE_TEXTPOST, 
        newText: txt,
    }
}

const setProfileUser = (profile) => {
    return {
        type: SET_PROFILE_USER,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
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
