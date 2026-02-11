import './footer.scss';
import { useLocation } from "react-router-dom";

export default function Footer() {
    //Footer not visible at message page
    const { pathname } = useLocation();
        if (pathname === "/model-portfolio/message") 
        return null;
        
    return (
        <footer>
            <p>Copyright © Laszlo Nemeth <span style={{fontFamily: 'Times New Roman'}}>2026</span></p>
        </footer>
    );
}