import React from 'react';
import Appbar from './Appbar';

const Header = ({toggleLightDarkMode}) => {
    return (
        <>
            <Appbar toggleLightDarkMode = {toggleLightDarkMode} />
        </>
    )
}

export default Header