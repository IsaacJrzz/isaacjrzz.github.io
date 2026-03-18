import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // AÑADIMOS EL ID contacto AQUÍ
    <footer id="contacto" style={styles.footer}>
      {/* Línea decorativa de neón (2px y más brillante) */}
      <div style={styles.neonLine}></div>

      <div style={styles.container}>
        <div style={styles.infoSection}>
          <h2 style={styles.logo}>ISAAC <span style={styles.highlight}>ALONSO</span></h2>
          <p style={styles.text}>"Ojalá que empezara de cero, y poderle decir que he pasado la vida sin saber que la espero"</p>
          <p style={styles.text}>Roberto Iniesta</p>
        </div>

        <div style={styles.contactSection}>
          <h3 style={styles.title}>¿TIENES UN PROYECTO?</h3>
          <a href="mailto:isaacalonsojrz@gmail.com" target='_blank' rel="noreferrer" style={styles.email}>
            ISAACALONSOJRZ@GMAIL.COM
          </a>
          
          <div style={styles.socials}>
            <a href="https://www.linkedin.com/in/isaacalonsojuarez/" target='_blank' rel="noreferrer" className="footer-link">LINKEDIN</a>
            <a href="https://github.com/IsaacJrzz" target='_blank' rel="noreferrer" className="footer-link">GITHUB</a>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>© {currentYear} — DISEÑADO POR ISAAC ALONSO</p>
        <p style={styles.copyright}>DESARROLLO DE APLICACIONES MULTIPLATAFORMA & SISTEMAS MICROINFORMÁTICOS Y REDES</p>
      </div>

      <style>{`
        .footer-link {
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 2px;
          margin-left: 20px;
        }
        .footer-link:hover {
          color: #FF0059;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000',
    padding: '80px 10% 40px 10%',
    position: 'relative',
    color: '#fff',
    fontFamily: 'sans-serif',
    // Esto asegura que el scroll sea suave si el navegador lo soporta
    scrollMarginTop: '20px', 
  },
  neonLine: {
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '2px', // Tus 2px de grosor
    background: 'linear-gradient(90deg, transparent, #ff0059, transparent)',
    opacity: 0.8, // Más brillo
    boxShadow: '0 0 10px rgba(255, 0, 89, 0.3)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px',
  },
  infoSection: { flex: '1 1 300px' },
  logo: { fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px', marginBottom: '20px' },
  highlight: { color: '#FF0059' },
  text: { color: '#888', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '300px' },
  contactSection: { flex: '1 1 300px', textAlign: 'right' },
  title: { fontSize: '0.8rem', letterSpacing: '4px', color: '#FF0059', marginBottom: '15px' },
  email: { 
    fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
    fontWeight: '900', 
    color: '#fff', 
    textDecoration: 'none',
    display: 'block',
    marginBottom: '30px',
    transition: 'opacity 0.3s'
  },
  socials: { display: 'flex', justifyContent: 'flex-end' },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    opacity: 0.4,
  },
  copyright: { fontSize: '0.65rem', letterSpacing: '2px' }
};