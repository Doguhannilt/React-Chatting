import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'; 
import './styles/App.css'

import React from 'react'
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>


  return (
    <ChatEngine 
        height="100vh"
        projectID = "PROTECTED"
        userName = "PROTECTED"
        userSecret = "PROTECTED" //Password
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  )
}

export default App