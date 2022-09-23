import './navbar.scss';
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import logo from '../../img/logo.svg';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <nav>
            <div>
                <HashLink 
                    to="/model-portfolio/#home"><img src={logo} alt="Logo" />
                </HashLink>
            </div>   
            <button aria-label="Navigation" onClick={handleToggle}>{navbarOpen ? (<MdClose/>) : (<FiMenu/>)}</button> 
            <ul className={`${navbarOpen ? " showMenu" : ""}`}> 
                <li>
                    <NavLink 
                        to="/model-portfolio" onClick={() => closeMenu()}>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/model-portfolio/gallery" onClick={() => closeMenu()}>Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/model-portfolio/blog" onClick={() => closeMenu()}>Blog
                    </NavLink>
                </li>
                <li>
                    <HashLink 
                        to="/model-portfolio/#about-me" onClick={() => closeMenu()}>About me
                    </HashLink>
                </li>
                <li>
                    <HashLink 
                        to="/model-portfolio/#contact" onClick={() => closeMenu()}>Contact
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
}


    




