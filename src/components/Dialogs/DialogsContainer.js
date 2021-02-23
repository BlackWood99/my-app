
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthredirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    
    return {
        dialPage: state.dialogPage
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps)
)(Dialogs)