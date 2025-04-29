// components/Hero.tsx
import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Hello!</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          Welcome! I'm Kelly Zhou and I'm currently studying Computer Science at The University of Texas at Dallas.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            View My Work
          </a>
          <a href="/about" className="px-8 py-3 border border-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
