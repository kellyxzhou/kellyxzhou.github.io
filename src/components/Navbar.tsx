// components/Navbar.tsx
import React from 'react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-xl font-bold text-blue-600">difasa</div>
      <div className="flex gap-6">
        <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
        <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
      </div>
    </nav>
  );
}