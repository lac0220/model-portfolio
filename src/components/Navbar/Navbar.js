import './navbar.scss';
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import logo from '../../img/logo.webp';

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
                <HashLink to="/catalina-plamadeala-portfolio/#home"><img src={logo} alt="Logo" /></HashLink>
            </div>   
            <button onClick={handleToggle}>{navbarOpen ? (<MdClose/>) : (<FiMenu/>)}</button> 
            <ul className={`${navbarOpen ? " showMenu" : ""}`}> 
                <li>
                    <NavLink to="/catalina-plamadeala-portfolio" onClick={() => closeMenu()}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/catalina-plamadeala-portfolio/gallery" onClick={() => closeMenu()}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/catalina-plamadeala-portfolio/blog" onClick={() => closeMenu()}>Blog</NavLink>
                </li>
                <li>
                    <HashLink to="/catalina-plamadeala-portfolio/#about-me" onClick={() => closeMenu()}>About me</HashLink>
                </li>
                <li>
                    <HashLink to="/catalina-plamadeala-portfolio/#contact" onClick={() => closeMenu()}>Contact</HashLink>
                </li>
            </ul>
        </nav>
    );
}


    




