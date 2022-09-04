import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function SocialMediaNavbar() {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Instagram logo" title="Instagram"><FontAwesomeIcon icon={faInstagram}/></a>    {/* instagram */}
            < a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Facebook logo" title="Facebook"><FontAwesomeIcon icon={faFacebook}/></a>    {/* facebook */}
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Linkedin logo" title="Linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>    {/* linkedin */}
        </div> 
    );
}

