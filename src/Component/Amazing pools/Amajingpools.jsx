import React from 'react'
import "./Amazingpools.css"


import Card from '../Card/Card' 
import house from "../../assets/image1.jpg"
import house1 from "../../assets/image2.jpg"
import house2 from "../../assets/image3.jpg"
import farms1 from "../../assets/image4.jpg"
import farms2 from "../../assets/image5.jpg"
import farms3 from "../../assets/image6.jpg"

import pool1 from "../../assets/image10.jpg"
import pool2 from "../../assets/image11.jpg"
import pool3 from "../../assets/image12.jpg"





function Amajingpools  () {
  return (
    <div id="amazingpools">
        <Card image1={pool1} image2={pool2} image3={pool3} title={"Amazing pools"} price={"60,000"}/>
        <Card image1={farms1} image2={farms2} image3={farms3} title={"Farms"} price={"60,000"}/>
        <Card image1={house} image2={house1} image3={house2} title={"Rooms"} price={"40,000"}/>

      
    </div>
  )
}

export default Amajingpools
