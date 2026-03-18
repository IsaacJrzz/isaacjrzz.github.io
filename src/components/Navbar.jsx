import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>{`
        .nav-link-custom {
          position: relative;
          text-decoration: none !important;
          transition: all 0.3s ease;
        }
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #FF0059;
          box-shadow: 0 0 12px #FF0059;
          transition: width 0.3s ease, left 0.3s ease;
        }
        .nav-link-custom:hover::after {
          width: 100%;
          left: 0;
        }
        .nav-link-custom:hover {
          color: #FF0059 !important;
          text-shadow: 0 0 10px rgba(255, 0, 89, 0.5);
        }
      `}</style>

      <nav style={styles.nav}>
        <div style={{ ...styles.wrapper, padding: isMobile ? '0.5rem 5%' : '0.6rem 10%' }}>
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/IAJlogo.png" 
              alt="Logo" 
              style={{ 
                height: isMobile ? '50px' : '70px', 
                filter: 'drop-shadow(0 0 8px rgba(255, 0, 89, 0.4))'
              }} 
            />
          </a>

          {/* Espaciado aumentado a 60px para mayor claridad visual */}
          <div style={{ display: 'flex', gap: isMobile ? '25px' : '60px' }}>
            <a href="#inicio" className="nav-link-custom" style={styles.link}>Inicio</a>
            <a href="#tecnologias" className="nav-link-custom" style={styles.link}s>Skills</a>
            <a href="#proyectos" className="nav-link-custom" style={styles.link}>Proyectos</a>
            <a href="#contacto" className="nav-link-custom" style={styles.link}>Contacto</a>
          </div>
        </div>
      </nav>
    </>
  );
}

const styles = {
  nav: {
    width: '100%',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderBottom: '2px solid rgba(255, 0, 89, 0.3)', 
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px', // Más espacio entre letras para look de lujo
  }
};