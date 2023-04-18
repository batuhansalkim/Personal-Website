import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={"PROJECTS."} text={"Some of my most recetn works"}/>
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
