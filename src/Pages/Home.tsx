import React from 'react'
import { MyProfile } from '../Components/Profile/MyProfile'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'

const Home: React.FC = () => {
  return (
    <div>
      <MyProfile/>
      <About/>
      <Projects/>
    </div>
  )
}

export default Home