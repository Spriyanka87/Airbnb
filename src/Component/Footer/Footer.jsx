import React from 'react'
import"./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div id ='footer'>
        <div className="footertop">
        <div className="box">
          <span id='contact1'>Contact Us</span>
          <span>+910000000000</span>
          <span>abc1234@gmail.com</span>
          <span>Adress,City/India</span>
            
        </div>
        <div className="box">
          <span id='services'>Our services</span>
          <span>Home</span>
          <span>Add Listing</span>
          <span>Rent</span>
        </div>
        <div className="box">
          <span id='Quick'> Quick Link</span>
          <span>Knowledge Base</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="box">
          <span id ='logo'>airbnb</span>
          <Link to={"/Contact"}><button>Contact Us</button></Link>
        </div>
        </div>
        <div className="footerbuttom">
        <span>Privacy Policy | |</span>
        <span>Use of terms</span>
        </div>
      
    </div>
  )
}

export default Footer
