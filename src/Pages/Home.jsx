import React from 'react'
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import profilePic from "../images/profilePic.png";
import resume from "../images/Resume-Tapish.pdf";

export default function Home() {
    return (
        <div id='home' className='pt-32 w-[80%] m-auto flex flex-col-reverse sm:flex-row justify-between items-center '>
            <div className='w-[100%] mt-20 sm:w-[50%]'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <h1 id="user-detail-name" className='text-5xl font-bold my-4 text-gray-700 dark:text-gray-50'>Hi, I am <br /> Tapish Agrawal</h1>
                    <p className='text-justify leading-7 text-xl font-normal text-gray-700 dark:text-gray-50 mb-4'> an motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                </motion.div>
                <motion.div className='my-10 flex'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3
                    }}
                >
                    <a id="contact-github" className='m-1 bg-gray-900 hover:bg-gray-800 px-10 max-[426px]:px-7 max-[376px]:px-5 py-3 max-[376px]:py-2 rounded-full text-white flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' target='_blank' href="https://github.com/Tapishagrawal">GitHub <FaGithubSquare /></a>
                    <button id="resume-button-2">
                        <a id="resume-link-2" className='group m-1 bg-white dark:bg-white/10 px-10 max-[426px]:px-7 max-[376px]:px-5 py-3 max-[376px]:py-2 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition ' href={resume} target="_blank" download>Resume <span className='inline-block opacity-60 group-hover:translate-y-1 transition'><HiDownload /></span></a>
                    </button>
                    <a id="contact-linkedin" className='m-1 bg-white dark:bg-white/10 px-4 py-3 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' href="https://www.linkedin.com/in/tapish-agrawal/" target="_blank"><FaLinkedin /></a>
                </motion.div>
            </div>
            <motion.div className='w-[35%] relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.3
                    }}
                    className='relative w-[270px] max-[640px]:-ml-6 max-[570px]:-ml-12 max-[426px]:w-[270px] max-[426px]:-ml-[5rem] max-[376px]:-ml-[5.5rem]'
                >
                    <img className='home-img rounded-full border-8 border-white shadow-xl' src={profilePic} alt="Tapish Agrawal" />
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            duration: 0.6,
                            delay: 0.3
                        }}
                        className='absolute bottom-0 right-[4rem] max-[426px]:right-[4rem] text-4xl'
                    >👋</motion.span>
                </motion.div>
            </motion.div>
        </div>
    )
}
