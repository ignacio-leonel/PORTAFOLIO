import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface WebProject {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const ProjectsWeb = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-web');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

   const projects: WebProject[] = [
    {
      id: 1,
      title: "Pastelería Rose",
      description: "Sitio web elegante para emprendimiento local de pastelería con catálogo de productos, sistema de pedidos conectado a WhatsApp para alta conversión.",
      image: "./images/pasteleria.png",
      github: "https://github.com/ignacio-leonel/Pasteleria",
      demo: "https://pasteleria-rose.vercel.app/" 
    },
    
    {
      id: 2,
      title: "Juan José Mosman",
      description: "Sitio web para Juan Mosman, trabajador del campo argentino, basado en responder a la necesidad de mostrar sus trabajos. Con dominio propio e indexado a Google.",
      image: "./images/mosman.jpg",
      demo: "https://www.juanjosemosman.com.ar",
      github :""
    },
    
    {
      id: 3,
      title: "Nacho Web",
      description: "Sitio web dedicado a la comercialización de servicios de desarrollo web, con contacto por WhatsApp y formulario de contacto.",
      image: "./images/nachoweb.jpg",
      github: "",
      demo: "https://nachoweb.com.ar"
    }
  ];
// ...existing code...;

  return (
    <section id="projects-web" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Proyectos Web y Frontend
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-blue-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver sitio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsWeb;