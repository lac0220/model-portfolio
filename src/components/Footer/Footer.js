import './footer.scss';
import { useLocation } from "react-router-dom";

export default function Footer() {
    const { pathname } = useLocation();
        if (pathname === "/model-portfolio/message") return null;
        
    return (
        <footer>
            <p>Copyright © Catalina Plamadeala 2022</p>
            <p>Web design by Laszlo Nemeth</p>
        </footer>
    );
}
