import { Projects } from "./types"
import jerseySweden from '../Assests/jersey-sweden.png'
import spotly from '../Assests/Spotly.png'
import {
    TECH_REACT,
    TECH_JAVASCRIPT,
    TECH_TAILWIND,
    TECH_JAVA,
    TECH_MYSQL,
    TECH_DOCKER,
    TECH_SPRINGBOOT,
    TECH_TYPESCRIPT,
    TECH_MAVEN,
    TECH_NODEJS,
    TECH_EXPRESS,
    TECH_POSTGRESQL,
    TECH_DRIZZLE
} from './constants'


export const Project: Projects[] =[
    {
       id: 0,
       title: "Jersey Sweden - Frontend",
       description: `A responsive React application for a football jersey marketplace, built with JavaScript and TailwindCSS. Features product filtering, shopping cart management, and intuitive user flows for seamless online shopping. 
       
       Key Features:

      - Product catalog with category filtering.

      - Interactive shopping cart with real-time updates. 

      - Responsive design across all device sizes.

      - Clean, modern UI with TailwindCSS utilities.`,
       image: jerseySweden,
       liveDemo: 'https://sajad1-0.github.io/jerseySweden/',
       githubLink: 'https://github.com/Sajad1-0/jerseySweden',
       technologies: [TECH_REACT, TECH_JAVASCRIPT, TECH_TAILWIND]
   },
   {
    id:1, 
    title: "Jersey Sweden - Backend",
    description: `A robust Java Spring Boot backend for football jersey e-commerce, handling product management, order processing, and inventory tracking with RESTful API design.
    Core Functionality:

   - Product catalog management (CRUD operations)

   - Order processing with validation

   - Inventory tracking and stock management

   - Category and product relationships

   - Secure API endpoints`,
   image: jerseySweden,
   githubLink: 'https://github.com/Sajad1-0/Backend-JerseySweden',
   technologies: [TECH_JAVA, TECH_SPRINGBOOT, TECH_MAVEN, TECH_MYSQL]
   },
   {
    id: 2,
    title: "Spotly",
    description: `A production-ready RESTful API for managing workspace and conference room bookings. Built with Node.js and TypeScript, featuring JWT authentication, room availability checking, and booking conflict prevention. Containerized with Docker for easy deployment and scalability.`,
    image: spotly,
    githubLink: 'https://github.com/Sajad1-0/Spotly',
    technologies: [TECH_NODEJS, TECH_TYPESCRIPT, TECH_EXPRESS, TECH_POSTGRESQL, TECH_DRIZZLE, TECH_DOCKER]
   }

]