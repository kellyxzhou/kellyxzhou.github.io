// Root App.tsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Navbar from './components/Navbar';

export default function App(): JSX.Element {
  return (
    <div className="font-sans bg-[#F7F7F7] text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Products />
    </div>
  );
}