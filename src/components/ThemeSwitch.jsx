import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme('dark');
            window.localStorage.setItem("theme", 'dark');
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem("theme", 'light');
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") || null;
        if(localTheme){
            setTheme(localTheme);
            if(localTheme==="dark"){
                document.documentElement.classList.add("dark");
            }
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    },[]);
    return (
        <button className='fixed bottom-5 right-5 bg-white dark:bg-gray-950 dark:text-white bg-opacity-100 backdrop-blur-[0.5rem] w-[2.5rem] h-[2.5rem]  border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-100 transition-all'
        onClick={toggleTheme}
        >
            {
                theme === "light" ? (<BsSun />) : (<BsMoon/>)
            }
        </button>
    )
}
