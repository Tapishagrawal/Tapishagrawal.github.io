import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Project } from '../components/Project';

export const Projects = () => {
    return (
        <section id="projects">
            <SectionHeading>My Projects</SectionHeading>
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    )
}
