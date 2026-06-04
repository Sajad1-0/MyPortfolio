import { Projects } from './types';
import jerseySweden from '../Assests/jersey-sweden.png';
import spotly from '../Assests/Spotly.png';
import movieApp from '../Assests/Movie-app.png';
import subscriptionTracker from '../Assests/subscription-app.png';
import jobApplicationTracker from '../Assests/job-app-tracker.png';
import devEvents from '../Assests/event-app.png';
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
  TECH_NEXTJS,
  TECH_REACTNATIVE,
  TECH_MONGODB,
  TECH_PRISMA,
  TECH_SUPABASE,
} from './constants';

export const Project: Projects[] = [
  {
    id: 1,
    title: 'Jersey Sweden',
    category: 'frontend',
    description: `A responsive React application for a football jersey marketplace, built with JavaScript and TailwindCSS. Features product filtering, shopping cart management, and intuitive user flows for seamless online shopping.

Key Features:
- Product catalog with category filtering
- Interactive shopping cart with real-time updates
- Responsive design across all device sizes
- Clean, modern UI with TailwindCSS utilities`,
    image: jerseySweden,
    liveDemo: 'https://sajad1-0.github.io/jerseySweden/',
    githubLink: 'https://github.com/Sajad1-0/jerseySweden',
    technologies: [TECH_REACT, TECH_JAVASCRIPT, TECH_TAILWIND],
  },
  {
    id: 2,
    title: 'Movie App',
    category: 'frontend',
    description: `A React Native mobile app for discovering and browsing movies. Built with TypeScript for type-safe components, smooth navigation, and a polished mobile-first experience.`,
    image: movieApp,
    githubLink: 'https://github.com/Sajad1-0/movie-app-react-native',
    technologies: [TECH_REACTNATIVE, TECH_TYPESCRIPT],
  },
  {
    id: 3,
    title: 'Jersey Sweden Backend',
    category: 'backend',
    description: `A robust Java Spring Boot backend for football jersey e-commerce, handling product management, order processing, and inventory tracking with RESTful API design.

Core Functionality:
- Product catalog management (CRUD operations)
- Order processing with validation
- Inventory tracking and stock management
- Secure API endpoints`,
    image: jerseySweden,
    githubLink: 'https://github.com/Sajad1-0/Backend-JerseySweden',
    technologies: [TECH_JAVA, TECH_SPRINGBOOT, TECH_MAVEN, TECH_MYSQL],
  },
  {
    id: 4,
    title: 'Spotly',
    category: 'backend',
    description: `A production-ready RESTful API for managing workspace and conference room bookings. Built with Node.js and TypeScript, featuring JWT authentication, room availability checking, and booking conflict prevention. Containerized with Docker for easy deployment and scalability.`,
    image: spotly,
    githubLink: 'https://github.com/Sajad1-0/Spotly',
    technologies: [
      TECH_NODEJS,
      TECH_TYPESCRIPT,
      TECH_EXPRESS,
      TECH_POSTGRESQL,
      TECH_DRIZZLE,
      TECH_DOCKER,
    ],
  },
  {
    id: 5,
    title: 'Subscription Tracker',
    category: 'backend',
    description: `A Node.js backend API for tracking recurring subscriptions. Handles CRUD operations, validation, and persistence with a clean REST API design suitable for production dashboards and automation.`,
    image: subscriptionTracker,
    githubLink: 'https://github.com/Sajad1-0/subscription-tracker-nodejs',
    technologies: [TECH_NODEJS, TECH_JAVASCRIPT, TECH_EXPRESS, TECH_MONGODB],
  },
  {
    id: 6,
    title: 'Job Application Tracker',
    category: 'fullstack',
    description: `A fullstack Next.js application for tracking job applications end-to-end. Combines a modern React UI with server-side data handling, structured workflows, and a maintainable TypeScript codebase.`,
    image: jobApplicationTracker,
    githubLink: 'https://github.com/Sajad1-0/Job-application-tracker-nextjs',
    liveDemo: 'https://job-application-tracker-dusky-one.vercel.app/',
    technologies: [TECH_NEXTJS, TECH_TYPESCRIPT, TECH_TAILWIND, TECH_MONGODB],
  },
  {
    id: 7,
    title: 'Dev Events',
    category: 'fullstack',
    description: `A fullstack developer events platform built with Next.js 16. Showcases event discovery, registration flows, and a scalable architecture with modern React patterns and type-safe APIs.`,
    image: devEvents,
    githubLink: 'https://github.com/Sajad1-0/dev-events-nextjs16',
    technologies: [TECH_NEXTJS, TECH_TYPESCRIPT, TECH_TAILWIND, TECH_MONGODB],
  },
];
