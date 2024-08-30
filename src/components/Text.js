import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';



const Text = ({ isBallClicked }) => {

    if (isBallClicked) {
        return (<div className = "ClickedTextbox"></div>)
    } else {
        return (<div className= "UnclickedTextBox">
                    <div className= "TypingAnimation"> 
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Welcome to the world of Cutiemon!',
                        1500, // wait 1s before replacing "Mice" with "Hamsters"
                        'Click on the ball to get a Cutiemon to join you on your journey!'
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '3em', display: 'inline-block' }}
                    repeat={0}
                    omitDeletionAnimation= {true}
                    cursor={false}
                    />
                    </div>
                </div>)
    }

}

export default Text
