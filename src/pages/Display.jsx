import React from "react";
import Logo from '../components/introsequence/Logo.jsx'
import Screen from '../components/introsequence/Screen.jsx'
import PlusButton from '../components/introsequence/PlusButton.jsx'
import Buttons from '../components/introsequence/Buttons.jsx'

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