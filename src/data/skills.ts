import {
     TECH_CSS, 
     TECH_HTML, 
     TECH_JAVASCRIPT, 
     TECH_NEXTJS, 
     TECH_NODEJS, 
     TECH_REACT, 
     TECH_REACTNATIVE, 
     TECH_SASS, 
     TECH_TAILWIND, 
     TECH_TYPESCRIPT,
     TECH_PYTHON,
     TECH_JAVA,
     TECH_SPRINGBOOT,
     TECH_FASTAPI,
     TECH_POSTGRESQL,
     TECH_MYSQL,
     GIT,
     GITHUB,
     MONOREPO,
     TECH_DOCKER,
     TECH_JEST,
     TECH_SWAGGER,
     TECH_POSTMAN,
    } from "./constants";
import { Skill } from "./types";

export const skills: Skill[] = [
    // frontend 
    { name: 'HTML', category: 'frontend', icon: TECH_HTML.icon, level: 5 },
    { name: 'CSS', category: 'frontend', icon: TECH_CSS.icon, level: 5 },
    { name: 'JavaScript', category: 'frontend', icon: TECH_JAVASCRIPT.icon, level: 4 },
    { name: 'TypeScript', category: 'frontend', icon: TECH_TYPESCRIPT.icon, level: 4 },
    { name: 'React', category: 'frontend', icon: TECH_REACT.icon, level: 4 },
    { name: 'React Native', category: 'frontend', icon: TECH_REACTNATIVE.icon, level: 3 },
    { name: 'Next.js', category: 'frontend', icon: TECH_NEXTJS.icon, level: 3 },
    { name: 'Tailwind CSS', category: 'frontend', icon: TECH_TAILWIND.icon, level: 5 },
    { name: 'Sass/SCSS', category: 'frontend', icon: TECH_SASS.icon, level: 5 },

    // backend
    { name: 'Python', category: 'backend', icon: TECH_PYTHON.icon, level: 4 },
    { name: 'Node.js', category: 'backend', icon: TECH_NODEJS.icon, level: 3 },
    { name: 'Java', category: 'backend', icon: TECH_JAVA.icon, level: 3 },
    { name: 'Spring Boot', category: 'backend', icon: TECH_SPRINGBOOT.icon, level: 3 },
    { name: 'FastAPI', category: 'backend', icon: TECH_FASTAPI.icon, level: 3 },

    // database
    { name: 'PostgreSQL', category: 'database', icon: TECH_POSTGRESQL.icon, level: 4 },
    { name: 'MySQL', category: 'database', icon: TECH_MYSQL.icon, level: 4 },

    // tools
    { name: 'Git', category: 'tools', icon: GIT.icon, level: 5 },
    { name: 'GitHub', category: 'tools', icon: GITHUB.icon, level: 5 },
    { name: 'Monorepo', category: 'tools', icon: MONOREPO.icon, level: 5 },
    { name: 'Jest', category: 'tools', icon: TECH_JEST.icon, level: 4 },
    { name: 'Swagger', category: 'tools', icon: TECH_SWAGGER.icon, level: 3 },
    { name: 'Postman', category: 'tools', icon: TECH_POSTMAN.icon, level: 3 },
    { name: 'Docker', category: 'tools', icon: TECH_DOCKER.icon, level: 3 },
]