import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Project } from '../components/Project';
import clothlyPoster from "../images/clothly.png"
import moneyMinglePoster from "../images/moneyMingle.png"
import plateCrafterPoster from "../images/plateCrafter.png"
import tripTrakkerPoster from "../images/tripTrekker.png"

const projects = [
    { 
        images: clothlyPoster, 
        projectName: "Clothly",
        desc:"Clothly is an online cloth-shopping website offering users a seamless shopping experience.",
        techStacks:["React", "Redux", "Tailwind CSS", "Framer Motion", "Axios", "JSON Server"],
        projectLink :"https://clothly.vercel.app/",
        gitHubLink:"https://github.com/Tapishagrawal/clothly"
    },
    { 
        images: moneyMinglePoster, 
        projectName: "Money Mingle",
        desc:"facilitates currency conversion with user authentication, an activity dashboard, alerts, payments, credits, and debates.",
        techStacks:["HTML", "CSS", "JavaScript", "SwiperJs", "JSON Server"],
        projectLink :"https://near-steel-1499-nine.vercel.app/",
        gitHubLink:"https://github.com/Tapishagrawal/near-steel-1499"
    },
    { 
        images: plateCrafterPoster, 
        projectName: "Plate Crafter",
        desc:"specializes in custom vehicle license plate creation, featuring user authentication, an activity dashboard, cart management, and payment processing",
        techStacks:["React", "ChakraUI", "SwiperJs", "JSON Server"],
        projectLink :"https://futuristic-amount-4935.vercel.app/",
        gitHubLink:"https://github.com/Tapishagrawal/futuristic-amount-4935"
    },
    { 
        images: tripTrakkerPoster, 
        projectName: "Trip Trekker",
        desc:"TripTrakker, a travel booking website, enabling users to plan and book their trips with ease and convenience.",
        techStacks:["HTML", "CSS", "Javascript", "JSON Server", "AOS"],
        projectLink :"https://knotty-sock-1389.vercel.app/",
        gitHubLink:"https://github.com/Tapishagrawal/knotty-sock-1389"
    },
]
export const Projects = () => {
    return (
        <section id="projects" className='scroll-mt-[6rem] mx-2'>
            <SectionHeading>My Projects</SectionHeading>
            {
                projects.map(project =>(
                    <Project key={project.projectName} {...project}/>
                ))
            }
        </section>
    )
}
