import React from "react";
import { Navbar } from '../components/portfolio/Navbar.jsx'
import Landscape from '../assets/Background.png'
import { Characters } from '../components/portfolio/Characters.jsx'

export const TrainerPage = () => {
   return (
    <>
        <div className = "Intro">
            <Navbar/>
            < Characters/>
            <img className= "Landscape" src= {Landscape}></img>
        </div>
    </>
   ) 
}