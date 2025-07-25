import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`mb-16 transition-all duration-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Si querés hablar sobre una oportunidad laboral, una entrevista o simplemente tenés una consulta, 
            estás en el lugar indicado. ¡Estoy abierto a escucharte!
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-800 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <a
            href="https://linkedin.com/in/ignacio-maldonado"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-6 h-6 mr-3" />
            LinkedIn
          </a>

          <a
            href="https://github.com/ignaciomaldonado"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-6 h-6 mr-3" />
            GitHub
          </a>

          <a
            href="mailto:ignacio@example.com"
            className="flex items-center bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6 mr-3" />
            Email
          </a>
        </div>

        <div className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-800 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <p className="text-gray-500">
            © 2024 Ignacio Maldonado. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;