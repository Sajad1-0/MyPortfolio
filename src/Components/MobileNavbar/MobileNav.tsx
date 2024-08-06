import React, {useState} from 'react';
import { RiMenuLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './MobileNav.scss';

interface Menu {
    name: string;
    link: string;
} 

const MenuLinks: Menu[] = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Contact', link: '/contact'}
]

 const MobileNavigation: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='mobile-nav'>
            {/* Button for toggleMenu */}
            <div className='mobileButton-section'>
                <button onClick={toggleMenu}>
                    {isOpen ? <RiMenuFoldLine className='open'/> : <RiMenuLine/> }
                </button>
            </div>

            {/* Menu items */}
            {isOpen && (
                <div className='Menulinks'>
                    <ul className='Menu-items'>
                        {MenuLinks.map((data, index) => (
                            <li key={index} className='menu-list'>
                                <Link to={data.link} className='links'
                                onClick={toggleMenu}>{data.name}</Link>  {/* Linking to routes */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ) 

}

export default MobileNavigation