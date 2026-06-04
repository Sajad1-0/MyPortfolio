import {
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
  TECH_EXPRESS,
  TECH_MONGODB,
  TECH_SUPABASE,
} from './constants';
import { Skill } from './types';

export const skills: Skill[] = [
  // frontend
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: TECH_JAVASCRIPT.icon,
    level: 80,
    color: '#f7df1e',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: TECH_TYPESCRIPT.icon,
    level: 90,
    color: '#3178c6',
  },
  { name: 'Next.js', category: 'frontend', icon: TECH_NEXTJS.icon, level: 95, color: '#000000' },
  { name: 'React', category: 'frontend', icon: TECH_REACT.icon, level: 95, color: '#61dafb' },
  {
    name: 'React Native',
    category: 'frontend',
    icon: TECH_REACTNATIVE.icon,
    level: 75,
    color: '#61dafb',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: TECH_TAILWIND.icon,
    level: 100,
    color: '#06b6d4',
  },
  { name: 'Sass/SCSS', category: 'frontend', icon: TECH_SASS.icon, level: 100, color: '#cc6699' },

  // backend
  { name: 'Node.js', category: 'backend', icon: TECH_NODEJS.icon, level: 95, color: '#339933' },
  { name: 'Express', category: 'backend', icon: TECH_EXPRESS.icon, level: 95, color: '#444444' },
  { name: 'Python', category: 'backend', icon: TECH_PYTHON.icon, level: 40, color: '#3776ab' },
  { name: 'FastAPI', category: 'backend', icon: TECH_FASTAPI.icon, level: 40, color: '#009688' },
  { name: 'Java', category: 'backend', icon: TECH_JAVA.icon, level: 40, color: '#007396' },
  {
    name: 'Spring Boot',
    category: 'backend',
    icon: TECH_SPRINGBOOT.icon,
    level: 40,
    color: '#6db33f',
  },

  // database
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: TECH_POSTGRESQL.icon,
    level: 75,
    color: '#336791',
  },
  { name: 'MySQL', category: 'database', icon: TECH_MYSQL.icon, level: 75, color: '#4479a1' },
  { name: 'MongoDB', category: 'database', icon: TECH_MONGODB.icon, level: 60, color: '#47a248' },
  { name: 'Supabase', category: 'database', icon: TECH_SUPABASE.icon, level: 60, color: '#3ecf8e' },

  // tools
  { name: 'Git', category: 'tools', icon: GIT.icon, level: 95, color: '#f05032' },
  { name: 'GitHub', category: 'tools', icon: GITHUB.icon, level: 95, color: '#181717' },
  { name: 'Monorepo', category: 'tools', icon: MONOREPO.icon, level: 100, color: '#000000' },
  { name: 'Jest', category: 'tools', icon: TECH_JEST.icon, level: 50, color: '#c21325' },
  { name: 'Swagger', category: 'tools', icon: TECH_SWAGGER.icon, level: 90, color: '#ea4335' },
  { name: 'Postman', category: 'tools', icon: TECH_POSTMAN.icon, level: 90, color: '#ef5b25 ' },
  { name: 'Docker', category: 'tools', icon: TECH_DOCKER.icon, level: 40, color: '#2496ed' },
];
