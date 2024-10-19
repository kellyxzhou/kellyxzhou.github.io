import React from 'react';
import Header from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

const Portfolio: React.FC = () => {
    return (
        <div>
            <Header />
            <Home />
            {/* <About />
            <Projects />
            <Contact /> */}
        </div>
    );
};

export default Portfolio;
