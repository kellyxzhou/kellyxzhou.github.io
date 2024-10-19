import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden pt-16"> {/* Added padding to avoid content overlap */}
            {/* Parallax Background */}
            <div className="parallax-bg"></div>

            <header className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
                <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg">I am a passionate developer with a love for creating innovative solutions.</p>
                <a href="#projects" className="mt-6 px-4 py-2 bg-white text-blue-500 rounded shadow">View Projects</a>
            </header>

            <section className="intro relative z-10 p-10 bg-white text-center">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p>
                    I am a [Your Profession] specializing in [Your Specialization].
                    I love working on projects that challenge me and help me grow as a developer.
                </p>
                <a href="#contact" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded shadow">Contact Me</a>
            </section>
        </div>
    );
};

export default Home;
