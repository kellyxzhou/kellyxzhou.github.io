import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-sm font-light tracking-wider mb-12">Contact</h2>
        
        <div className="grid grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <p className="text-xs leading-6 text-gray-600 mb-8">
              お問い合わせはこちらから
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center space-x-4 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                <img src="/images/email.svg" alt="Email" className="w-4 h-4" />
                <span>contact@example.com</span>
              </a>
              <a href="https://linkedin.com/in/username" className="flex items-center space-x-4 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/username" className="flex items-center space-x-4 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                <img src="/images/github.svg" alt="GitHub" className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Footer navigation */}
          <div className="flex justify-end">
            <nav className="space-y-2">
              <a href="#" className="block text-xs text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#about" className="block text-xs text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#works" className="block text-xs text-gray-600 hover:text-gray-900 transition-colors">Works</a>
              <a href="#contact" className="block text-xs text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
