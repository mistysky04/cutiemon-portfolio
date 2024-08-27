import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Jersey10Reg from '../fonts/Jersey10Reg.ttf'


const Text = () => {
    return (
        <>
            <div className= "TextBox">
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
                        style={{ fontSize: '2em', display: 'inline-block' , fontFamily: {Jersey10Reg}}}
                        repeat={0}
                        omitDeletionAnimation= {true}
                        cursor={false}
                    />
                </div>
            </div>
        </>
        
    )
}

export default Text