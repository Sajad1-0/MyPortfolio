import React from 'react';
import './StyleProfile.scss';
import { UserData } from '../../data/constants';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import CvDownload from '../CvDownload/CvDownload';

const profilePhoto = `${process.env.PUBLIC_URL}/sajjad-ghaderi-20260909.jpg`;

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
        <p className="profile-eyebrow">{UserData.availability}</p>
        <h1>{UserData.name}</h1>
        <p className="profile-role">{UserData.title}</p>
        <p className="profile-stack">{UserData.stack}</p>
        <p className="profile-bio">{UserData.bio}</p>
        <ul className="profile-highlights">
          {UserData.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CvDownload />
        <div className="social-links">
          <button type="button" onClick={handleContact}>
            Contact Me
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
