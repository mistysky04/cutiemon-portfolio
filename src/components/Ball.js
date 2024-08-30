import React, { useState } from "react";
import Text from './Text.js'
import BallClose from '../assets/ball/ball_closed.png'
import BallOpen from '../assets/ball/ball_open.png'
import Kirbymon from '../assets/ball/kirbymon.png'
import { motion, useAnimation } from 'framer-motion'
import Spline from '@splinetool/react-spline';

const Ball = () => {
    // // Variables
    // const images = [BallClose, BallOpen, Kirbymon]

    // Clicked hook
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    // // Image Animation hook
    // const [currImgIndx, setCurrIndx] = useState(0)

    // const nextImage = () => {
    //     setCurrIndx(prevImgIndx => prevImgIndx + 1)
    // }

    // const ballAnimation = async () => {
    //     await controls.start({opacity: 0})
    //     nextImage()
    //     await controls.start({ opacity: 1})
    // }

    // // useEffect(() => {// code u wanna run}, [// what useEffect listens to])
    // // Also optional return fn

    // React.useEffect(() => {
    //     animate()
    // }, [currImgIndx, clicked])


    // if (clicked) {
    //     return ( 
    //         <>
    //         <motion.div
    //             animate={controls}
    //             initial={{ opacity: 1 }}
    //             transition={{ duration: 2 }} // Duration of fade
    //             className="BallAnimation"
    //             >
    //             <motion.img
    //                 src={images[currImgIndx]}
    //                 alt={`Image ${currImgIndx + 1}`}
    //                 style={{ width: 200, height: 200 }}
    //             />
    //             </motion.div>
    //             <Text isBallClicked={clicked}></Text>
    //         </>
    //     )
          
    // } else {
    //     return (
    //     <>
    //         <div className= "Ball" onClick={handleClick}>
    //             <img src={BallClose} width={200} height={200} alt="Closed cutieball, light pink with green leaves in center"></img>
    //         </div>
    //         <Text isBallClicked={clicked}></Text>
    //     </>
    //     )
    // }

    if (clicked) {
        return ( 
            <>
                <div className= "Ball" onClick={handleClick}>
                    <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" />
                    <Text isBallClicked={clicked}></Text>
                </div>
            </>
        )
          
    } else {
        return (
        <>
            <Spline scene="https://prod.spline.design/0NaqQcDCZ766ZeK6/scene.splinecode" />

            {/* <div className= "Ball" onClick={handleClick}>
                <img src={BallClose} width={200} height={200} alt="Closed cutieball, light pink with green leaves in center"></img>
            </div> */}
            <Text isBallClicked={clicked}></Text>
        </>
        )
    }

}

export default Ball