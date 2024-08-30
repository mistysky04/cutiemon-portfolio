import React, { useState } from "react";
import Text from './Text.js'
import Spline from '@splinetool/react-spline';

const Ball = () => {

    //Clicked hook
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    // if (clicked) {
    //     return ( 
    //         <>
    //             <div className= "Ball" onClick={handleClick}>
    //                 <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" />
    //                 <Text isBallClicked={clicked}></Text>
    //             </div>
    //         </>
    //     )
          
    // } else {
    //     return (
    //     <>
    //         <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" />

    //         {/* <div className= "Ball" onClick={handleClick}>
    //             <img src={BallClose} width={200} height={200} alt="Closed cutieball, light pink with green leaves in center"></img>
    //         </div> */}
    //         <Text isBallClicked={clicked}></Text>
    //     </>
    //     )

    return ( 
        <>
            <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" />
            <Text isBallClicked={clicked}></Text>
            
        </>
    )


  
}

export default Ball