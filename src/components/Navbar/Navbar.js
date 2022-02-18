import classes from './Navbar.scss';
import logo from '../../img/logomodel.png';
import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom'


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
           
         <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)}</button> 
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> 
        <li>
        <NavLink
        to="/"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        Home
        </NavLink>
        </li>

        <li>
        <NavLink
        to="/About"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        About me
        </NavLink>
        </li>

        <li>
        <NavLink
        to="/contact"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >
        Contact
        </NavLink>
        </li>
        </ul>

  </nav>
  

  );
}



<nav>
<a href="#home"><img src={logo} className="nav__header__logo"alt="Logo" /></a>
<ul className="nav__menu">
  <li className="nav__menu__item">
    <a href="#home" className="nav__menu__item__link">Home</a>
  </li>
  <li className="nav__menu__item">
    <a href="#aboutme" className="nav__menu__item__link">About</a>
  </li>
  <li className="nav__menu__item">
    <a href="#contact" className="nav__menu__item__link">Contact</a>
  </li>
</ul>
<div className="nav__socialmedia">
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-instagram" /></a>    {/* instagram */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-facebook" /></a>    {/* facebook */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
</div>        
</nav>