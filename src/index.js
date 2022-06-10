import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Message from './components/Message/Message';

ReactDOM.render((
  <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/message" element={<Message />} />
          </Routes>
  </BrowserRouter>
  
), document.getElementById('root'));



