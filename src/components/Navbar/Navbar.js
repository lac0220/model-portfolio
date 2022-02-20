import classes from './Navbar.scss';
import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../img/logomodel.png';


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
         <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)}</button> 
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
        <div className="nav__socialmedia">
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-instagram" /></a>    {/* instagram */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-facebook" /></a>    {/* facebook */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
</div>    
        </ul>
        
  </nav>

  );
}








