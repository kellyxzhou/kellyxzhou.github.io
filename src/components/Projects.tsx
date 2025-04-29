import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "ElevatorPitch",
            role: "Designer, Developer",
            description: "A human-centric AI/ML and NLP solution with hardware and software components for building managers' maintenance complaints and employed advanced AI models like wav2vec2 and MNLI on Google Cloud Platform (GCP) for data analytics",
            image: "/images/elevatorpitch.png",
            link: "https://devpost.com/software/elevator-pitch-0ulh1k"
        },
        {
            title: "HackUTD IX",
            role: "Designer",
            description: "Largest hackathon in texas with over 1000+ participants.",
            image: "/images/hackUTD.png",
            link: "https://ix.hackutd.co/"
        },
        {
            title: "HackPortal",
            role: "Designer",
            description: "A platform for user-friendly hackathon event management.",
            image: "/images/hackP.png",
            link: "https://hackportal-dev.acmutd.co/"
        },
        {
            title: "SafeOR",
            role: "Designer, Developer",
            description: "Using computer vision, ml, and nlp during surgery to decrease procedural errors preventing mishaps before they even happen.",
            image: "/images/Dashboard.png",
            link: "https://devpost.com/software/safeor"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative group">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </a>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-blue-600 font-medium mb-4">{project.role}</p>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                {project.link && (
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        View project {`>>`}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
