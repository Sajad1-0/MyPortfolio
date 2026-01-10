import React from 'react'
import { MyProfile } from '../Components/Profile/MyProfile'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import { Workexperience } from '../Components/Workexperience/Workexperience'

const Home: React.FC = () => {
  return (
    <div id='home'>
      <MyProfile/>
      <Projects/>
      <Workexperience/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home