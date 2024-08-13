import React, {useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";

type Projects = {
    id: number;
    name: string;  
    description: string;
    link: any;
}

const MyProjects: React.FC = () => {

    // Adding the projects in a array of objects
    const projects: Projects[] = [
        { 
          id: 1,  
          name: 'Jersey Sweden', 
          description: `Jersey Sweden is a sleek and modern
          e-commerce platform dedicated to football enthusiasts
          who are passionate about quality and affordability. 
          Specializing in football kits, we bring you a wide 
          selection of jerseys from your favorite teams at 
          unbeatable prices. Whether you're a die-hard supporter
          or just love the sport, our collection has something
          for every fan. Built with cutting-edge technologies 
          like React, JavaScript, and Tailwind CSS, 
          Jersey Sweden offers a seamless and responsive 
          shopping experience. Our site is designed to be 
          intuitive and user-friendly, ensuring that you can 
          easily browse, select, and purchase your desired 
          jerseys without any hassle. Tailwind CSS ensures 
          that the design is not only beautiful but also highly 
          customizable, making your shopping experience as 
          engaging as possible. At Jersey Sweden, 
          we believe that supporting your team should be easy 
          and affordable. Explore our collection, find your 
          favorite jersey, and wear your passion with pride!`,

          link: 'https://sajad1-0.github.io/jerseySweden/'
        }
    ]



    const [currentProject, setCurrentProject] = useState(0);

    // function to Switch to the next project
    const nextProject = () => {
        setCurrentProject((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
    }

    // Function to switch to previous project
    const prevProject = () => {
        setCurrentProject((prevIndex) => 
        prevIndex === 0 ? projects.length -1 : prevIndex - 1);
    }

  return (
    <div id='projects'>
        <h1>Projects</h1>
            {/* prev project icon */}
            <div className='prev'>
                <IoIosArrowBack className='prev-icon' onClick={prevProject}/>
            </div>

            {/* Projects */}
            <div className='project-section'>
                <div className='project-left'>
                    <img src="" alt="" />
                </div>
                <div className='project-right'>
                    <h2>{projects[currentProject].name}</h2>
                    <p>{projects[currentProject].description}</p>
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
                <IoIosArrowForward className='next-icon' onClick={nextProject}/>
            </div>
    </div>
  )
}

export default MyProjects