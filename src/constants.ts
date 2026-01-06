import React from "react";
import { Projects, Tech } from "./types"
import jerseySweden from './Assests/jersey-sweden.png'
import spotly from './Assests/Spotly.png'
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { DiDocker } from "react-icons/di";
import { SiDrizzle } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";



export const LIVE_DEMO = { icon: CgMediaLive, name: 'liveDemo' };
export const GITHUB = { icon: FaGithubSquare, name: 'github' };
export const TECH_REACT = { icon: FaReact, name: 'react' };
export const TECH_JAVASCRIPT = { icon: RiJavascriptFill, name: 'javascript' };
export const TECH_TAILWIND = { icon: RiTailwindCssFill, name: 'tailwind' };
export const TECH_TYPESCRIPT = { icon: BiLogoTypescript, name: 'typescript' };
export const TECH_SASS = { icon: FaSass, name: 'sass' };
export const TECH_JAVA = { icon: FaJava, name: 'java' };
export const TECH_SPRINGBOOT = { icon: BiLogoSpringBoot, name: 'springboot' };
export const TECH_MYSQL = { icon: SiMysql, name: 'mysql' };
export const TECH_NODEJS = { icon: FaNodeJs, name: 'nodejs' };
export const TECH_DOCKER = { icon: DiDocker, name: 'docker' };
export const TECH_DRIZZLE = { icon: SiDrizzle, name: 'drizzle' };
export const TECH_MAVEN = { icon: SiApachemaven, name: 'maven'};
export const TECH_EXPRESS = { icon: SiExpress, name: 'express' };
export const TECH_POSTGRESQL = { icon: SiPostgresql, name: 'postgresql'}

export const UserData = {
    name: 'Sajjad Ghaderi',
    title: 'Fullstack Developer | AI-Enhanced Interfaces',
    bio: `Full Stack Developer specializing in bridging robust backend systems with intuitive user 
    interfaces. From building RESTful APIs with Java/Node.js to creating responsive React applications, 
    I deliver complete digital solutions. Experienced in both startup agility and enterprise-scale
    development.`
} 

export const Project: Projects[] =[
    {
       id: 0,
       title: "Jersey Sweden",
       description: `A complete football jersey marketplace built with a modern tech stack. 
       Features a responsive React frontend for seamless shopping and a robust Java Spring Boot 
       backend handling inventory, orders, and payments. This project demonstrates end-to-end 
       development capability from UI design to database architecture. 
       Backend and frontend are not connected yet.`,
       image: jerseySweden,
       liveDemo: 'https://sajad1-0.github.io/jerseySweden/',
       githubLink: 'https://github.com/Sajad1-0/jerseySweden',
       Technologies: [TECH_REACT, TECH_JAVASCRIPT, TECH_TAILWIND, TECH_JAVA, TECH_SPRINGBOOT, TECH_MAVEN]
   },
   {
    id: 1,
    title: "Spotly",
    description: `A production-ready RESTful API for managing workspace and conference room 
    bookings. Built with Node.js and TypeScript, featuring JWT authentication, room availability 
    checking, and booking conflict prevention. Containerized with Docker for easy deployment and 
    scalability.`,
    image: spotly,
    githubLink: 'https://github.com/Sajad1-0/Spotly',
    Technologies: [TECH_NODEJS, TECH_TYPESCRIPT, TECH_EXPRESS, TECH_POSTGRESQL, TECH_DRIZZLE, TECH_DOCKER]
   }

]
    

