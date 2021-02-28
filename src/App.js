import './App.css'
import React from 'react'

import HeaderContainer from './components/Header/HeaderContainer'
import Aside from './components/Aside/Aside.js'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ChatContainer from './components/Chat/ChatContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileBlockContainer from './components/Profile/ProfileBlockContainer'
import Login from './components/Login/Login'

import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { initializingApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import { connect } from 'react-redux'


class App extends React.Component {

  componentDidMount() {
    this.props.initializingApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">

          <HeaderContainer />
          
          <main>
            <div className="container">
              <div className="mainBlock">

                <Aside />
                
                <div className="contentBlock">

                  <Route path='/profile/:userId?' render={() => <ProfileBlockContainer  />} />
                  <Route path='/dialogs' render={() => <DialogsContainer  />} />
                  <Route path='/chat' render={() => <ChatContainer />} />
                  <Route path='/users' render={() => <UsersContainer />} />
                  <Route path='/login' render={() => <Login />} />

                </div>
                
              </div>
            </div>
          </main>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializingApp})
)(App)

