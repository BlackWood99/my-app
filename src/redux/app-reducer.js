import { authMe } from "./auth-reducer"

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: 
            return state
    }
}

const initialize = () => {
    return {
        type: INITIALIZE_SUCCESS,
    }
}

export const initializingApp = () => (dispatch) => {
    let promise = dispatch(authMe())

    Promise.all([promise])
        .then(() => dispatch(initialize()))
}

