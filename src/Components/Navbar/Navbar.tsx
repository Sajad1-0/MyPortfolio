import React from 'react'
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import MobileNavigation from '../MobileNavbar/MobileNav';


/* Adding Navigation links */

interface Navigation {
    name: string;
    href: string;
}

const MenuLinks: Navigation[] = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'}
]


const Navbar: React.FC = () => {

    const navigate = useNavigate();
    // navigate to chosen section of the page
    const handleNavigate = (href: string) => {
        if (href.startsWith('#')) {
            // scroll to selected section
            const elementId = href.substring(1); // remove the #
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // navigate to hyper link
            navigate(href);
        }
    }

  return (
    <div className='navbar'>
        {/* Right section of Menubar */}
        <div className='left-navbar'>
            {/* Hamburger Menu for mobile devices */}
            <MobileNavigation/>
            {/* Website's logo */}
            <div className='logo'>
            <button onClick={() => handleNavigate('/')}>Sajjad.dev</button>
            </div>
        </div>
        {/* Left section of Menubar */}
        <div className='right-navbar'>
            {/* Navigation links */}
            <ul>
            {MenuLinks.map((data, index)=> (
                <li key={index}>
                <button onClick={() => handleNavigate(data.href)}
                className='nav-item' >
                    {data.name}
                </button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar