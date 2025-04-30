import React from 'react';

export default function Works(): JSX.Element {
  const works = [
    { 
      id: 1, 
      image: '/images/hackUTD.png', 
      title: 'Project Title',
      category: 'カテゴリー',
      year: '2024'
    },
    { 
      id: 2, 
      image: '/images/Dashboard.png', 
      title: 'Project Title',
      category: 'カテゴリー',
      year: '2024'
    },
    { 
      id: 3, 
      image: '/images/hackP.png', 
      title: 'Project Title',
      category: 'カテゴリー',
      year: '2023'
    },
    { 
      id: 4, 
      image: '/images/Workshop.png', 
      title: 'Project Title',
      category: 'カテゴリー',
      year: '2023'
    },
    { 
      id: 5, 
      image: '/images/Travel.png', 
      title: 'Project Title',
      category: 'カテゴリー',
      year: '2023'
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-sm font-light tracking-wider mb-2">Works</h2>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          {works.map((work) => (
            <div key={work.id} className="group">
              {/* Image container */}
              <div className="overflow-hidden mb-6">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Text content */}
              <div className="space-y-4">
                {/* Category and Year */}
                <div className="flex items-center space-x-4 text-[0.7rem] text-gray-500 tracking-wider">
                  <span>{work.category}</span>
                  <span className="w-px h-3 bg-gray-300"></span>
                  <span>{work.year}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-light tracking-wider text-gray-800">
                  {work.title}
                </h3>
                
                {/* View Project Link */}
                <div className="pt-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <span className="mr-2 tracking-wider">View Project</span>
                    <span className="text-[0.6rem]">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4 mt-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>
    </section>
  );
} 