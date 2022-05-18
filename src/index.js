import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';


ReactDOM.render((
  <BrowserRouter>
        <Navbar />
  <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
  </BrowserRouter>
  ), document.getElementById('root'));



