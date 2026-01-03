import React, {useState, useCallback} from 'react'
import './Projects.scss'
import { Project } from '../../constants';
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import jerseySweden from '../../Assests/jersey-sweden.png'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


type Projects = {
    id: number;
    name: string;  
    link: any;
}

const MyProjects = () => {

  return (
    <div id='projects' className='p-sec'>
        <h1>Projects</h1>
           
            {/* Projects */}
            {Project.map((project) => (
                <div key={project.id} className='project-section'>
                    <div className='project-left'>
                        <img src={project.image} alt="project-image" loading='lazy' />
                    </div>

                    <div className='project-right'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

                        <div className='tech'>
                            <h2>Tech:</h2>
                            <ul>
                                {project.Technologies.map((tech, index) => {
                                    const TechIcon = tech.icon;
                                    return (
                                        <li key={index} className={`tech-icon tech-${tech.name}`}> 
                                            <TechIcon/> 
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='project-links'>
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target='_blank' rel='noopener noreferrer'>
                                        <button> <CgMediaLive />Live Demo</button>
                                    </a>
                                )}
                                <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                                    <FaGithubSquare />
                                </a>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default MyProjects