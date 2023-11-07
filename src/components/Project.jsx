import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react';
import { FaGithubSquare } from 'react-icons/fa';


export const Project = ({ images, projectName, desc, techStacks, projectLink, gitHubLink }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <motion.section
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='project-card group mb-3 sm:mb-8 last:mb-40'
        >
            <div className='bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] m-auto border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition'>
                <a href={`${gitHubLink}`} className='project-github-link absolute flex justify-center items-center  right-1 w-[40px] h-[30px] rounded-md bg-[#1e2124] focus:scale-105 hover:scale-105 active:scale-100 transition text-lg group-odd:right-1 group-odd:left-[initial] sm:group-odd:right-[initial] sm:group-odd:left-1 top-1' target='_blank'><FaGithubSquare /></a>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]'>
                    <a href={projectLink} target='_blank' className='project-title text-2xl font-semibold'>{projectName}</a>
                    <p className='project-description mt-2 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-4'>{desc}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {techStacks.map((techStack, i) => (
                            <li key={i} className='project-tech-stack bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>{techStack}</li>
                        ))}
                    </ul>
                </div>
                <a href={projectLink} className='project-deployed-link' target='_blank'>
                    <img src={images}
                        alt={projectName}
                        className='absolute hidden sm:block top-8 -right-80 w-[39.50rem] rounded-t-lg shadow-2xl transition  
                            group-even:right-[initial] 
                            group-hover:scale-[1.04] 
                            group-even:-left-80 

                            group-hover:-translate-x-3 
                            group-hover:translate-y-3 
                            group-hover:-rotate-2

                            group-even:group-hover:translate-x-3 
                            group-even:group-hover:translate-y-3 
                            group-even:group-hover:rotate-2
                        ' />
                </a>

            </div>

        </motion.section>
    )
}
