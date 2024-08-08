import React, {useState} from 'react';
import { RiMenuLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { useNavigate} from 'react-router-dom';
import './MobileNav.scss';

interface Menu {
    name: string;
    link: string;
} 

const MenuLinks: Menu[] = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '#about'},
    {name: 'Projects', link: '#projects'},
    {name: 'Contact', link: '#contact'}
]

 const MobileNavigation: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // scroll to the selected navigation link
    const navigate = useNavigate();
    const handleNavigate = (link: string) => {
        if (link.startsWith('#')) {
            // scroll to selected section
            const elementId = link.substring(1); // remove the # from link
            const element = document.getElementById(elementId);

            if(element) {
                element.scrollIntoView({ behavior: 'smooth'});
                setIsOpen(false); // close menu after selecting a link
            } 
        } else {
            // navigate to hyper link
            navigate(link);
            setIsOpen(false); // close menu after selecting a link
        }
    }

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
                                <button onClick={() => handleNavigate(data.link)} className='links'
                                >{data.name}</button>  {/* Linking to routes */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ) 

}

export default MobileNavigation