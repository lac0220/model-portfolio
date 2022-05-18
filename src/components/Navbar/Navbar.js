import classes from './Navbar.scss';
import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
          <nav>
            <div className="nav__logo">
              <Link
                to="/#home">
                <a href="#home"><img src={logo} alt="Logo" /></a> 
              </Link>
            </div>   
            <button onClick={handleToggle}>{navbarOpen ? (<MdClose/>) : (<FiMenu/>)}</button> 
            <ul className={`${navbarOpen ? " showMenu" : ""}`}> 
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
                <NavLink
                to="/gallery"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
                >
                Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                to="/blog"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
                >
                Blog
                </NavLink>
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


    




