const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_TEXTMESSAGE = 'UPDATE_TEXTMESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Bill Gates' },
        { id: 2, name: 'Mark Cukerberg' },
        { id: 3, name: 'Pavel Durov' },
        { id: 4, name: 'Dmitry Kaspersky' },
        { id: 5, name: 'Alex Budkov' },
    ],
    messages: [
        { id: 1, mes: "hihi :)", from: 1 },
        { id: 2, mes: "how are you?", from: 1 },
        { id: 3, mes: "heeey", from: 1 },
        { id: 4, mes: "don't ignore me!", from: 1 },
        { id: 5, mes: "ok, i will not talking with you anymore", from: 1 },
        { id: 6, mes: "sorry, i joked", from: 0 },
    ],
    newMessageText: '',
}

export const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText === '') return state

            let newMessage = {
                id: state.messages.length + 1,
                mes: state.newMessageText
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPDATE_TEXTMESSAGE:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export let addNewMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export let updateMessageActionCreator = (txt) => {
    return {
        type: UPDATE_TEXTMESSAGE,
        newText: txt,
    }
}
