import React from 'react';
import { X, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  github: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="aspect-video overflow-hidden rounded-t-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {project.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;