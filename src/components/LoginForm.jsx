import React from 'react'
import {useState} from 'react'
import axios from 'axios'


const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
   const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "PROTECTED", 'User-Name':username,'User-Secret':password}

        try {
           axios.get('https://api.chatengine.io/chats', {headers: authObject});
           localStorage.setItem('username',username)
           localStorage.setItem('password',password)

           window.location.reload()
        } catch (error) {
            
        }
   }
    return (
    <div className = "wrapper">
        <div className = "form">
            <h1 className = "title"> Hypatia Chat</h1>
            <form onSubmit = {handleSubmit}>
                <input
                type ="text"
                value = {username} 
                onChange = {(e) => setUserName(e.target.value)}
                className = "input"
                placeholder = "Username"
                required
                autoFocus
                />
                <input
                type ="text"
                value = {password} 
                onChange = {(e) => setPassword(e.target.value)}
                className = "input"
                placeholder = "Password"
                required
                autoFocus
                />
                <div align="center">
                    <button type="submit" className = "button">
                        <span>Start Chatting</span>
                    </button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default LoginForm