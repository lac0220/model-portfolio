import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import {SocialMediaNavbar} from './components/Navbar/social_media_navbar';
import Home from './components/Home/home';
import Gallery from './components/Gallery/gallery';
import Blog from './components/Blog/blog';
import Message from './components/Message/message';
import Footer from './components/Footer/footer';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <SocialMediaNavbar/>
            <Routes>
                <Route path="/catalina-plamadeala-portfolio" element={ <Home/> } />
                <Route path="/catalina-plamadeala-portfolio/gallery" element={ <Gallery/> } />
                <Route path="/catalina-plamadeala-portfolio/blog" element={ <Blog/> } />
                <Route path="/catalina-plamadeala-portfolio/message" element={<Message />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

