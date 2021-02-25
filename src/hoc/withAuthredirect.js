import React from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isResponseCompleted) {
                if (!this.props.isAuth) return <Redirect to="/login" />
            }

            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
            isResponseCompleted: state.auth.isResponseCompleted,
        }
    }

    const ConnectedAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirect
}

export default withAuthRedirect

