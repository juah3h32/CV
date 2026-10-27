import { siDavinciresolve, siFigma, siClaude, siGooglegemini, siN8n } from 'simple-icons';

// Single source for the portfolio page and the printable CV (/cv),
// so both always show the same experience, skills and tools.

export const person = {
  name: 'Juan Pablo Corona Corona',
  shortName: 'Juan Pablo Corona',
  title: 'Videógrafo · Fotógrafo · Creador de contenido digital',
  degree: 'Ing. Entornos Virtuales y Negocios Digitales',
  email: 'Coronapablo99@gmail.com',
  phone: '443 484 5466',
  phoneHref: 'tel:4434845466',
  location: 'Morelia, Michoacán, México',
  website: 'juanpacv.com',
  summary:
    'Creador audiovisual con más de 5 años de experiencia en videos corporativos, de producto y fotografía: grabación con cámara profesional, drones e iluminación, edición, color y motion graphics. Complemento cada proyecto con diseño, desarrollo web y marketing digital con IA, para entregar piezas terminadas listas para redes, campañas o el sitio de la marca.',
};

// Real per-app brand color pairs (bg/fg) so badges read as the actual apps
export const toolBars = [
  { name: 'Adobe Premiere Pro', pct: 75, tag: 'Pr', bg: '#00005B', fg: '#9999FF' },
  { name: 'Adobe After Effects', pct: 85, tag: 'Ae', bg: '#00005B', fg: '#9999FF' },
  { name: 'DaVinci Resolve', pct: 90, tag: 'Dv', bg: '#1c1c1c', fg: '#ffffff', path: siDavinciresolve.path },
  { name: 'Adobe Photoshop', pct: 95, tag: 'Ps', bg: '#001E36', fg: '#31A8FF' },
  { name: 'Lightroom', pct: 85, tag: 'Lr', bg: '#001E36', fg: '#31A8FF' },
  { name: 'Adobe Illustrator', pct: 90, tag: 'Ai', bg: '#330000', fg: '#FF9A00' },
  { name: 'Figma', pct: 90, tag: 'Fi', bg: '#1e1e1e', fg: '#ffffff', path: siFigma.path },
];

// Competencies, not tools — same bar treatment as "Herramientas" below,
// so it covers the full range: web dev plus photo/video production.
export const buildSkills = [
  { name: 'Edición de Video', pct: 90, tag: 'Ed', icon: 'film', bg: '#eceffe', fg: '#2445ff' },
  { name: 'Fotografía de Producto', pct: 90, tag: 'Fo', icon: 'camera', bg: '#eceffe', fg: '#2445ff' },
  { name: 'Producción Audiovisual', pct: 85, tag: 'Pa', icon: 'clapper', bg: '#eceffe', fg: '#2445ff' },
  { name: 'Motion Graphics', pct: 85, tag: 'Fx', icon: 'sparkle', bg: '#eceffe', fg: '#2445ff' },
  { name: 'Mockups de Producto', pct: 85, tag: 'Mk', icon: 'image', bg: '#eceffe', fg: '#2445ff' },
  { name: 'UI/UX Design', pct: 90, tag: 'UX', icon: 'vector', bg: '#eceffe', fg: '#2445ff' },
  { name: 'Desarrollo Web', pct: 95, tag: 'Web', icon: 'brackets', bg: '#eceffe', fg: '#2445ff' },
  { name: 'SEO Técnico', pct: 80, tag: 'SEO', icon: 'search', bg: '#eceffe', fg: '#2445ff' },
];

export const aiRings = [
  { name: 'ChatGPT', pct: 95, tag: 'GPT', bg: '#10A37F', fg: '#fff' },
  { name: 'Claude', pct: 90, tag: 'Cl', bg: '#D97757', fg: '#fff', path: siClaude.path },
  { name: 'Gemini', pct: 85, tag: 'Ge', bg: '#ffffff', fg: '#4285F4', path: siGooglegemini.path },
  { name: 'Midjourney', pct: 80, tag: 'MJ', bg: '#0d0d0d', fg: '#fff' },
  { name: 'Automatización n8n', pct: 80, tag: 'n8n', bg: '#EA4B71', fg: '#fff', path: siN8n.path },
];

