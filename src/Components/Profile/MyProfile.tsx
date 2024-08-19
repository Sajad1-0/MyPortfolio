
import React from 'react'
import './StyleProfile.scss'
import profilePhoto from '../../Assests/IMG_3272.jpeg'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const skills = [
    {id: 1, icon: <FaHtml5/>, title: 'HTML5'},
    {id: 2, icon: <FaCss3Alt/>, title: 'CSS'},
    {id: 3, icon: <RiJavascriptFill/>, title: 'JavaScript'},
    {id: 4, icon: <BiLogoTypescript/>, title: 'TypeScript'},
    {id: 5, icon: <FaReact/>, title: 'React'},
    {id: 6, icon: <RiAngularjsLine/>, title: 'Angular'},
    {id: 7, icon: <FaSass/>, title: 'Sass'},
    {id: 8, icon: <RiTailwindCssFill/>, title: 'TailwindCss'}
]


export const MyProfile: React.FC = () => {
    
    // Navigate to constact section
    const handleContact = () => {
        const contactElement = document.getElementById('contact')
        contactElement?.scrollIntoView({ behavior: 'smooth' });
    }
    


  return (
    <div className='profile-content'>
        {/* Profile picture on left side */}
        <div className='left'>
            <img  src={profilePhoto} alt="ME" />
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
                    <FaGithubSquare/>
                </a>

            </div>
            {/* Skills section */}
            <div className='skills-section'>
                <h2>Skills</h2>
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
