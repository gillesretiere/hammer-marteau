import React, { useState, useEffect, } from "react";

import Header from './Header';
import Footer from './Footer';
import classes from "./Layout.module.css";

const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleLightDarkMode = (mode) => {
        setDarkMode (mode);
    };

    return (
        <>
            <div id="layout" className={`${classes.container}`}>
                <div className={`bg-white border-gray-200 dark:bg-zinc-900 ${darkMode ? 'dark' : ''}`} >
                    <Header toggleLightDarkMode = {toggleLightDarkMode}/>
                    <div className={`${classes.layout} dark:bg-zinc-800`}>{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout