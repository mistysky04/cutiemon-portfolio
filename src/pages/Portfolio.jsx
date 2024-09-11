import React from "react";
import { Navbar } from '../components/portfolio/Navbar.jsx'
import { Characters } from '../components/portfolio/Characters.jsx'
import { HedieIntroText } from "../components/introsequence/Text.jsx";
import About from "../components/portfolio/About.jsx"

export const Portfolio = () => {
   return (
    <>
        <div className = "LandscapeBackground">
            < Navbar/>
            <div className= "CharactersAndText">
                <Characters/>
                <div className= "HedieIntroText">
                    <HedieIntroText/>
                </div>
            </div>
        </div>
        <div className= "About">
            <About/>
        </div>
    </>
   ) 
}