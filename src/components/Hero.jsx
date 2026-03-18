import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // --- LÓGICA DE LA CONSTELACIÓN TÉCNICA (CANVAS) ---
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const config = {
      particleCount: 70,
      connectDistance: 150, 
      speed: 0.2,           
    };

    let particles = [];
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        initParticles();
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.radius = Math.random() * 1.5 + 0.8; // Tamaños variados para profundidad
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - (distance / config.connectDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.12})`; 
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        .btn-neon-animated {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease !important;
        }
        .btn-neon-animated:hover {
          transform: translateY(-5px) scale(1.03);
          background-color: #FF0059 !important;
          box-shadow: 0 10px 30px rgba(255, 0, 89, 0.6) !important;
          color: #fff !important;
        }
        .btn-no-border-animated {
          transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease !important;
          border: none !important;
          background-color: transparent !important;
          opacity: 0.7;
        }
        .btn-no-border-animated:hover {
          transform: translateY(-5px);
          color: #fff !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
          opacity: 1;
        }
      `}</style>

      <section id="inicio" style={styles.hero}>
        <div style={styles.leftColumn}>
          <div style={{
              ...styles.textContainer,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}>
            <p style={styles.legend}>HOLA, MI NOMBRE ES</p>
            <h1 style={styles.title}>ISAAC ALONSO</h1>
            
            <div style={styles.subtitleContainer}>
              <h2 style={styles.subtitle}>
                Desarrollador <span style={styles.highlight}>Multiplataforma</span>
              </h2>
              <p style={styles.degree}>Técnico en Sistemas Microinformáticos y Redes</p>
            </div>

            <div style={styles.buttonContainer}>
              <a href="#proyectos" className="btn-neon-animated nav-link-custom" style={styles.primaryBtn}>
                EXPLORAR PROYECTOS
              </a>
              {/* VINCULADO AL FOOTER (#contacto) */}
              <a href="#contacto" className="btn-no-border-animated nav-link-custom" style={styles.secondaryBtn}>
                HABLEMOS
              </a>
            </div>
          </div>
        </div>

        <div style={styles.rightColumn}>
          <canvas ref={canvasRef} style={styles.canvas} />
          <div style={styles.neonOverlay}></div>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {marginBottom: '5%', height: '100vh', width: '100%', display: 'flex', backgroundColor: '#000', overflow: 'hidden', position: 'relative' },
  leftColumn: { flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5% 0 10%', zIndex: 10, background: 'linear-gradient(90deg, #000 85%, rgba(0,0,0,0) 100%)' },
  textContainer: { maxWidth: '550px', textAlign: 'left' },
  legend: { color: 'rgb(206, 206, 206)', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: '700', marginBottom: '10px', display: 'block' },
  title: { fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: '#fff', margin: '0', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-3px', textTransform: 'uppercase' },
  subtitleContainer: { marginTop: '35px', borderLeft: '3px solid rgba(255, 0, 89, 0.25)', paddingLeft: '25px' },
  subtitle: { fontSize: '1.55rem', color: '#fff', margin: 0, fontWeight: '600', display: 'inline-block', position: 'relative', borderBottom: '3px solid rgba(255, 0, 89, 0.25)', paddingBottom: '10px' },
  degree: { fontSize: '0.88rem', color: 'rgb(206, 206, 206)', marginTop: '18px', textTransform: 'uppercase', letterSpacing: '1.2px', opacity: 0.65, fontWeight: '400' },
  highlight: { color: '#FF0059', fontWeight: '700', textShadow: '0 0 15px rgba(255, 0, 89, 0.3)' },
  rightColumn: { flex: '1 1 50%', position: 'relative', zIndex: 5, borderBottomLeftRadius: '60px', overflow: 'hidden', background: 'linear-gradient(135deg, #ff1667 0%, #b90041 35%, #3d0015 100%)' },
  canvas: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 },
  neonOverlay: { position: 'absolute', top: '15%', right: '15%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255, 0, 89, 0.12) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(70px)', zIndex: 2 },
  buttonContainer: { display: 'flex', gap: '25px', marginTop: '60px', alignItems: 'center' },
  primaryBtn: { display: 'inline-block', backgroundColor: '#FF0059', color: '#fff', padding: '16px 32px', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1.5px', borderRadius: '0.2rem', boxShadow: '0 5px 20px rgba(255, 0, 89, 0.3)', cursor: 'pointer', textDecoration: 'none' },
  secondaryBtn: { display: 'inline-block', color: 'rgba(255, 255, 255, 0.7)', padding: '16px 32px', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1.5px', borderRadius: '0.2rem', cursor: 'pointer', textDecoration: 'none' }
};