export const experience = [
  {
    company: 'Grupo Ortiz',
    initials: 'GO',
    role: 'Marketing Digital & Desarrollo Web',
    period: '2025 — Presente',
    current: true,
    points: [
      'Desarrollo de páginas web corporativas.',
      'Creación de animaciones y efectos interactivos.',
      'Diseño UI/UX y optimización para dispositivos móviles.',
      'Producción audiovisual y fotografía de productos.',
      'Desarrollo de app para e-commerce con roles de usuario y módulo completo de repartidor.',
      'Automatización de reportes y métricas con IA.',
    ],
  },
  {
    company: 'SurCasas',
    initials: 'SC',
    role: 'Desarrollador Web & Marketing Digital',
    period: '2024 — 2025',
    points: [
      'Desarrollo y mantenimiento del sitio web y landing pages.',
      'Optimización SEO y mejora de rendimiento.',
      'Diseño de interfaces modernas y experiencia de usuario.',
      'Implementación de animaciones y efectos Parallax.',
      'Gestión de campañas digitales y redes sociales.',
    ],
  },
  {
    company: 'Inpower Machine',
    initials: 'IM',
    role: 'Marketing Digital, Video & Fotografía',
    period: '2023 — 2024',
    points: [
      'Producción de contenido audiovisual para campañas.',
      'Edición de video y fotografía de productos.',
      'Manejo de cámaras, iluminación y drones.',
    ],
  },
  {
    company: 'Caja Morelia Valladolid',
    initials: 'CM',
    role: 'Diseño de interfaces FRONT-END',
    period: '2022',
    points: [
      'Desarrollo de interfaces web.',
      'Mejora de experiencia de usuario y diseño responsivo.',
    ],
  },
  {
    company: 'Salinas Graphic',
    initials: 'SG',
    role: 'Diseño Gráfico en Impresión Física',
    period: '2019 — 2020',
    points: [
      'Diseño de materiales impresos y branding.',
      'Preparación de archivos para impresión.',
    ],
  },
];

export const gear = [
  { title: 'Cámaras', icon: 'camera', items: ['Sony FX3', 'Sony A7III', 'Sony A7CR', 'Sony ZV-10', 'DJI Osmo Action'] },
  { title: 'Lentes', icon: 'aperture', items: ['24–70mm f/2.8', '50mm f/1.8', 'Sigma 18–35mm f/1.8'] },
  { title: 'Drones', icon: 'drone', items: ['DJI Mavic Air 2', 'DJI Mini 2'] },
  { title: 'Iluminación', icon: 'light', items: ['Godox SL60W', 'Softbox', 'Reflectores LED'] },
  { title: 'Audio', icon: 'audio', items: ['Rode VideoMic Pro', 'Zoom H1n'] },
  { title: 'Edición', icon: 'edit', items: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'] },
];

// Drop real screenshots at these paths (public/images/projects/) and the
// card automatically swaps the gradient placeholder for the real preview.
export const projects = [
  {
    name: 'grupo-ortiz.com',
    desc: 'Sitio corporativo con diseño moderno, animaciones Parallax y enfoque en rendimiento.',
    tags: ['HTML', 'CSS', 'JS', 'GSAP'],
    url: 'https://grupo-ortiz.com',
    image: '/images/projects/grupo-ortiz.webp',
    category: 'web',
  },
  {
    name: 'naturizable.com',
    desc: 'Sitio de productos naturales con diseño UI/UX, animaciones suaves y optimización de SEO.',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://naturizable.com',
    image: '/images/projects/naturizable.webp',
    category: 'web',
  },
  {
    name: 'hotelpuntagaleria.mx',
    desc: 'Sitio web para hotel con galería visual, información de habitaciones y experiencia de marca inmersiva.',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://hotelpuntagaleria.mx/',
    image: '/images/projects/hotel-punta-galeria.webp',
    category: 'web',
  },
];

export const certifications = [
  'Adobe Photoshop — Certificado',
  'Marketing Digital — Curso Digital',
  'Adobe Lightroom — Certificado',
  'Fundamentos de IA Generativa',
  'Prompt Engineering con ChatGPT',
];

export const languages = [
  { name: 'Español', pct: 100 },
];

export const photoItems = [
  { name: 'Papas fritas', desc: 'Fotografía de producto — sesión de comida.', image: '/images/photography/papas-ketchup.jpg' },
  { name: 'Empaque Naturizable', desc: 'Fotografía de producto — packaging biodegradable.', image: '/images/photography/empaque-naturizable.jpg' },
  { name: 'Papas y tiras de pollo', desc: 'Fotografía de producto — sesión de comida.', image: '/images/photography/papas-alitas.jpg' },
  { name: 'Charolas Naturizable', desc: 'Fotografía de producto — packaging biodegradable.', image: '/images/photography/charolas-stack.jpg' },
  { name: 'Charola biodegradable', desc: 'Fotografía de producto — packaging Naturizable.', image: '/images/photography/charola-plana.jpg' },
  { name: 'Charola Naturizable', desc: 'Fotografía de producto — en uso.', image: '/images/photography/charola-mano.jpg' },
];
