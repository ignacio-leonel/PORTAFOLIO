import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  github: string;
}

const ProjectsFullStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-fullstack');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // ...existing code...
  const projects: Project[] = [
    {
      id: 4,
      title: "Gestión Comercial",
      image: "./images/gestioncomercial.jpg",
      description: "Sistema para gestión comercial: administración de productos, stock y ventas. Distintos roles de usuario con permisos específicos.",
      github: "https://github.com/ignacio-leonel/sistemaGestionComercial"
    }
  ];
// ...existing code...

  return (
    <section id="projects-fullstack" className="py-20 px-4 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Proyectos Full-Stack
          </h2>
        </div>

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer w-full max-w-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg text-center">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 text-lg"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );

}
export default ProjectsFullStack;