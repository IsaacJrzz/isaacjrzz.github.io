import React from 'react';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function ProjectCard({ number, title, type, images, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.cardLink} className="project-row">
      <div style={{...styles.background, backgroundImage: `url(${images[0]})`}}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <div style={styles.sideColumn}>
            <span className="num-fx" style={styles.number}>{number}</span>
            <h3 className="title-fx" style={styles.title}>{title}</h3>
            <p style={styles.loremText}>{lorem}</p>
          </div>

          <div style={{...styles.sideColumn, textAlign: 'right', alignItems: 'flex-end'}}>
            <p style={styles.typeTag}>{type}</p>
            <p style={styles.loremText}>{lorem}</p>
            <span style={styles.detailText}>CORE_SYSTEM // PRJ_{number}</span>
          </div>
        </div>
      </div>

      <style>{`
        .project-row { text-decoration: none; display: block; border: none; outline: none; }
        .project-row:hover .title-fx { color: #FF0059 !important; transform: translateX(10px); }
        .title-fx, .num-fx { transition: all 0.5s ease; }
      `}</style>
    </a>
  );
}

const styles = {
  cardLink: { width: '100vw', height: '100vh', display: 'block', position: 'relative', margin: 0, padding: 0 },
  background: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' },
  overlay: {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)',
    zIndex: 1,
  },
  content: { position: 'relative', zIndex: 2, width: '100%', padding: '0 8vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' },
  sideColumn: { flex: '0 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' },
  number: { fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: '900', color: '#fff', opacity: '0.1', lineHeight: '0.8' },
  title: { fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', margin: 0, textTransform: 'uppercase' },
  typeTag: { color: '#FF0059', fontWeight: '800', letterSpacing: '5px', fontSize: '0.8rem' },
  loremText: { color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' },
  detailText: { color: '#444', fontSize: '0.7rem', letterSpacing: '3px' }
};