import './navbar_social_media.scss'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function NavbarSocialMedia() {
    const { pathname } = useLocation();
        if (pathname === "/model-portfolio/message") return null;
        
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Instagram logo" title="Instagram"><FontAwesomeIcon icon={faInstagram}/></a>
            < a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" alt="Facebook logo" title="Facebook"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" alt="Linkedin logo" title="Linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div> 
    );
}

