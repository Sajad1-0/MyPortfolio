import { WorkExperience } from "./types";
import {
    TECH_NEXTJS,
    TECH_REACTNATIVE,
    TECH_TYPESCRIPT,
    TECH_TAILWIND,
    TECH_PYTHON,
    TECH_FASTAPI,
    TECH_POSTGRESQL,
    TECH_NODEJS,
    TECH_DOCKER,
    MONOREPO,
    GITHUB,
    TECH_REACT,
    TECH_SASS,
    GIT
} from "./constants";
import yemayaLabs from '../Assests/Logo Yemaya Labs.jpeg'
import fixmeapp from '../Assests/Fixmeapp.jpg'
import skolverket from '../Assests/Skolverket.png'

export const WorkExperiences: WorkExperience[] = [
    {
        id: 0,
        title: 'Yemaya Labs',
        role: 'Full‑Stack Developer & CTO',
        dateLabel: '2026–',
        location: 'Stockholm',
        description: `CTO and full‑stack developer responsible for the full technical direction, architecture and delivery of Yemaya Labs’ core platforms (Sense & Signal).

• Led the entire IT department, including architecture, tech‑stack decisions and platform operations.
• Built and developed Sense & Signal — scalable systems for multilingual data collection and early narrative‑shift detection.
• Designed modern full‑stack architecture using Next.js, Node.js, TypeScript and cloud‑based infrastructure.
• Implemented data security and GDPR‑compliant workflows for sensitive and multilingual datasets.
• Introduced CI/CD pipelines for automated deployments, testing and stable production environments.
• Translated business needs into technical strategy and product execution, driving development from concept to launch.`,
        tech: {
            frontend: [TECH_NEXTJS, TECH_TYPESCRIPT],
            backend: [TECH_NODEJS],
            tools: [TECH_DOCKER, GITHUB]
        },
        image: yemayaLabs,
        startTime: new Date('2026-01-01'),
    },
    {
        id: 1,
        title: 'Fixmeapp',
        role: 'Full‑Stack Developer (Internship & Thesis)',
        location: 'Stockholm',
        description: `Full‑stack developer working across Python/FastAPI, Next.js, React Native and modern UI/UX workflows.

• Built a scalable booking system in Python + FastAPI capable of handling high‑concurrency requests.
• Designed a dynamic, real‑time adaptive UI that reduced the booking flow from 6 steps to 2.
• Maintained and improved the main feed flow in a shared monorepo (Next.js + React Native).
• Developed AI‑driven interface components for the thesis project.
• Collaborated closely with product and design to ensure a clean, intuitive user experience.`,
        tech: {
            frontend: [TECH_NEXTJS, TECH_REACTNATIVE, TECH_TYPESCRIPT, TECH_TAILWIND],
            backend: [TECH_PYTHON, TECH_FASTAPI, TECH_POSTGRESQL],
            tools: [MONOREPO, GITHUB]
        },
        image: fixmeapp,
        startTime: new Date('2025-07-01'),
        endTime: new Date('2025-11-16')
    },
    {
        id: 2,
        title: 'Skolverket',
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
        startTime: new Date('2024-08-31'),
        endTime: new Date('2024-11-15')
    }
]
