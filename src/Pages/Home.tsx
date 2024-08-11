import React from 'react'
import { MyProfile } from '../Components/Profile/MyProfile'
import About from '../Components/About/About'

const Home: React.FC = () => {
  return (
    <div>
      <MyProfile/>
      <About/>
    </div>
  )
}

export default Home