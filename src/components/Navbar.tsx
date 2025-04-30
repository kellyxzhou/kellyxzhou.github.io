// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed w-full z-50 pt-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col items-center space-y-6">
          <Link to="/" className="text-lg font-light tracking-widest text-gray-800">
            Kelly Zhou
          </Link>
          <div className="flex space-x-12">
            <Link to="/" className="text-xs font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wider">
              Home
            </Link>
            <Link to="/portfolio" className="text-xs font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wider">
              Portfolio
            </Link>
            <Link to="/about" className="text-xs font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wider">
              About
            </Link>
            <Link to="/works" className="text-xs font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wider">
              Works
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}