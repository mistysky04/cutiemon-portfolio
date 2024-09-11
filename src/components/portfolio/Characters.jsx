import React from "react";
import Kirbymon from '../../assets/characters/kirbymon.png'
import Hedie from '../../assets/characters/Pokemon_Hedie.png'

export const Characters = () => {
    return (
        <div className = "Characters">
            <div className="Hedie">
                <img alt= "Hedie charicature" src= { Hedie } width={650} ></img>
            </div>
            <div className= "Kirbymon">
                <img alt="Pink guy" src= { Kirbymon } width={300}></img>
            </div>
        </div>
    )
}