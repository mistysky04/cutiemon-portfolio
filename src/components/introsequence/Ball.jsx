import React, { useState } from "react";
import { IntroText } from './Text.jsx'
import Spline from '@splinetool/react-spline';

const Ball = () => {
    //Clicked hook
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return ( 
        <>   
            <div className= "BallAnimation">
                <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" onClick = {handleClick} />
            </div>
            <IntroText isBallClicked={clicked}></IntroText>
        </>
    )


  
}

export default Ball