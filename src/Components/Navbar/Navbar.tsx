import React from 'react'
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import MobileNavigation from '../MobileNavbar/MobileNav';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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

    const handleNavigate = (href: string) => {
        if (href.startsWith('#')) {
            const elementId = href.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

  return (
    <div className='navbar'>
        <div className='left-navbar'>
            <MobileNavigation/>
            <div className='logo'>
            <button type="button" onClick={() => handleNavigate('/')}>Sajjad.dev</button>
            </div>
        </div>
        <div className='right-navbar'>
            <ThemeToggle />
            <ul>
            {MenuLinks.map((data, index)=> (
                <li key={index}>
                <button type="button" onClick={() => handleNavigate(data.href)}
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
