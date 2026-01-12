export interface TechConfig {
    icon: React.ComponentType;
    name: string;
}

export interface Projects {
    id: number;
    title: string;
    description: string;
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