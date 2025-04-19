import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="h-screen w-screen overflow-hidden relative">
            {/* Parallax Background */}
            <div className="parallax-bg"></div>

            {/* Hero Section with Background Image */}
            <section
                className="flex flex-col items-center justify-center  bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/hero.svg)', // Direct URL reference
                    backgroundSize: 'contain', // This is still necessary for SVG
                    backgroundRepeat: 'no-repeat', // Prevents repeating
                }}
            >
                <h1 className="text-5xl font-bold mb-4 text-white">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8 text-white">Explore my projects and learn more about my work.</p>
                <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition">
                    View Projects
                </a>
            </section>
        </div>
    );
};

export default Home;