import { WorkExperience } from "./types";
import { 
    TECH_NEXTJS, 
    TECH_REACTNATIVE, 
    TECH_TYPESCRIPT, 
    TECH_TAILWIND, 
    TECH_PYTHON, 
    TECH_FASTAPI, 
    TECH_POSTGRESQL, 
    MONOREPO, 
    GITHUB, 
    TECH_REACT,
    TECH_SASS,
    GIT
} from "./constants";
import fixmeapp from '../Assests/Fixmeapp.jpg'
import skolverket from '../Assests/Skolverket.png'

export const WorkExperiences: WorkExperience[] = [
    {
        id: 0,
        title: 'Fixmeapp (Startup)',
        role: 'Full stack developer Intern',
        description: `
        • Engineered backend booking system with Python & FastAPI, enabling appointment scheduling
        • Transitioned to frontend, building feed and profile pages with React/TypeScript
        • Developed AI-driven interface components for thesis—dynamic UI adapting to user prompts
        • Contributed to monorepo architecture supporting both web and mobile applications
        • Implemented features across full stack: Python/FastAPI backend & React frontend
        `,
        tech: {
            frontend: [TECH_NEXTJS, TECH_REACTNATIVE, TECH_TYPESCRIPT, TECH_TAILWIND ],
            backend: [TECH_PYTHON, TECH_FASTAPI, TECH_POSTGRESQL],
            tools: [MONOREPO, GITHUB]
        },
        image: fixmeapp,
        startTime: new Date ('2025-07-01'),
        endTime: new Date ('2025-11-16')
    },
    {
        id: 1,
        title: 'Skolverket (The Swedish National Agency for Education)',
        role: 'Frontend Developer Intern',
        description: `
        • Developed college comparison features for Sweden's national education platform, used by thousands of students
        • Built TypeScript React components enabling real-time comparison of admission requirements and points
        • Implemented accessible UI with SCSS following government WCAG accessibility standards
        • Wrote Jest tests ensuring reliability of critical comparison functionality
        • Participated in agile development cycles for high-stakes government digital service`,
        tech: {
            frontend: [ TECH_REACT, TECH_TYPESCRIPT, TECH_SASS ],
            tools: [ GIT ],
        },
        image: skolverket,
        startTime: new Date ('2024-08-31'),
        endTime: new Date ('2024-11-15')
    }
]

