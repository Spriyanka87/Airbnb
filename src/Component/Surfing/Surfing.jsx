import React from 'react'
import "./Surfing.css"

import Card from '../Card/Card' 

import surfing1 from "../../assets/image16.jpg"
import surfing2 from "../../assets/image17.jpg"
import surfing3 from "../../assets/image18.jpg"

import trending1 from "../../assets/image25.jpg"
import trending2 from "../../assets/image26.jpg"
import trending3 from "../../assets/image27.jpg"
import omg1 from "../../assets/image38.jpg"
import omg2 from "../../assets/image29.webp"
import omg3 from "../../assets/image37.jpg"



function Surfing ()  {
  return (
    <div id = "surfing">
         <Card image1={surfing1} image2={surfing2} image3={surfing3} title={"Surfing"} price={"99,999"}/>
         <Card image1={trending1} image2={trending2} image3={trending3} title={"Trending"} price={"70,000"}/>
         <Card image1={omg1} image2={omg2} image3={omg3} title={"OMG!"} price={"30,000"}/>
      
    </div>
  )
}

export default Surfing
