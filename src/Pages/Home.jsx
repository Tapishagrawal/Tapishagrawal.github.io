import React from 'react'
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
export default function Home() {
    return (
        <div id='home' className='pt-32 w-[80%] m-auto flex flex-col-reverse sm:flex-row justify-between items-center '>
            <div className='w-[100%] mt-20 sm:w-[45%]'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.4
                    }}
                >
                    <h1 className='text-5xl font-bold my-4 text-gray-700 dark:text-gray-50'>Hi, I am <br /> Tapish Agrawal</h1>
                    <p className='text-justify leading-7 text-xl font-normal text-gray-700 dark:text-gray-50 mb-4'> an motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                </motion.div>
                <motion.div className='my-10 flex'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3
                    }}
                >
                    <a className='m-1 bg-gray-900 hover:bg-gray-800 px-10 py-3 rounded-full text-white flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' href="https://github.com/Tapishagrawal">GitHub <FaGithubSquare /></a>
                    <a className='group m-1 bg-white dark:bg-white/10 px-10 py-3 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition ' href="/" target="_blank">Resume <span className='inline-block opacity-60 group-hover:translate-y-1 transition'><HiDownload /></span></a>
                    <a className='m-1 bg-white dark:bg-white/10 px-4 py-3 rounded-full flex items-center gap-2 focus:scale-105 hover:scale-105 active:scale-100 transition' href="https://www.linkedin.com/in/tapish-agrawal/" target="_blank"><FaLinkedin /></a>
                </motion.div>
            </div>
            <motion.div className='w-[45%] relative'
                
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type:"tween",
                        duration: 0.3
                    }}
                >
                    <img className='rounded-full border-8 border-white shadow-xl' src="https://placehold.co/300x300/png" alt="Tapish Agrawal" />
                </motion.div>
                <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type:"spring",
                        stiffness:125,
                        duration: 0.6,
                        delay:0.3
                    }}
                className='absolute bottom-0 right-[17rem] text-4xl'>👋</motion.span>
            </motion.div>
        </div>
    )
}
