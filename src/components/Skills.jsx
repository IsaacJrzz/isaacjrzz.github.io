import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Skills() {
  const skillCards = [
    { title: "Frontend Core", icons: "html,css,js" },
    { title: "Modern Web", icons: "react,vite,js" },
    { title: "Backend & Scripting", icons: "java,js,py" },
    { title: "Databases", icons: "mysql,mongodb,postgres" },
    { title: "IDEs & Tools", icons: "idea,vscode,eclipse" },
    { title: "Version Control", icons: "git,github" },
    { title: "OS & Servers", icons: "linux,windows,ubuntu" },
    { title: "Hardware & Support", icons: "arduino,raspberrypi" }
  ];

  // Calculamos la tarjeta central para que aparezca ahí al cargar
  const middleIndex = Math.floor(skillCards.length / 2);

  return (
    <section id="tecnologias" style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.header}>
          <h2 style={styles.mainTitle}>
            TECH <span style={styles.fuchsiaText}>COLLECTION</span>
          </h2>
          <p style={styles.subtitle}>Ecosistema de desarrollo, sistemas y hardware</p>
        </div>

        <Swiper
          modules={[Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={middleIndex} // <--- Empieza siempre en la tarjeta central
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          style={styles.swiperContainer}
        >
          {skillCards.map((card, index) => (
            <SwiperSlide key={index} style={styles.slide}>
              <div className="nft-card-visual" style={styles.card}>
                <div className="glass-reflection"></div>
                
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                </div>

                <div style={styles.cardBody}>
                  <div className="icon-platform">
                    <img 
                      src={`https://skillicons.dev/icons?i=${card.icons}&perline=3`} 
                      alt={card.title}
                      style={styles.iconsImg}
                    />
                  </div>
                </div>
                
                <div style={styles.bottomLine}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Fix de Scroll y Capas */
        #tecnologias {
          position: relative;
          z-index: 5;
          display: block;
          overflow: visible !important;
        }

        /* Efecto de Brillo/Cristal */
        .glass-reflection {
          position: absolute;
          top: -100%; left: -100%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          transform: rotate(-45deg);
          transition: 0.7s;
          pointer-events: none;
        }

        .nft-card-visual:hover .glass-reflection { 
          top: -50%; 
          left: -50%; 
        }

        /* Contenedor de iconos */
        .icon-platform {
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 0, 89, 0.03);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Estilo NFT Card */
        .nft-card-visual {
          transition: all 0.4s ease;
          background: linear-gradient(135deg, #121212 0%, #050505 100%);
          box-shadow: inset 0 0 20px rgba(255, 0, 89, 0.05);
        }

        .nft-card-visual:hover {
          border-color: #FF0059 !important;
          box-shadow: 0 0 40px rgba(255, 0, 89, 0.3), inset 0 0 20px rgba(255, 0, 89, 0.1) !important;
        }

        /* Paginación minimalista */
        .swiper-pagination-bullet { background: rgba(255, 255, 255, 0.2) !important; }
        .swiper-pagination-bullet-active { background: #FF0059 !important; }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#000',
    width: '100%',
    position: 'relative',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px'
  },
  header: { textAlign: 'center', marginBottom: '20px' },
  mainTitle: { fontSize: '3.5rem', fontWeight: '900', color: '#fff', letterSpacing: '1px' },
  fuchsiaText: { color: '#FF0059' },
  subtitle: { color: '#666', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem' },
  swiperContainer: { width: '100%', padding: '50px 0 80px 0' },
  slide: { width: '300px', display: 'flex', justifyContent: 'center' },
  card: {
    width: '300px',
    height: '420px',
    border: '3px solid rgba(255, 0, 89, 0.3)', // Borde de 3px como pediste
    borderRadius: '24px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  },
  cardHeader: { 
    marginBottom: '25px', 
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)', 
    paddingBottom: '15px' 
  },
  cardTitle: { fontSize: '1rem', fontWeight: '900', textAlign: 'center', color: '#fff' },
  cardBody: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  iconsImg: { maxWidth: '100%', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' },
  bottomLine: { 
    position: 'absolute', bottom: '0', left: '25%', width: '50%', height: '3px', 
    backgroundColor: '#FF0059', opacity: 0.4, borderRadius: '10px 10px 0 0'
  }
};