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
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    }),
}
export const Skills = () => {

    return (
        <section id="skills"
            className='max-w-[53rem] scroll-mt-28 text-center sm:mb-40 m-auto px-3'
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.div

                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            viewport={{
                                once: true,
                            }}
                            className='skills-card  bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-5 py-3' key={index}><p className='skills-card-name'>{skill}</p></motion.div>
                    ))
                }
            </ul>
        </section>
    )
}
