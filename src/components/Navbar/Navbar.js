import classes from './Navbar.scss';


export default function Navbar() {
    return (
      <header>
      <nav className="navbar">
        <div className="nav__header">
          <img className="nav__header__logo" src="/img/logo.png" alt="Logo" />
        </div>
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
    </header>
  );
}

