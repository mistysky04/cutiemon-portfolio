import React from "react";
import pretendo from '../assets/controller/pretendo_logo.png'
import button from '../assets/controller/button.svg'

const Controls = () => {
    <>
        <div className= 'plussign'>
            <img src={pretendo} alt="Pretendo Logo"></img>
        </div>

        <div className= 'buttons'>
            <img src={button} alt="Circular Buttons"></img>
        </div>

    </>
}

export default Controls