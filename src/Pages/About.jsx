import React from 'react'
import { SectionHeading } from '../components/SectionHeading'

export default function About() {
    return (
        <section id='about' className='mb-28 max-w-[43.1rem] m-auto text-center leading-8 sm:mb-40 '>
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>After graduating with a degree in B.Tech, I decided to pursue my passion for programming.I enrolled in a coding bootcamp known as a <span className='font-medium'>Masai School</span> and learned <span className='font-medium'>full-stack web development</span> My <span className='italic'>favorite part of programming</span> is the problem-solving aspect. I <span className='underline'>love</span> the feeling Finally, figure out a solution to a problem. My core stack is <span className='font-medium'> JavaScript, React, Node.js and MongoDB.</span> I also familiar with Typescript.
            I'm always looking to learn new technologies. I am currently looking for a <span className='font-medium'> full-time position</span> as a software developer.
            </p>
            <p> When <span className='italic'>I'm not coding,</span> i enjoy playing video games, and watching movies. i also enjoy <span className='font-bold'>learning new things.</span> I am currently learning how to play the guitar.</p>
        </section>
    )
}
