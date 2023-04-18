import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={"ABOUT."} text={"I'm a friendly  Front-End - Mobile Developer and I am student"}/>
      <Footer/>
    </div>
  )
}

export default About
