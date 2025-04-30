import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home(): JSX.Element {
  return (
    <div className="bg-cream">
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
} 