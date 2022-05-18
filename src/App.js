import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
import './App.scss';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/blog" element={ <Blog/> } />
        <Route exact path="/gallery" element={ <Gallery/> } />
      </Routes>
      <Home />
      <About />
      <Contact />
      <Footer />
      </main>  )
      ;
}

