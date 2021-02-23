import {profileReducer} from './profilePage-reducer'
import {dialogReducer} from './dialogs-reducer'

let store = {

    _state: {

        users: [
            {
                id: 1, 
                name: 'Bill Gates',
                ava: '../img',
                status: 'dont touch wolfs', 
            },   
        ],

        dialogPage: {
            dialogs: [
                { id: 1, name: 'Bill Gates' },
                { id: 2, name: 'Mark Cukerberg' },
                { id: 3, name: 'Pavel Durov' },
                { id: 4, name: 'Dmitry Kaspersky' },
                { id: 5, name: 'Vladimir Putin' },
            ],
            messages: [
                { id: 1, mes: "hihi :)", from: 1},
                { id: 2, mes: "how are you?", from: 1},
                { id: 3, mes: "heeey", from: 1},
                { id: 4, mes: "don't ignore me!", from: 1},
                { id: 5, mes: "you fucking piece of shit!!!", from: 1},
                { id: 6, mes: "sorry", from: 0},
            ],
            newMessageText: '',
        },

        profilePage: {
            posts: [
                {id: 1, text: 'hihi, bitches'},
                {id: 2, text: 'do you like me?)'},
            ],
            postText: '',
        },

    },
 
    dispatch(action) {
        // posts
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)

        this.rerenderTree(this._state)
    },

    getState() {
        return this._state
    },
    
    
    // rendering page
    rerenderTree() {

    },
    subscriber (observer) {
        this.rerenderTree = observer
    },
}

export default store
window.store = store