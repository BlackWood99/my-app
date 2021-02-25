const ADD_MESSAGE = 'ADD_MESSAGE'

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
}

export const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let id = state.messages.length + 1
            return {
                ...state,
                messages: [...state.messages, {id, mes: action.message}],
            }
        default:
            return state
    }
}

export let addNewMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}
