const express = require('express');
const router = express.Router();

const services = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos, rápidos y responsivos con las últimas tecnologías del mercado.',
    icon: '🌐',
    features: ['React / Next.js', 'Node.js / Express', 'Diseño UX/UI', 'SEO Optimizado']
  },
  {
    id: 2,
    title: 'Desarrollo de APIs',
    description: 'Construimos APIs RESTful y GraphQL robustas, escalables y bien documentadas.',
    icon: '⚡',
    features: ['REST & GraphQL', 'Autenticación JWT', 'Documentación Swagger', 'Integración terceros']
  },
  {
    id: 3,
    title: 'Automatización',
    description: 'Automatizamos procesos repetitivos para que tu equipo se enfoque en lo que importa.',
    icon: '🤖',
    features: ['Scripts personalizados', 'Bots e integración', 'Workflows automáticos', 'Reportes en tiempo real']
  }
];

router.get('/', (req, res) => {
  res.json({ success: true, data: services });
});

module.exports = router;
