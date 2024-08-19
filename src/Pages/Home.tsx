import React from 'react'
import { MyProfile } from '../Components/Profile/MyProfile'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

const Home: React.FC = () => {
  return (
    <div id='home'>
      <MyProfile/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home