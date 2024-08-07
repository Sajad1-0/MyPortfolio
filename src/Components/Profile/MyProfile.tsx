
import React from 'react'
import './StyleProfile.scss'
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

export const MyProfile: React.FC = () => {
  return (
    <div className='profile-content'>
        <div className='left'>
            <img src={profilePhoto} alt="ME" />
        </div>
        <div className='right'>
            <h1>Frontend-developer</h1>
            <p>Hi👋, I'm Sajjad Ghaderi, the developer. 
            Elevating digital experiences with seamless
            innovation.Welcome to my virtual realm.</p>

            <div className='socila-links'>
                <a href='https://www.linkedin.com/in/sajjad-ghaderi-7230821aa/'
                 target='_blank' rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
                <a href='https://github.com/Sajad1-0' target='_blank'
                rel="noopener noreferrer">
                    <FaSquareGithub />
                </a>
            </div>
        </div>
    </div>
  )
}
