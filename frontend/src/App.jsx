import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
