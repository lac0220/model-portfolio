import classes from './Navbar.scss';
import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../img/logomodel.webp';


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

    return (
         <nav className="navBar">
         <div className="nav__log">
          <a href="#home"><img src={logo} className="nav__logo"alt="Logo" /></a>
          </div>   
         <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{ color: "white", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "white", width: "40px", height: "40px" }} />)}</button> 
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> 
        <li>
        <NavHashLink
        to="/#home"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        Home
        </NavHashLink>
        </li>

        <li>
        <NavHashLink
        to="/#aboutme"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        About me
        </NavHashLink>
        </li>

        <li>
        <NavHashLink
        to="/#contact"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        Contact
        </NavHashLink>
        </li>
        </ul>
  </nav>
  

  );
}








