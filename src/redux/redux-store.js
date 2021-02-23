import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {profileReducer} from './profilePage-reducer'
import {dialogReducer} from './dialogs-reducer'
import {usersReducer} from './usersPage-reducer'
import { authReducer } from "./auth-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store