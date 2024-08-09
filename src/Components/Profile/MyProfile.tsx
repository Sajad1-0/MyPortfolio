
import React from 'react'
import './StyleProfile.scss'
import {useNavigate} from 'react-router-dom'
import profilePhoto from '../../Assests/IMG_3272.jpeg'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const skills = [
    {id: 1, icon: <FaHtml5/>, title: 'HTML5'},
    {id: 2, icon: <FaCss3Alt/>, title: 'CSS'},
    {id: 3, icon: <DiJavascript/>, title: 'JavaScript'},
    {id: 4, icon: <SiTypescript/>, title: 'TypeScript'},
    {id: 5, icon: <FaReact/>, title: 'React'},
    {id: 6, icon: <RiAngularjsLine/>, title: 'Angular'},
    {id: 7, icon: <FaSass/>, title: 'Sass'},
    {id: 8, icon: <RiTailwindCssFill/>, title: 'TailwindCss'}
]


export const MyProfile: React.FC = () => {
    
    // navigate to contact section
    const navigate = useNavigate();
    const handleContact = () => {
        navigate('#contact');
    }


  return (
    <div className='profile-content'>
        {/* Profile picture on left side */}
        <div className='left'>
            <img src={profilePhoto} alt="ME" />
        </div>
        {/* Bio and social media section */}
        <div className='right'>
            <h1>Frontend-developer</h1>
            <p>Hi👋, I'm Sajjad Ghaderi, the developer. 
            Elevating digital experiences with seamless
            innovation.Welcome to my virtual realm.</p>
        {/* Socila media section */}
            <div className='social-links'>

                <button onClick={handleContact}>Contact Me!</button>
                
                <a href='https://www.linkedin.com/in/sajjad-ghaderi-7230821aa/'
                 target='_blank' rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
                <a href='https://github.com/Sajad1-0' target='_blank'
                rel="noopener noreferrer">
                    <FaSquareGithub />
                </a>

            </div>
            {/* Skills section */}
            <div className='skills-section'>
                <h2>Skills:</h2>
                <ul>
                    {skills.map((skills) => (
                        <li key={skills.id}>
                            {skills.icon} 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
