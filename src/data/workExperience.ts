import { WorkExperience } from "./types";
import { TECH_NEXTJS, TECH_REACTNATIVE, TECH_TYPESCRIPT, TECH_TAILWIND, TECH_PYTHON, TECH_FASTAPI, TECH_POSTGRESQL, MONOREPO, GITHUB } from "./constants";

export const WorkExperiences: WorkExperience[] = [
    {
        id: 0,
        title: 'Fixmeapp',
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
        }
    }
]

