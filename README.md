# ⚡ Isaac Alonso | Fullstack Software & Systems Architecture

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Canvas API](https://img.shields.io/badge/Canvas_API-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-En_Desarrollo-FF0059?style=for-the-badge)

Portfolio personal de alto impacto visual y rendimiento optimizado. Este proyecto no es solo una carta de presentación, sino un ejercicio de **ingeniería de frontend** y diseño de interfaces modernas bajo una estética **Cyber-Dark / Starboy**.

---

## 🎨 Sistema de Diseño: Starboy & Cyber-Dark Concept
El layout se ha estructurado utilizando una jerarquía visual de alto contraste para dirigir el flujo de atención del usuario (User Flow):

* **Core Layers:** Implementación de `Pure Black` (#000000) y `Carbon Deep` (#232323) para generar profundidad y reducir la fatiga visual.
* **High-Voltage Accents:** Uso de `Electric Fuchsia` (#FF0059) para llamadas a la acción (CTAs) y `Cherry Glow` (#A9003B) para estados interactivos.
* **Interactive Visuals:** Columna derecha del Hero con un gradiente dinámico y una **constelación de nodos reactiva** mediante Canvas API.

## 🚀 Stack Tecnológico & Performance
Para garantizar una experiencia fluida y un despliegue eficiente, se han seleccionado las siguientes herramientas:

* **React 18:** Arquitectura basada en componentes funcionales y Hooks (`useState`, `useEffect`, `useRef`).
* **Vite:** Tooling de última generación que permite un ciclo de desarrollo ultrarrápido y un empaquetado de producción optimizado.
* **Canvas API Engine:** Sistema de partículas personalizado programado en JavaScript puro para animaciones de 60fps sin sobrecargar el DOM.
* **Vanilla CSS Architecture:** Uso exhaustivo de **Variables CSS (Custom Properties)** y **Flexbox/Grid**, evitando frameworks pesados para maximizar el control sobre el *bundle size*.

## 🛠️ Características Técnicas Destacadas

### 🛰️ Constelación Técnica (Hero Animation)
Implementación de un motor de partículas en la columna visual del Hero:
* Generación dinámica de **65 nodos** con vectores de movimiento aleatorios.
* Cálculo de distancias euclidianas en tiempo real para generar conexiones entre partículas cercanas.
* Optimización mediante `requestAnimationFrame` para garantizar fluidez y bajo consumo de CPU.

### ⚓ Sistema de Navegación Smart-Anchor
* **Smooth Scroll:** Navegación fluida entre secciones (`Inicio`, `Proyectos`, `Contacto`) mediante comportamientos nativos de CSS y IDs estratégicos.
* **Sticky Navbar:** Barra superior persistente con efectos de **Glassmorphism** (`backdrop-filter: blur`) y bordes de neón de 2px.

### 📱 Responsive Design & UX
* **Clamp Typography:** Escalabilidad de fuentes fluida para evitar saltos bruscos entre resoluciones.
* **Mobile Optimized:** Layout adaptativo que reorganiza las columnas del Hero y el Footer para una legibilidad perfecta en smartphones.

## 📁 Estructura del Proyecto
```bash
src/
 ├── components/       # Componentes de UI (Navbar, Hero, ProjectCard, Footer)
 ├── assets/           # Recursos estáticos locales
 ├── data/             # Archivos de configuración y datos de proyectos
 ├── App.jsx           # Orquestador principal de la aplicación
 └── index.css         # Definición del sistema de diseño (Tokens y variables)
public/
 └── IAJlogo.png       # Identidad visual (Favicon y Branding)