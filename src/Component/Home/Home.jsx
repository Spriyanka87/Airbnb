import React from 'react'
import"./Home.css"
import Card from '../Card/Card' 
import house1 from "../../assets/image1.jpg"
import house2 from "../../assets/image2.jpg"
import house3 from "../../assets/image3.jpg"
import farms1 from "../../assets/image4.jpg"
import farms2 from "../../assets/image5.jpg"
import farms3 from "../../assets/image6.jpg"
import icon1 from "../../assets/image7.jpeg"
import icon2 from "../../assets/image8.jpg"
import icon3 from "../../assets/image9.webp"
import pool1 from "../../assets/image10.jpg"
import pool2 from "../../assets/image11.jpg"
import pool3 from "../../assets/image12.jpg"
import countryside1 from "../../assets/image13.jpg"
import countryside2 from "../../assets/image14.jpg"
import countryside3 from "../../assets/image15.jpg"
import surfing1 from "../../assets/image16.jpg"
import surfing2 from "../../assets/image17.jpg"
import surfing3 from "../../assets/image18.jpg"
import arctic1 from "../../assets/image19.jpg"
import arctic2 from "../../assets/image20.jpg"
import arctic3 from "../../assets/image21.jpg"
import views1 from "../../assets/image22.jpg"
import views2 from "../../assets/image23.webp"
import views3 from "../../assets/image24.jpg"
import trending1 from "../../assets/image25.jpg"
import trending2 from "../../assets/image26.jpg"
import trending3 from "../../assets/image27.jpg"
import omg1 from "../../assets/image38.jpg"
import omg2 from "../../assets/image29.webp"
import omg3 from "../../assets/image37.jpg"
import lakeside1 from "../../assets/image39.jpg"
import lakeside2 from "../../assets/image40.webp"
import lakeside3 from "../../assets/image41.jpg"
import luxuryhouse1 from "../../assets/image34.jpg"
import luxuryhouse2 from "../../assets/image35.jpg"
import luxuryhouse3 from "../../assets/image36.jpg"
import { dataContext } from '../../Context/Usercontext'
import { useContext } from 'react'



function Home () {
  let {
      title,
      setTitle,
      addListing,
      setaddListing,
      addImage1,
      setaddImage1,
      addImage2,
      setaddImage2,
      addImage3,
      setaddImage3,
      price,
      setprice
      }=useContext(dataContext)
  return (
    <div id="home">
      <Card image1={house1} image2={house2} image3={house3} title={"Rooms,Bujra,India"} price={"40,000"}/>
      <Card image1={farms1} image2={farms2} image3={farms3} title={"Farms,Behren,Germany"} price={"60,000"}/>
      <Card image1={icon1} image2={icon2} image3={icon3} title={"Icon,Playdate at Polly Pocket's Compact,Australia"} price={"80,000"}/>
      <Card image1={pool1} image2={pool2} image3={pool3} title={"Amazing pools,Paris,France"} price={"60,000"}/>
      <Card image1={countryside1} image2={countryside2} image3={countryside3} title={"Country side,Dubai,UAE"} price={"80,000"}/>
      <Card image1={surfing1} image2={surfing2} image3={surfing3} title={"Surfing,Sri Lanka"} price={"99,999"}/>
      <Card image1={arctic1} image2={arctic2} image3={arctic3} title={"Arctic"} price={"90,000"}/>
      <Card image1={views1} image2={views2} image3={views3} title={"Amazing views,Canada"} price={"60,000"}/>
      <Card image1={trending1} image2={trending2} image3={trending3} title={"Trending,Dubai,UAE"} price={"70,000"}/>
      <Card image1={omg1} image2={omg2} image3={omg3} title={"OMG!,Italy"} price={"30,000"}/>
      <Card image1={lakeside1} image2={lakeside2} image3={lakeside3} title={"Lake side,India"} price={"50,000"}/>
      <Card image1={luxuryhouse1} image2={luxuryhouse2} image3={luxuryhouse3} title={"Luxury house,Germany"} price={"25,000"}/>
      {addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} 
      image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}
      
      
    </div>
  )
}

export default Home
