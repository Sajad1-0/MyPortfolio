export interface TechConfig {
    icon: React.ComponentType;
    name: string;
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

export interface Projects {
    id: number;
    title: string;
    description: string;
    category: ProjectCategory;
    liveDemo?: string;
    githubLink: string;
    image: string;
    technologies: TechConfig[];
}


export interface Tech {
    id: number;
    name: string;
    icon: string;
}

export interface WorkExperience {
    id: number;
    title: string;
    role?: string;
    description?: string;
    location?: string;
    dateLabel?: string;
    tech?: {
        frontend?: TechConfig[],
        backend?: TechConfig[],
        tools?: TechConfig[]
    };
    image?: string;
    startTime?: Date;
    endTime?: Date;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'database';
    icon: React.ComponentType;
    level: number;
    color: string;
}