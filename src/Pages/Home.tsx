import React from 'react'
import { MyProfile } from '../Components/Profile/MyProfile'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import { Workexperience } from '../Components/Workexperience/Workexperience'
import Skills from '../Components/Skills'

const Home: React.FC = () => {
  return (
    <div id='home'>
      <MyProfile/>
      <Projects/>
      <Workexperience/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home