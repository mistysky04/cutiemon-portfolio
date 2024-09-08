import React from "react";
import Kirbymon from '../../assets/characters/kirbymon.png'
import Hedie from '../../assets/characters/Pokemon_Hedie.png'

export const Characters = () => {
    return (
        <div className = "Characters">
            <div className= "Hedie">
                <img src= { Hedie } width= '750px'></img>
            </div>
            <div className= "Kirbymon">
                <img src= { Kirbymon } width= '400px'></img>
            </div>
        </div>
    )
}