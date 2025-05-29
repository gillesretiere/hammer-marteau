import React from 'react';
import Navbar from './Navbar';
import AppNavBar from './AppNavBar';

const Header = ({toggleLightDarkMode}) => {
    return (
        <>
            <AppNavBar toggleLightDarkMode = {toggleLightDarkMode} />
        </>
    )
}

export default Header