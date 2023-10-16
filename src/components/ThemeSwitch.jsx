import React, { useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <button className='fixed bottom-5 right-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-100 transition-all'
        onClick={toggleTheme}
        >
            {
                theme === "light" ? (<BsSun />) : (<BsMoon/>)
            }
        </button>
    )
}
