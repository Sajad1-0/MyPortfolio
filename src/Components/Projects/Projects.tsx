import { useMemo, useState } from 'react';
import './Projects.scss'
import { Project } from '../../data/project';
import { ProjectCategory } from '../../data/types';
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";

const FILTER_OPTIONS: { label: string; value: ProjectCategory }[] = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
];

const MyProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('frontend');

  const filteredProjects = useMemo(
    () => Project.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <div id='projects' className='p-sec'>
        <h1>Projects</h1>

        <div className="project-filters" role="tablist" aria-label="Filter projects by stack">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === option.value}
              className={`project-filters__btn ${activeFilter === option.value ? 'project-filters__btn--active' : ''}`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="project-list" key={activeFilter}>
            {filteredProjects.map((project) => (
                <div key={project.id} className='project-section project-section--animated'>
                    <div className='project-left'>
                        <img src={project.image} alt={project.title} loading='lazy' />
                    </div>

                    <div className='project-right'>
                        <h2>{project.title}</h2>
                        <p style={{ whiteSpace: 'pre-line'}}>{project.description}</p>

                        <div className='tech'>
                            <h2>Tech:</h2>
                            <ul>
                                {project.technologies.map((tech, index) => {
                                    const TechIcon = tech.icon;
                                    return (
                                        <li key={index} className={`tech tech-${tech.name}`}>
                                            <TechIcon/>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='project-links'>
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target='_blank' rel='noopener noreferrer'>
                                        <button type="button"> <CgMediaLive />Live Demo</button>
                                    </a>
                                )}
                                <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='github'>
                                    <FaGithubSquare />
                                </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyProjects
