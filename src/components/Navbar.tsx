// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed w-full bg-white z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            KZ
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}