import './App.css'

import HeaderContainer from './components/Header/HeaderContainer'
import Aside from './components/Aside/Aside.js'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ChatContainer from './components/Chat/ChatContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileBlockContainer from './components/Profile/ProfileBlockContainer'
import Login from './components/Login/Login'

import { BrowserRouter, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      
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

    </BrowserRouter>
  )
}

export default App;
