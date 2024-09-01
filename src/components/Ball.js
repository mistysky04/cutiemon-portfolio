import React, { useState } from "react";
import Text from './Text.js'
import Spline from '@splinetool/react-spline';

const Ball = () => {
    //Clicked hook
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return ( 
        <>   
            <div className= "BallAnimation" onMouseDown={handleClick}>
                <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode"/>
            </div>
            <Text isBallClicked={clicked}></Text>
        </>
    )


  
}

export default Ball