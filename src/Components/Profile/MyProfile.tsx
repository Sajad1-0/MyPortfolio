import React from 'react';
import './StyleProfile.scss';
import { UserData } from '../../data/constants';
import profilePhoto from '../../Assests/Profilbild.jpg';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import CvDownload from '../CvDownload/CvDownload';

export const MyProfile: React.FC = () => {
  const handleContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="profile-content">
      <div className="left">
        <img src={profilePhoto} alt="Sajjad Ghaderi" />
      </div>
      <div className="right">
        <h1>{UserData.title}</h1>
        <p>{UserData.bio}</p>
        <CvDownload />
        <div className="social-links">
          <button type="button" onClick={handleContact}>
            Contact Me!
          </button>

          <a
            href="https://www.linkedin.com/in/sajjad-ghaderi-7230821aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Sajad1-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};
