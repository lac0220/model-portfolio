import * as React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NavbarSocialMedia from './components/Navbar/NavbarSocialMedia';
import Footer from './components/Footer/Footer';
import LoadingSpinner from "./components/Loading_Spinner/LoadingSpinner";

const LazyHome = React.lazy(() => import("./components/Home/Home"));
const LazyBlog = React.lazy(() => import("./components/Blog/Blog"));
const LazyGallery = React.lazy(() => import("./components/Gallery/Gallery"));
const LazyMessage = React.lazy(() => import("./components/Message/Message"));

export default function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <NavbarSocialMedia />
            <Routes>
                <Route path="/model-portfolio" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyHome /></React.Suspense>} />
                <Route path="/model-portfolio/gallery" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyGallery /></React.Suspense>} />
                <Route path="/model-portfolio/blog" element={<React.Suspense fallback={<><LoadingSpinner /></>}><LazyBlog /></React.Suspense>} />
                <Route path="/model-portfolio/message" element={<React.Suspense fallback={<><LoadingSpinner /></>}><LazyMessage /></React.Suspense>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

