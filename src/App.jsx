import React from "react";
import "./index.css"; 
// Importaciones de componentes
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"; 
import Skills from "./components/Skills"; // <-- IMPORTACIÓN DE SKILLS
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer"; 

export default function App() {
  return (
    <div className="app-wrapper">
      {/* 1. Navbar: Pegado arriba */}
      <Navbar />

      {/* 2. Hero: Ocupa el 100% del ancho y 100vh */}
      <Hero /> 

      {/* 3. Skills: Seccion de tecnologias basada en SkillIcons */}
      <Skills />

      {/* 4. Contenido Principal: Con márgenes (Container) */}
      <div className="container">
        <section id="proyectos" style={{ padding: '80px 0' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff' }}>
            MIS <span style={{ color: '#FF0059' }}>PROYECTOS</span>
          </h2>
          
          <div style={{ marginTop: '50px', display: 'grid', gap: '20px' }}>
            <ProjectCard 
              titulo="Portfolio Eléctrico" 
              desc="Diseño basado en Hot Fuchsia y Carbon Black." 
            />
            <ProjectCard 
              titulo="Dashboard Admin" 
              desc="Próximo proyecto con gráficas y datos." 
            />
          </div>
        </section>
      </div>

      {/* 5. Footer: Pegado abajo */}
      <Footer />
    </div>
  );
}