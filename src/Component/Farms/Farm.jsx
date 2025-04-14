import React from 'react'
import "./Farm.css"

import Card from '../Card/Card' 

import farms1 from "../../assets/image4.jpg"
import farms2 from "../../assets/image5.jpg"
import farms3 from "../../assets/image6.jpg"


import surfing1 from "../../assets/image16.jpg"
import surfing2 from "../../assets/image17.jpg"
import surfing3 from "../../assets/image18.jpg"

import lakeside1 from "../../assets/image39.jpg"
import lakeside2 from "../../assets/image40.webp"
import lakeside3 from "../../assets/image41.jpg"


function Farm  () {
  return (
    <div id ="farm">
         <Card image1={farms1} image2={farms2} image3={farms3} title={"Farms"} price={"60,000"}/>
         <Card image1={surfing1} image2={surfing2} image3={surfing3} title={"Surfing"} price={"99,999"}/>
         <Card image1={lakeside1} image2={lakeside2} image3={lakeside3} title={"Lake side"} price={"50,000"}/>
      
    </div>
  )
}

export default Farm
