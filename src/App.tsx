import React from 'react';
import Hero from './components/Hero';
import ProjectsFullStack from './components/ProjectsFullStack';
import ProjectsWeb from './components/ProjectsWeb';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { TechStackSection } from './components/TechStackSection'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ProjectsFullStack />
      <ProjectsWeb />
      <About />
      <TechStackSection />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;