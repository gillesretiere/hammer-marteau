import React from 'react';
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const LightDarkToggle = ({toggleLightDarkMode}) => {

    const toggleModeHandler = (mode) => {
        toggleLightDarkMode (mode);
    };
    
    return (
        <div className='grid place-items-center'>
            <div className='bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl'>
                <button onClick={() => toggleModeHandler(false)} className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'>
                    <LuSun />
                </button>
                <button onClick={() => toggleModeHandler(true)} className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'>
                    <LuMoon />
                </button>
            </div>
        </div>
    )
}

export default LightDarkToggle