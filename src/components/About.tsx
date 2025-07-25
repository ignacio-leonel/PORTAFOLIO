import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate paragraphs with staggered delay
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setVisibleParagraphs(prev => [...prev, index]);
            }, (index + 1) * 500);
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const paragraphs = [
    {
      question: "¿Qué me mueve?",
      answer: "Me mueve la necesidad de transformar ideas en cosas reales. De sentir que lo que pienso puede tener un impacto, aunque sea pequeño."
    },
    {
      question: "¿Qué me motiva?",
      answer: "Saber que estoy creciendo. Que cada línea de código me acerca un poco más a lo que quiero construir."
    },
    {
      question: "¿Qué hago?",
      answer: "Diseño y desarrollo sistemas que funcionan, comparto mis avances y aprendo mientras lo hago. Creo en el poder de mostrar el proceso, no solo el resultado."
    },
    {
      question: "¿Por qué lo hago?",
      answer: "Porque esto me da sentido. Porque cuando programo o creo, me siento en el lugar correcto, haciendo lo que realmente quiero hacer."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre mí
          </h2>
        </div>

        <div className="space-y-12">
          {paragraphs.map((paragraph, index) => {
            // Alternar dirección de animación: izquierda (0,2), derecha (1,3)
            const direction = index % 2 === 0 ? '-translate-x-20' : 'translate-x-20';
            return (
              <div
                key={index}
                className={`transition-all duration-800 transform ${
                  visibleParagraphs.includes(index) 
                    ? 'translate-x-0 opacity-100' 
                    : `${direction} opacity-0`
                }`}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {paragraph.question}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {paragraph.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-800 delay-2000 transform ${
          visibleParagraphs.length === 4 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
        
        </div>
      </div>
    </section>
  );
};

export default About;