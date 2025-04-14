import React from 'react'
import "./Countryside.css"

import Card from '../Card/Card' 

import countryside1 from "../../assets/image13.jpg"
import countryside2 from "../../assets/image14.jpg"
import countryside3 from "../../assets/image15.jpg"

import arctic1 from "../../assets/image19.jpg"
import arctic2 from "../../assets/image20.jpg"
import arctic3 from "../../assets/image21.jpg"

import omg1 from "../../assets/image38.jpg"
import omg2 from "../../assets/image29.webp"
import omg3 from "../../assets/image37.jpg"

function Countryside ()  {
  return (
    <div id="countryside">
        <Card image1={countryside1} image2={countryside2} image3={countryside3} title={"Country side"} price={"80,000"}/>
        <Card image1={arctic1} image2={arctic2} image3={arctic3} title={"Arctic"} price={"90,000"}/>
        <Card image1={omg1} image2={omg2} image3={omg3} title={"OMG!"} price={"30,000"}/>
    </div>
  )
}

export default Countryside
