import classes from './Footer.scss';


export default function Footer() {
    return (
        <footer>
        <div className="footer__socialmedia">
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-instagram" /></a>    {/* instagram */}
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-facebook" /></a>    {/* facebook */}
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank"><i className="fab fa-linkedin" /></a>    {/* linkedin */}        
        </div>
        <div className="footer__copyright">
          <p>Copyright © Catalina Plamadeala 2022. Design by Laszlo Nemeth</p>
        </div>
      </footer>
    );
  }
