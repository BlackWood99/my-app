import Chat from './Chat';
import { addNewMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (mess) => {
            dispatch(addNewMessageActionCreator(mess) )
        },
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer