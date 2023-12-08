import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import clsx from "clsx";
import downlaodResumeLink from "../images/Tapish-Agrawal-Resume.pdf"

const resume = "https://drive.google.com/file/d/1pe6SZjhmIVPOYCzb5tQ8mH5y_66NvawW/view?usp=sharing"

const links = [
    {
        name: "Home",
        hash: "#home",
        CName: "nav-link home",
    },
    {
        name: "About",
        hash: "#about",
        CName: "nav-link about",
    },
    {
        name: "Projects",
        hash: "#projects",
        CName: "nav-link projects",
    },
    {
        name: "Skills",
        hash: "#skills",
        CName: "nav-link skills",
    },
    {
        name: "Contact",
        hash: "#contact",
        CName: "nav-link contact",
    }
]

export default function Header() {
    const [activeSection, setActiveSection] = useState(localStorage.getItem("navLink") || "Home")
    
    const handlesetPage = (link) =>{
        setActiveSection(link)
        localStorage.setItem("navLink", link)
    }
    useEffect(()=>{
            localStorage.setItem("navLink", window.location.href?.split("#").slice(1).join()[0]?.toUpperCase()+window.location.href?.split("#").slice(1).join().slice(1))
            setActiveSection(window.location.href?.split("#").slice(1).join()[0]?.toUpperCase()+window.location.href?.split("#").slice(1).join().slice(1))
            if(!window.location.href?.split("#").slice(1).join()){
                localStorage.setItem("navLink", "Home")
                setActiveSection("Home")
            }
    },[])
    return (
        <header className='z-[999] relative' id="nav-menu">
            <motion.div className='fixed top-0 left-1/2  h-[5rem] sm:h-[3rem] w-full rounded-none border-white border-opacity-40 bg-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 bg-opacity-60 shadow-lg shadow-black/5 backdrop-blur-[0.5rem] sm:top-6 sm:w-[41rem] sm:rounded-full'
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial]  sm:flex-nowrap sm:gap-10'>
                    {links.map(link => (
                        <motion.li className='h-3/4 max-[375px]:text-sm max-[375px]:px-1 flex items-center justify-center relative'
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <a
                                className={clsx(`${link.CName} flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300`, { "text-gray-950 dark:text-gray-300": activeSection === link.name })}
                                href={link.hash}
                                onClick={() => handlesetPage(link.name)}
                            >
                                {link.name}
                                {link.name === activeSection &&
                                    <motion.span
                                        layoutId='activeSection'
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 50
                                        }}
                                        className='bg-gray-100 dark:bg-gray-800 rounded-full absolute inset-0 -z-10'></motion.span>
                                }
                            </a>
                        </motion.li>
                    ))}
                    <button
                        id="resume-button-1" onClick={() => window.open(resume, '_blank')}>
                        <motion.a
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            id="resume-link-1"
                            className='relative flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300'
                            href={downlaodResumeLink}
                            download={"Tapish-Agrawal-Resume"}
                        >
                            Resume
                        </motion.a>
                    </button>
                </ul>
            </nav>
        </header>
    )
}
