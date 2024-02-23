import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Project } from '../components/Project';
import clothlyPoster from "../images/clothly.png"
import moneyMinglePoster from "../images/moneyMingle.png"
import plateCrafterPoster from "../images/plateCrafter.png" 
import FitQuestPoster from "../images/fitQuest.png" 

const projects = [
    { 
        images: FitQuestPoster, 
        projectName: "FitQuest",
        desc:"FitQuest is your ultimate fitness destination where you can engage in exciting fitness activities, tackle daily and weekly challenges to level up your fitness game, and compete on leaderboards to see how you stack up against others.",
        techStacks:["React", "Redux", "MongoDB", "Express", "Tailwind CSS"],
        projectLink :"https://fit-quest-gamified-fitness-tracking-webapp.vercel.app/",
        gitHubLink:"https://github.com/Tapishagrawal/FitQuest---Gamified-Fitness-Tracking-Webapp"
    },
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
    }
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
