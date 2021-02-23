
import Chat from './Chat';
import { addNewMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            dispatch(addNewMessageActionCreator() )
        },
        updateTextBody: (text) => {
            dispatch(updateMessageActionCreator(text))
        },
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer