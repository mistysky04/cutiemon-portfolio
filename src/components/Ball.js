import React from "react";
import BallClose from '../assets/ball/ball_closed.png'

const Ball = () => {
    return (
        <div className= "Ball">
            <img src={BallClose} width={200} height={200} alt="Closed cutieball, light pink with green leaves in center"></img>
        </div>
    )
}

export default Ball