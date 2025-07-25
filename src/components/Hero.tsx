import React, { useEffect, useState } from 'react';
import { Code, Database, Server, Layers } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer1 = setTimeout(() => setShowName(true), 500);
    const timer2 = setTimeout(() => setShowTitle(true), 1200);
    const timer3 = setTimeout(() => setShowIcons(true), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-fullstack');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const techIcons = [
    { icon: Server, name: 'Node.js', delay: '0ms' },
    { icon: Code, name: 'React', delay: '200ms' },
    { icon: Layers, name: 'Express.js', delay: '400ms' },
    { icon: Database, name: 'PostgreSQL', delay: '600ms' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className={`mb-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}>
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center shadow-xl">
            <Code className="w-20 h-20 text-white" />
          </div>
        </div>

        {/* Name */}
        <div className={`mb-4 transition-all duration-800 delay-500 transform ${
          showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Ignacio Maldonado
          </h1>
        </div>

        {/* Title */}
        <div className={`mb-12 transition-all duration-800 delay-1000 transform ${
          showTitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
            Desarrollador Full-Stack
          </h2>
        </div>

        {/* Tech Icons */}
        <div className={`mb-12 transition-all duration-800 delay-1500 transform ${
          showIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center group transition-all duration-300 hover:scale-110"
                style={{ animationDelay: tech.delay }}
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-2 group-hover:shadow-xl transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-800" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-800 delay-2000 transform ${
          showIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToProjects}
            className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;