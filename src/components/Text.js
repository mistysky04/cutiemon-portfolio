import React from "react";
import { TypeAnimation } from 'react-type-animation';



const Text = ({ isBallClicked }) => {
    // Need 2 diff keys bc they use the same classnames, otherwise won't rerender
    if (isBallClicked) {
        return (<div className = "TextBox" key="clicked">
                    <div className= "TypingAnimation"> 
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'You got ...',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            'Chubbles!',
                            1500,
                            'Lets visit a Cutiemon Gym trainer to train Chubbles'
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '3em', display: 'inline-block' }}
                        repeat={0}
                        omitDeletionAnimation= {true}
                        cursor={false}/>
                    </div>
                </div>)
    } else {
        return (<div className= "TextBox" key="notclicked">
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
