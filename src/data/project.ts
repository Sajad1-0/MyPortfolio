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
    description: `A React Native mobile app for discovering and browsing movies. Built with TypeScript for type-safe screens, smooth navigation, and a polished mobile-first experience around search, details, and saved titles.

Key Features:
- Movie discovery with search and category browsing
- Dedicated detail views with ratings, overview, and metadata
- Type-safe components and navigation in TypeScript
- Mobile-first UI with smooth, native-feeling interactions`,
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
    description: `A production-ready REST API for workspace and conference room bookings. Built with Node.js and TypeScript using Clean Architecture, JWT authentication, availability checks, and Dockerized deployment for a stable production setup.

Core Functionality:
- JWT authentication and protected booking endpoints
- Room availability checks with booking conflict prevention
- Full CRUD for rooms, users, and reservations
- PostgreSQL persistence with Drizzle ORM and Docker deployment`,
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
    description: `A Node.js backend for tracking recurring subscriptions, costs, and reminders. Designed as a clean REST API with validation and MongoDB persistence — ready to power dashboards, notifications, and automation.

Core Functionality:
- CRUD for subscriptions, billing cycles, and upcoming renewals
- Input validation and structured error handling
- MongoDB persistence with a maintainable Express architecture
- API design suited for production dashboards and reminder workflows`,
    image: subscriptionTracker,
    githubLink: 'https://github.com/Sajad1-0/subscription-tracker-nodejs',
    technologies: [TECH_NODEJS, TECH_JAVASCRIPT, TECH_EXPRESS, TECH_MONGODB],
  },
  {
    id: 6,
    title: 'Job Application Tracker',
    category: 'fullstack',
    description: `A fullstack Next.js app for tracking job applications end to end — companies, statuses, and deadlines in one place. Combines a modern React UI with server-side data handling and a maintainable TypeScript codebase.

Key Features:
- Track applications with status, company, and deadline workflows
- State-driven UI with robust CRUD across the full application lifecycle
- Server-side data handling in Next.js with a typed TypeScript layer
- Responsive Tailwind UI with a live production deployment`,
    image: jobApplicationTracker,
    githubLink: 'https://github.com/Sajad1-0/Job-application-tracker-nextjs',
    liveDemo: 'https://job-application-tracker-dusky-one.vercel.app/',
    technologies: [TECH_NEXTJS, TECH_TYPESCRIPT, TECH_TAILWIND, TECH_MONGODB],
  },
  {
    id: 7,
    title: 'Dev Events',
    category: 'fullstack',
    description: `A fullstack developer events platform built with Next.js 16 — the hub for events you should not miss. Combines event discovery and registration with App Router patterns, server-side rendering, and a typed MongoDB data layer.

Key Features:
- Event discovery with advanced filtering and registration flows
- App Router architecture with Server Actions, SSR, and ISR
- Authentication and structured data modeling with MongoDB
- Type-safe APIs and a scalable full-stack TypeScript codebase`,
    image: devEvents,
    githubLink: 'https://github.com/Sajad1-0/dev-events-nextjs16',
    technologies: [TECH_NEXTJS, TECH_TYPESCRIPT, TECH_TAILWIND, TECH_MONGODB],
  },
];
