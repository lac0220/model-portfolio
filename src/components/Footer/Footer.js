import './footer.scss';
import { useLocation } from "react-router-dom";

export default function Footer() {
    //Footer not visible at message page
    const { pathname } = useLocation();
        if (pathname === "/model-portfolio/message") 
        return null;
        
    return (
        <footer>
            <p>Copyright © Catherine Doll <span style={{fontFamily: 'Times New Roman'}}>2023</span></p>
            <p>Web design by Laszlo Nemeth</p>
        </footer>
    );
}
