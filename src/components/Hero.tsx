// components/Hero.tsx
import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        {/* Main image */}
        <div className="w-full aspect-[2/1] mb-12">
          <img 
            src="/images/ocean-horizon.jpg" 
            alt="Serene Ocean Horizon" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-400"></div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <div className="writing-vertical-rl text-xs tracking-[0.2em] text-gray-600 transform rotate-180">
            scroll
          </div>
        </div>
      </div>
    </section>
  );
}
