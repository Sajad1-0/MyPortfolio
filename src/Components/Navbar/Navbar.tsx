import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import MobileNavigation from '../MobileNavbar/MobileNav';


/* Adding Navigation links */

interface Navigation {
    name: string;
    href: string;
}

const MenuLinks: Navigation[] = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'}
]


const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        {/* Right section of Menubar */}
        <div className='left-navbar'>
            {/* Hamburger Menu for mobile devices */}
            <MobileNavigation/>
            {/* Website's logo */}
            <div className='logo'>
                <Link to='/'>Sajjad.dev</Link>
            </div>
        </div>
        {/* Left section of Menubar */}
        <div className='right-navbar'>
            {/* Navigation links */}
            <ul>
            {MenuLinks.map((data, index)=> (
                <li>
                <Link key={index} className='nav-item' to={data.href}>
                    {data.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar