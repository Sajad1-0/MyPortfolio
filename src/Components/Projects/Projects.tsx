import './Projects.scss'
import { Project } from '../../constants';
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";



const MyProjects = () => {

  return (
    <div id='projects' className='p-sec'>
        <h1>Projects</h1>
           
            {/* Projects */}
            {Project.map((project) => (
                <div key={project.id} className='project-section'>
                    <div className='project-left'>
                        <img src={project.image} alt="project-image" loading='lazy' />
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
                                        <button> <CgMediaLive />Live Demo</button>
                                    </a>
                                )}
                                <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className={`github`}>
                                    <FaGithubSquare />
                                </a>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default MyProjects