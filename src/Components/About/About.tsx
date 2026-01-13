import React from 'react'
import './About.scss'
import { AboutMeData } from '../../data/constants'

const About: React.FC = () => {

  return (
    <div id='about' className='about-section'>
      <div className='left-about'>
        <h1>A</h1>
        <h1>B</h1>
        <h1>O</h1>
        <h1>U</h1>
        <h1>T</h1>
      </div>
      <div className='right-about'>
        <h1>
        Crafting Complete Digital Solutions: Full Stack Developer
        Based in Stockholm, Sweden 📍 
        </h1>
        <p>{AboutMeData.description1}</p>
        <h2>{AboutMeData.subTitle}</h2>
        <p>{AboutMeData.description2}</p>
        <p>{AboutMeData.description3}</p>
        <h2>{AboutMeData.subTitle2}</h2>
        <p>{AboutMeData.lastDescription}</p>
      </div>
    </div>
  )
}

export default About