import React from 'react';

export default function About(): JSX.Element {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-sm font-light tracking-wider mb-8">
          
            </h2>
            <p className="text-xs leading-6 text-gray-600 mb-8">
              テキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキスト
            </p>
            <p className="text-xs leading-6 text-gray-600">
              Text text text text text text text text text
              text text text text text text text text text
              text text text text text text text text text
            </p>
          </div>
          
          {/* Right column */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 