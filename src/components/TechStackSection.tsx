import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiVite,
  SiNextdotjs,
  SiFramer,
  SiGit,
  SiPostgresql,
  SiMysql,
  SiNodedotjs
} from 'react-icons/si';

// Paleta de azules y celestes para los iconos
const iconColors = [
  "#38bdf8", // celeste
  "#0ea5e9", // azul claro
  "#2563eb", // azul
  "#1e40af", // azul oscuro
  "#60a5fa", // celeste claro
  "#0284c7", // azul intermedio
  "#0ea5e9", // azul claro
  "#38bdf8", // celeste
  "#2563eb", // azul
  "#1e40af", // azul oscuro
  "#60a5fa", // celeste claro
  "#0284c7"  // azul intermedio
];

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Vite', icon: SiVite },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Git', icon: SiGit },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Node.js', icon: SiNodedotjs }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: "#172554" }} // azul oscuro
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tecnologías que uso a diario
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-slate-700"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Soy un entusiasta creyente que no hay que ser especialista en ninguna tecnología, pero conocerlas lleva a poder elegir la que mejor se adapte a las necesidades.
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <tech.icon size={36} color={iconColors[index % iconColors.length]} />
              <span className="mt-2 text-sm text-slate-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
