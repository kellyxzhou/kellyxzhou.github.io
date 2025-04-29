import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage; 