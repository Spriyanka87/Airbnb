import React from 'react'
import "./Login.css"
import { RiLoginCircleFill } from "react-icons/ri";

function Login () {
  return (
    <div id ='login' onSubmit={(e)=>{
        alert("Login Successfully....👍🏻")
         }}>
         <form action=''>
            <span id='logintitle'> Login Page</span>
        
            <div className="list">
            <label htmlFor="email">Email</label>
            <input type="text"  id='email' required/>
            </div>
            <div className="list">
            <label htmlFor="pass">Password</label>
            <input type="password"  id ="pass" required />
            </div>
            <button id ='loginbtn'>Login<RiLoginCircleFill /></button>
        </form>
    </div>
  )
}

export default Login
