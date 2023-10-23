import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export const Project = () => {
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
            className='group mb-3 sm:mb-8 last:mb-40'
        >
            <div className='bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] m-auto border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]'>
                    <h3 className='text-2xl font-semibold'>Platkrafter</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat sint aliquam quibusdam nostrum ea?</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>react</li>
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>JavaScript</li>
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>Html</li>
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>SwiperJs</li>
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>Chankra UI</li>
                    </ul>
                </div>
                <img src="http://placehold.co/800x600/png"
                    className='absolute hidden sm:block top-8 -right-40 w-[25.25rem] rounded-t-lg shadow-2xl transition  
                    group-even:right-[initial] 
                    group-hover:scale-[1.04] 
                    group-even:-left-40 

                    group-hover:-translate-x-3 
                    group-hover:translate-y-3 
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3 
                    group-even:group-hover:translate-y-3 
                    group-even:group-hover:rotate-2
                ' />
            </div>
        </motion.section>
    )
}
