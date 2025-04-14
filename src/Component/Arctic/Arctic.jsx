import React from 'react'
import "./Arctic.css"

import Card from '../Card/Card' 

import pool1 from "../../assets/image10.jpg"
import pool2 from "../../assets/image11.jpg"
import pool3 from "../../assets/image12.jpg"

import arctic1 from "../../assets/image19.jpg"
import arctic2 from "../../assets/image20.jpg"
import arctic3 from "../../assets/image21.jpg"

import luxuryhouse1 from "../../assets/image34.jpg"
import luxuryhouse2 from "../../assets/image35.jpg"
import luxuryhouse3 from "../../assets/image36.jpg"

function Arctic () {
  return (
    <div id ="arctic">
        <Card image1={arctic1} image2={arctic2} image3={arctic3} title={"Arctic"} price={"90,000"}/>
        <Card image1={pool1} image2={pool2} image3={pool3} title={"Amazing pools"} price={"60,000"}/>
        <Card image1={luxuryhouse1} image2={luxuryhouse2} image3={luxuryhouse3} title={"Luxury house"} price={"25,000"}/>
      
      
      
    </div>
  )
}

export default Arctic
