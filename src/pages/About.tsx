import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <p className="text-gray-600 mb-6">
                I'm currently studying Computer Science at The University of Texas at Dallas.
                My focus is on software development, artificial intelligence, and user experience design.
              </p>
              <p className="text-gray-600">
                I'm passionate about creating innovative solutions that combine technical expertise with user-centered design.
                My goal is to build applications that make a positive impact on people's lives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Design</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>UI/UX Design</li>
                    <li>Web Design</li>
                    <li>Prototyping</li>
                    <li>User Research</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Development</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>AI/ML</li>
                    <li>Web Development</li>
                    <li>Computer Vision</li>
                    <li>NLP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 