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
    Technologies: TechConfig[];
}


export interface Tech {
    id: number;
    name: string;
    icon: string;
}