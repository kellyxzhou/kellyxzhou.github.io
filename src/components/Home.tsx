import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="h-screen w-screen overflow-hidden relative">
            {/* Parallax Background */}
            <div className="parallax-bg"></div>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">Explore my projects and learn more about my work.</p>
                <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition">View Projects</a>
            </section>
        </div>
    );
};

export default Home;
