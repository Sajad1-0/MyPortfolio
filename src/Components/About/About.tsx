import React from 'react'
import './About.scss'

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
        Crafting Degital Experiences: Front-End Maestro,
        Based in Stockholm, Sweden 📍 
        </h1>
        <p>
        My journey in web development began with a fascination for the for the intersection of design
        and technology. Over the years, I've cultivated a deep understanding of HTML, CSS, and JavaScript,
        along with various front-end frameworks such as React and Angular. Collaboration is the heart
        of my work ethos. I thrive in dynamic enviroments where I can collaborate with cross-functional teams
        to bring ideas to life. By fostering open communication and embracing feedback, I believe in the 
        power of teamwork to unlock creativity and drive innovation.
        </p>
        <p>
        I train both boxing and strength training.
        Boxing helps me focus on one thing at a time and pushes
        me to keep getting better. Strength training helps me 
        build the strength I need to keep improving.
        In my free time, I like to hike and read. 
        These activities relax me and give me fresh ideas, 
        especially when it comes to coding.
        </p>
      </div>
    </div>
  )
}

export default About