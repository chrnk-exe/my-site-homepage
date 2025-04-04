import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';
import NavigationBar from './pages/NavigationBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
