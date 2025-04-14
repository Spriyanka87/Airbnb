import React from 'react'
import"./Signup.css"
import { IoPersonAddSharp } from "react-icons/io5";

function Signup () {
  return (
    <div id ='signup'
    onSubmit={(e)=>{
      
      alert("SignUp Successfully....👍🏻")
      }}>
        <form action=''>
            <span id='signuptitle'>Sign up Page</span>
        
            <div className="list">
            <label htmlFor="name">User Name</label>
            <input type="text"  id='name' required/>
            </div>
            <div className="list">
            <label htmlFor="email">Email</label>
            <input type="text"  id ="email" required />
            </div>
            <div className="list">
            <label htmlFor="pass1">Password</label>
            <input type="password"  id ="pass1" required />
            </div>
            <div className="list">
            <label htmlFor="conpass1">Confirm Password</label>
            <input type="password"  id ="conpass1" required />
            </div>
            <button id ='signupbtn'>Signup<IoPersonAddSharp /></button>
        </form>
      
    </div>
  )
}

export default Signup
