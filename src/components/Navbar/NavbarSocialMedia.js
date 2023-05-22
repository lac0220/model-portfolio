import './navbar_social_media.scss'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function NavbarSocialMedia() {
    //NavbarSocialMedia not visible at message page
    const { pathname } = useLocation();
        if (pathname === "/model-portfolio/message") return null;
        
    return (
        <div className="social-media">
            <a 
                href="https://www.instagram.com/" 
                aria-label="Instagram" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit me on Instagram">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            < a 
                href="https://www.facebook.com/" 
                aria-label="Facebook" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit me on Facebook">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a 
                href="https://www.linkedin.com/" 
                aria-label="Linkedin" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit me on Linkedin">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </div> 
    );
}

