import { authAPI } from '../api/api'

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        default: 
            return state
    }
}


export const setAuthData = (id, email, login) => {
    return {
        type: SET_AUTH_DATA,
        data: {id, email, login},
        isAuth: true,
    }
}

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthData(id, email, login))
                }
            })
    }
}

