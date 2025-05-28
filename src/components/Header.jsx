import React from 'react';
import Navbar from './Navbar';

const Header = ({toggleLightDarkMode}) => {
    return (
        <>
            <Navbar toggleLightDarkMode = {toggleLightDarkMode} />
        </>
    )
}

export default Header