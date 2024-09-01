import React from "react";
import Logo from '../components/Logo.js'
import Screen from '../components/Screen.js'
import PlusButton from '../components/PlusButton.js'
import Buttons from '../components/Buttons.js'

export const Display = () => {
    return (
        <div className= "Display">
            <div className= "CenterDisplayComponents">
                <PlusButton />
                <Screen />
                <Buttons />
            </div>
            <Logo />
        </div>
    )
}