// import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){
    const navigate = useNavigate()
    const [username,setUsername] = useState('Amil')
    const [password,setPassword] = useState('amil2003')
    const [showSuccessMessage,setshowSuccessMessage] = useState(false)
    const [showErrorMessage,setshowErrorMessage] = useState(false)
    const authContext = useAuth()



    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    async function handleSubmit(event){
        // if(username === 'Amil' && password==='amil2003'){
        if(await authContext.login(username,password)){
            // authContext.setAuthenticated(true)
            // setshowSuccessMessage(true)
            // setshowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else{
            // authContext.setAuthenticated(false)
            // setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }
    function MessageSuccess(){
        if (showSuccessMessage===true) {
            return(
                <div className='successMessage'>
                     Authenticated Succesfully
                </div>
            )
        }
    }
    function MessageError(){
        if (showErrorMessage===true) {
            return(
                 <div className='errorMessage'>
                    Authenticated failed
                 </div>
            )
        }
    }

    return(
        <div className="LoginComponent">
            <div className="LoginForm">
                {/* <MessageSuccess></MessageSuccess>
                <MessageError></MessageError> */}
                {/* {showSuccessMessage &&  <div className='successMessage'> Authenticated Succesfully</div> } */}
                {showErrorMessage &&  <div className='errorMessage'> Authenticated Failed</div> }

               
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="submit" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
       </div>
    )
}
