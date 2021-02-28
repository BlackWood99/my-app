import { authAPI } from '../api/api'

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authError: "",
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isResponseCompleted: true,
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError
            }
        default: 
            return state
    }
}

export const setAuthData = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_DATA,
        data: {id, email, login, isAuth},
        
    }
}

export const authMe = () => {
    return (dispatch) => {
        return authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthData(id, email, login, true))
                }
            })
    }
}

export const authLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMe())
                } 

                dispatch(setAuthError(response.data.messages[0]))                
            })
    }
}

export const authLogout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData(null, null, null, false))
                }
            })
    }
}

const setAuthError = (authError) => {
    debugger
    return {
        type: SET_AUTH_ERROR,
        authError
    }
}

