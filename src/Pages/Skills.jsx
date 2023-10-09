import React from 'react'
import { motion } from "framer-motion"
import { SectionHeading } from '../components/SectionHeading';

const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "GitHub",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "ChakraUI"
]

export const Skills = () => {
    const fadeInAnimationVariants = {
        initial:{
            opacity:0,
            y:100
        },
        animate:(index)=>({
            opacity:1,
            y:0,
            transition:{
                delay:0.05*index
            }
        }),
    }
    return (
        <section id="skills"
            className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 m-auto'
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3' key={index}>{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
