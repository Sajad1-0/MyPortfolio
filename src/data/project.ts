import { Projects } from "./types"
import jerseySweden from '../Assests/jersey-sweden.png'
import spotly from '../Assests/Spotly.png'
import portfolio from '../Assests/Portfolio.png'
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
    TECH_DRIZZLE,
    TECH_SASS
} from './constants'


export const Project: Projects[] =[
    {
        id: 0,
        title: "My Living Technical Interview",
        description: `Consider this page your first technical assessment of my skills. Every line of code, every animation, every performance metric is a live demonstration of my capabilities as a Fullstack Developer.

        - The TypeScript Migration: Watch my GitHub history—see the systematic conversion from JavaScript, showcasing my type-safety discipline
        
        - The Animation Philosophy: Notice how micro-interactions enhance UX without sacrificing performance
        
        - The Mobile-First Evidence: Resize this window—the responsive transitions are intentional, not accidental
        
        🚀 Built With Production Standards:
        
        This isn't just a "portfolio project", it's a production application that happens to showcase my work. The same error boundaries, loading states, and performance optimizations you'd expect in enterprise software.`,
        image: portfolio,
        githubLink: 'https://github.com/Sajad1-0/MyPortfolio',
        technologies: [TECH_REACT, TECH_TYPESCRIPT, TECH_SASS]
    },
    {
       id: 1,
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
    id:2, 
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
    id: 3,
    title: "Spotly",
    description: `A production-ready RESTful API for managing workspace and conference room bookings. Built with Node.js and TypeScript, featuring JWT authentication, room availability checking, and booking conflict prevention. Containerized with Docker for easy deployment and scalability.`,
    image: spotly,
    githubLink: 'https://github.com/Sajad1-0/Spotly',
    technologies: [TECH_NODEJS, TECH_TYPESCRIPT, TECH_EXPRESS, TECH_POSTGRESQL, TECH_DRIZZLE, TECH_DOCKER]
   }

]