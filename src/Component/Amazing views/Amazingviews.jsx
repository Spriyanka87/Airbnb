import React from 'react'
import "./Amazingviews.css"

import Card from '../Card/Card' 

import views1 from "../../assets/image22.jpg"
import views2 from "../../assets/image23.webp"
import views3 from "../../assets/image24.jpg"
import trending1 from "../../assets/image25.jpg"
import trending2 from "../../assets/image26.jpg"
import trending3 from "../../assets/image27.jpg"

import luxuryhouse1 from "../../assets/image34.jpg"
import luxuryhouse2 from "../../assets/image35.jpg"
import luxuryhouse3 from "../../assets/image36.jpg"


function Amazingviews  ()  {
  return (
    <div id ="amazingviews">
        <Card image1={views1} image2={views2} image3={views3} title={"Amazing views"} price={"60,000"}/>
        <Card image1={trending1} image2={trending2} image3={trending3} title={"Trending"} price={"70,000"}/>
        <Card image1={luxuryhouse1} image2={luxuryhouse2} image3={luxuryhouse3} title={"Luxury house"} price={"25,000"}/>
      
    </div>
  )
}

export default Amazingviews
