import React from "react";
import "./index.css"; // <--- ¡ESTA LÍNEA ES LA QUE FALTA!
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"; 
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer"; 
import { projectsData } from "./data/projects";

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      width: '100%', 
      margin: 0, 
      padding: 0, 
      overflowX: 'hidden', 
      fontFamily: "'Poppins', sans-serif" 
    }}>
      <Navbar />
      <Hero /> 
      <Skills />

      <section id="proyectos" style={{ 
        width: '100%', 
        backgroundColor: '#000', 
        margin: 0, 
        padding: '100px 0 0 0' 
      }}>
        
        <div className="container" style={{ 
          textAlign: 'center', 
          marginBottom: '60px', 
          padding: '50px 20px' 
        }}>
          <h2 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            color: '#fff', 
            letterSpacing: '-1px', 
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: '1.1'
          }}>
            MIS <span style={{ color: '#FF0059' }}>PROYECTOS</span>
          </h2>
          
          {/* Línea decorativa corregida a FUCSIA */}
          <div style={{ 
            width: '60px', 
            height: '4px', 
            backgroundColor: '#FF0059', // Estaba en #000000, ahora es rosa
            margin: '20px auto', 
            borderRadius: '2px' 
          }}></div>

          <p style={{ 
            color: '#666', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontSize: '0.8rem', 
            marginTop: '10px',
            fontWeight: '500'
          }}>
            Selección de trabajos y desarrollos recientes
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: 0, padding: 0 }}>
          {projectsData.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}