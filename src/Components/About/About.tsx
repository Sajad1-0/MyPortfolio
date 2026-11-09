import React from 'react';
import './About.scss';
import { AboutMeData } from '../../data/constants';

const About = () => {
  return (
    <div id="about" className="about-section">
      <h1>{AboutMeData.title}</h1>
      <p>{AboutMeData.description1}</p>
      <p>{AboutMeData.description2}</p>
      <p>{AboutMeData.lastDescription}</p>
    </div>
  );
};

export default About;
