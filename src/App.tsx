// Root App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="font-sans bg-[#F7F7F7] text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}