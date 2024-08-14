import React, {useState, useCallback} from 'react'
import './Projects.scss'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import jerseySweden from '../../Assests/jersey-sweden.png'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


type Projects = {
    id: number;
    name: string;  
    link: any;
}

const MyProjects: React.FC = () => {

    // Adding the projects in a array of objects
    const projects: Projects[] = [
        { 
          id: 1,  
          name: 'Jersey Sweden', 
          link: 'https://sajad1-0.github.io/jerseySweden/'
        }
    ]



    const [currentProject, setCurrentProject] = useState(0);

    // function to Switch to the next project
    const nextProject = useCallback(() => {
        setCurrentProject((prevIndex) => 
        prevIndex === projects.length - 1? 0 : prevIndex + 1);
    }, [projects.length])
    // Function to switch to previous project
   const prevProject = useCallback(() => {
    setCurrentProject((prevIndex) => 
        prevIndex === 0? projects.length - 1 : prevIndex - 1);
   }, [projects.length])

  return (
    <div id='projects' className='p-sec'>
        <h1>Projects</h1>
            {/* prev project icon */}
            <div className='arrow-icons'>
                <IoIosArrowBack className='prev-icon' onClick={prevProject}/>
                <IoIosArrowForward className='next-icon' onClick={nextProject}/>
            </div>

            {/* Projects */}
            <div className='project-section'>
                <div className='project-left'>
                    <img src={jerseySweden} alt="jersey-sweden" loading="lazy"  />
                </div>

                <div className='project-right'>
                    <h2>{projects[currentProject].name}</h2>
                    <p>Jersey Sweden is a sleek and modern
                    e-commerce platform dedicated to football enthusiasts
                    who are passionate about quality and affordability. 
                    Specializing in football kits, we bring you a wide 
                    selection of jerseys from your favorite teams at 
                    unbeatable prices. Whether you're a die-hard supporter
                    or just love the sport, our collection has something
                    for every fan.</p>
                    <p>Built with cutting-edge technologies 
                    like React, JavaScript, and Tailwind CSS, 
                    Jersey Sweden offers a seamless and responsive 
                    shopping experience. Our site is designed to be 
                    intuitive and user-friendly, ensuring that you can 
                    easily browse, select, and purchase your desired 
                    jerseys without any hassle. Tailwind CSS ensures 
                    that the design is not only beautiful but also highly 
                    customizable, making your shopping experience as 
                    engaging as possible. At Jersey Sweden,</p>

                    <div className='tech'>
                        <h2>Tech:</h2>
                        <ul>
                            <li> <FaReact/> </li>
                            <li> <RiJavascriptFill/> </li>
                            <li> <RiTailwindCssFill/> </li>
                        </ul>
                    </div>

                    <div className='project-links'>
                    <a href={projects[currentProject].link} target='_blank' 
                    rel="noopener noreferrer">
                        <button> <CgMediaLive />Live Demo </button>
                    </a>
                    
                    <a href="https://github.com/Sajad1-0/jerseySweden" target='-blank'
                    rel='noopener noreferrer'> <FaGithubSquare/> </a>
                    </div>
                </div>

            </div>

            {/* next project icon */}
            <div className='next'>
               
            </div>
    </div>
  )
}

export default MyProjects