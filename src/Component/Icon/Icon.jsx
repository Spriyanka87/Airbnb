import React from 'react'
import "./Icon.css"
import Card from '../Card/Card' 
import icon1 from "../../assets/image7.jpeg"
import icon2 from "../../assets/image8.jpg"
import icon3 from "../../assets/image9.webp"



import trending1 from "../../assets/image25.jpg"
import trending2 from "../../assets/image26.jpg"
import trending3 from "../../assets/image27.jpg"

import luxuryhouse1 from "../../assets/image34.jpg"
import luxuryhouse2 from "../../assets/image35.jpg"
import luxuryhouse3 from "../../assets/image36.jpg"


function Icon  () {
  return (
    <div id="icon">
        <Card image1={icon1} image2={icon2} image3={icon3} title={"Icon"} price={"80,000"}/>
        <Card image1={trending1} image2={trending2} image3={trending3} title={"Trending"} price={"70,000"}/>
        <Card image1={luxuryhouse1} image2={luxuryhouse2} image3={luxuryhouse3} title={"Luxury house"} price={"25,000"}/>
      
      
    </div>
  )
}

export default Icon
