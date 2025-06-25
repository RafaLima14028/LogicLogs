import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
