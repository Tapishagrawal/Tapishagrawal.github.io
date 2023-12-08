import React from 'react'
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import profilePic from "../images/profilePic.png";
import downlaodResumeLink from "../images/Tapish-Agrawal-Resume.pdf"

const resume = "https://drive.google.com/file/d/1pe6SZjhmIVPOYCzb5tQ8mH5y_66NvawW/view?usp=sharing"

export default function Home() {
    return (
        <div id='home' className='pt-32 w-[90%] lg:w-[80%] m-auto flex flex-col-reverse md:flex-row md:justify-between items-center '>
            <div className='w-[100%] mt-20 md:w-[50%]'>
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
                <motion.div className='my-10 flex justify-center sm:justify-normal'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3
                    }}
                >
                    <a id="contact-github" className='m-1 bg-gray-900 hover:bg-gray-800 px-10 max-[426px]:px-7 max-[376px]:px-5 py-3 max-[376px]:py-2 rounded-full text-white flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' target='_blank' href="https://github.com/Tapishagrawal">GitHub <FaGithubSquare /></a>
                    <button id="resume-button-2" onClick={() => window.open(resume, '_blank')}>
                        <a id="resume-link-2" className='group m-1 bg-white dark:bg-white/10 px-10 max-[426px]:px-7 max-[376px]:px-5 py-3 max-[376px]:py-2 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition ' href={downlaodResumeLink} download={"Tapish-Agrawal-Resume"}>Resume <span className='inline-block opacity-60 group-hover:translate-y-1 transition'><HiDownload /></span></a>
                    </button>
                    <a id="contact-linkedin" className='m-1 bg-white dark:bg-white/10 px-4 py-3 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' href="https://www.linkedin.com/in/tapish-agrawal/" target="_blank"><FaLinkedin /></a>
                </motion.div>
            </div>
            <div>
                <motion.div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                        className='relative w-[310px] sm:w-[350px] md:w-[320px] lg:w-[350px]'
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
                            className='absolute bottom-0 right-[6rem] max-[426px]:right-[4rem] text-4xl'
                        >👋</motion.span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
