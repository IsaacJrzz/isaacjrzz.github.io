# ⚡ Isaac Alonso | Fullstack Software & Systems Architecture

<p align="center">
  <img src="./public/IAJlogo.png" alt="Logo" width="120px"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Swiper_JS-6332F6?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper" />
  <img src="https://img.shields.io/badge/Status-En_Desarrollo-FF0059?style=for-the-badge" alt="Status" />
</p>

---

## 💎 El Concepto: Starboy & Cyber-Dark
Este portfolio trasciende la función de currículum convencional para convertirse en un ejercicio de **ingeniería de frontend**. Bajo una estética inspirada en el movimiento *Cyber-Dark*, el proyecto se centra en la fluidez visual y la optimización de recursos.

### 🎨 Fundamentos del Diseño
* **Deep Contrast Layering:** Uso de `Pure Black` (#000000) y `Carbon Deep` (#232323) para generar una profundidad infinita y eliminar el cansancio visual.
* **High-Voltage Accents:** El color `Electric Fuchsia` (#FF0059) actúa como eje conductor de la interactividad (CTAs, bordes neón y estados hover).
* **NFT-Style Tech Collection:** Galería interactiva con efecto `Coverflow` 3D que presenta el stack tecnológico como una colección de activos digitales premium.

---

## 🚀 Stack Tecnológico & Performance
Diseñado para la velocidad. La arquitectura evita frameworks de CSS pesados para mantener un *bundle size* mínimo.

* **React 18:** Lógica basada en componentes funcionales y Hooks avanzados (`useRef`, `useMemo`) para gestión de animaciones.
* **Vite:** Motor de desarrollo de última generación para un Hot Module Replacement (HMR) instantáneo.
* **Canvas API Engine:** Motor de partículas personalizado programado en JavaScript puro. Ejecuta animaciones a **60fps** constantes mediante `requestAnimationFrame`.
* **Modern CSS Architecture:** Implementación de **Variables CSS (Tokens)**, Flexbox y Grid dinámico con efectos de `backdrop-filter: blur`.

---

## 🛠️ Características de Ingeniería

### 🌌 Constelación Reactiva (Hero Section)
Sistema de partículas dinámico en el Hero:
* Generación de **65 nodos** con vectores de movimiento independientes.
* Cálculo de **distancias euclidianas** en tiempo real para el trazado de conexiones entre partículas.
* Optimización de memoria mediante la limpieza de frames para evitar *memory leaks*.

### 🧊 Tech Showcase (Swiper 3D)
La sección de tecnologías utiliza un efecto de **Glassmorphism** avanzado:
* **Hover Lumínico:** Las tarjetas no se desplazan al interactuar; se iluminan mediante gradientes internos y sombras de neón de **3px** para mantener la estabilidad del layout.
* **Reflejos Dinámicos:** Capa de cristal que reacciona al movimiento del ratón para simular profundidad física.
* **Cero Latencia:** Optimización de carga de iconos mediante `skillicons.dev`.

### ⚓ Navegación Inteligente
* **Smart-Anchor System:** Navegación fluida (Smooth Scroll) integrada en el Navbar.
* **Responsive Fluidity:** Uso de funciones `clamp()` en tipografía para una adaptabilidad perfecta de móvil a ultra-wide.

---

## 📁 Arquitectura del Proyecto
```bash
src/
 ├── components/       # UI Components (Navbar, Hero, Skills, Projects)
 ├── assets/           # Media & Static Resources
 ├── data/             # JSON-based content for easy scaling
 ├── App.jsx           # Main orchestrator & Layout logic
 └── index.css         # Design System: Tokens, Keyframes & Global Styles