// components/About.tsx
import React from 'react';

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-12 px-6 text-center bg-[#FBFBFB]">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">About Us</h2>
      <p className="max-w-md mx-auto text-gray-700">
        Our brand is defined by simplicity, a factor that characterizes our entire product line.
        Made from the highest quality porcelain, our exclusive designs fill your days with light and freshness.
      </p>
      <button className="mt-4 px-5 py-2 border border-blue-500 text-blue-500 rounded-full">View Products</button>
    </section>
  );
}