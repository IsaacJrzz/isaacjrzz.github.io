import React from 'react';

// Eliminamos las constantes descLeft y descRight que estaban fijas aquí
export default function ProjectCard({ 
  number, 
  title, 
  type, 
  images, 
  link, 
  external, 
  descriptionLeft,  // Recibimos la prop del JSON
  descriptionRight  // Recibimos la prop del JSON
}) {
  return (
    <a 
      href={link} 
      target={external ? "_blank" : "_self"} 
      rel={external ? "noopener noreferrer" : ""} 
      style={styles.cardLink} 
      className="project-row"
    >
      <div style={{...styles.background, backgroundImage: `url(${images[0]})`}}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          {/* COLUMNA IZQUIERDA */}
          <div style={styles.sideColumn}>
            <span className="num-fx" style={styles.number}>{number}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h3 className="title-fx" style={styles.title}>{title}</h3>
              <div className="line-fx" style={styles.navLine}></div>
            </div>
            {/* USAMOS LA PROP REAL */}
            <p style={styles.loremText}>{descriptionLeft}</p>
          </div>

          {/* COLUMNA DERECHA */}
          <div style={{...styles.sideColumn, textAlign: 'right', alignItems: 'flex-end'}}>
            <p style={styles.typeTag}>{type}</p>
            {/* USAMOS LA PROP REAL */}
            <p style={styles.loremText}>{descriptionRight}</p>
            <span style={styles.detailText}>CORE_SYSTEM // PRJ_{number}</span>
          </div>
        </div>
      </div>

      <style>{`
        .project-row { 
          text-decoration: none; 
          display: block; 
          border-top: 2px solid rgba(255, 0, 89, 0.3); 
          outline: none; 
          background: #000;
        }
        .project-row:hover .title-fx { color: #FF0059 !important; transform: translateX(10px); }
        .project-row:hover .line-fx { width: 100px !important; opacity: 1; transform: translateX(10px); }
        .title-fx, .num-fx, .line-fx { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
    </a>
  );
}

const styles = {
  cardLink: { width: '100%', height: '100vh', display: 'block', position: 'relative', margin: 0, padding: 0, overflow: 'hidden' },
  background: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' },
  overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 1 },
  content: { position: 'relative', zIndex: 2, width: '100%', padding: '0 8vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' },
  sideColumn: { flex: '0 1 450px', display: 'flex', flexDirection: 'column', gap: '25px' },
  number: { fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: '900', color: '#fff', opacity: '0.1', lineHeight: '0.8' },
  title: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '-1px' },
  navLine: { width: '60px', height: '4px', backgroundColor: '#FF0059', borderRadius: '2px', opacity: 0.8 },
  typeTag: { color: '#FF0059', fontWeight: '800', letterSpacing: '5px', fontSize: '0.8rem', textTransform: 'uppercase' },
  loremText: { color: '#aaa', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' },
  detailText: { color: '#444', fontSize: '0.7rem', letterSpacing: '3px', fontWeight: 'bold' }
};