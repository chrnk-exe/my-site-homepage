import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
