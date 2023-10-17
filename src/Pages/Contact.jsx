import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <motion.section
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            viewport={{once:true}}
            id="contact"
            className='scroll-mt-[6rem] mb-20 sm:md-28 w-[min(100%,39rem)] m-auto text-center px-3'
        >
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <div className='-mt-6'>
                <p className='text-gray-700 dark:text-gray-100'>Contact me directly at <a className='underline' href="mailto:tapishg4@gmail.com">tapishg4@gmail.com</a> or through this from.</p>
                <form className='mt-10 flex flex-col'>
                    <input type="email" required maxLength={500} placeholder='Your email' className='h-14 rounded-lg border border-black/10 outline-blue-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all px-4' />
                    <textarea maxLength={500} required placeholder='Your message' className='h-52 my-3 rounded-lg border border-black/10 p-4 outline-blue-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'></textarea>
                    <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none hover:scale-110 active:scale-105 hover:bg-gray-950 transition-all dark:bg-white dark:bg-opacity-10'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /></button>
                </form>
            </div>
        </motion.section>
    )
}
