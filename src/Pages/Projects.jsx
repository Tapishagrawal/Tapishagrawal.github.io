import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Project } from '../components/Project';

export const Projects = () => {
    return (
        <section id="projects" className='scroll-mt-[6rem]'>
            <SectionHeading>My Projects</SectionHeading>
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    )
}
