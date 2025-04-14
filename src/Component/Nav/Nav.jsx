import React,{useState} from 'react'
import'./Nav.css'
import logo from "../../assets/images.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RiChatSearchFill } from "react-icons/ri";
import { MdOutlineKingBed } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";
import { TbWorldStar } from "react-icons/tb";
import { GrSwim } from "react-icons/gr";
import { FaTreeCity } from "react-icons/fa6";
import { GiWaveSurfer } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";
import { FaMountainCity } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';



function Nav () {
  let[visible,setVisible] = useState(false)
  return (
    <div id = 'Nav'>
      {visible?<div className="hamburger">
          <Link to ={"/Login"}><div className="ham1">Login</div></Link>
          <Link to ={"/Signup"}><div className="ham1">Sign Up</div></Link>
          <Link to={"/Listing"}><div className="ham1">List Your Home</div></Link>
          <Link to={"/Contact"}><div className="ham1">Help Center</div></Link>

      </div>:<div></div>}
        <div className="nav1">
          <Link to ={""}><div className="logo">
             <img src={logo} alt="" width="40px" />
               <h2><span>airbnb</span></h2>
              </div></Link>
        <div className="search">
        <input type="text" placeholder='Search Destination '/>
        <button><span>Search</span><RiChatSearchFill />
        </button>
        </div>
        <div className="ham">
          <Link to={"/Listing"}><button id='btn1'>List Your Home</button></Link>
          <button id ='btn2' onClick={()=>{
            setVisible(prev=>!prev)
          }}>
            <GiHamburgerMenu id="svg1" />
            <CgProfile  id='svg2'/>
          </button>

        </div>
        </div>
        <div className="nav2">
      
          <NavLink to={""}><div className="svg11"><MdOutlineKingBed /><h3>Rooms</h3></div></NavLink>
          <NavLink to={"/Farm"}><div className="svg11"><GiTreehouse /><h3>Farms</h3></div></NavLink>
          <NavLink to={"/Icon"}><div className="svg11"><TbWorldStar /><h3>Icons</h3></div></NavLink>
          <NavLink to={"/Amazingpools"}><div className="svg11"><GrSwim /><h3>Amazing pools</h3></div></NavLink>
          <NavLink to={"/Countryside"}><div className="svg11"><FaTreeCity /><h3>Countryside</h3></div></NavLink>
          <NavLink to={"/Surfing"}><div className="svg11"><GiWaveSurfer /><h3>Surfing</h3></div></NavLink>
          <NavLink to={"/Arctic"}><div className="svg11"><GiJusticeStar /><h3>Arctic</h3></div></NavLink>
          <NavLink to={"/Amazingviews"}><div className="svg11"><FaMountainCity /><h3>Amazing views</h3></div></NavLink>
          
        </div>
    </div>
  )
}

export default Nav
