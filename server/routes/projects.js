const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'E-commerce Completo',
    description: 'Plataforma de ventas online con carrito, pagos y panel administrativo.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    status: 'Completado'
  },
  {
    id: 2,
    title: 'API de Gestión Empresarial',
    description: 'Sistema de gestión interna con roles, permisos y reportes automáticos.',
    tech: ['Express', 'PostgreSQL', 'JWT', 'Swagger'],
    category: 'API',
    status: 'Completado'
  },
  {
    id: 3,
    title: 'Bot de WhatsApp',
    description: 'Automatización de atención al cliente con integración a CRM.',
    tech: ['Node.js', 'WhatsApp API', 'MongoDB', 'OpenAI'],
    category: 'Automatización',
    status: 'Completado'
  },
  {
    id: 4,
    title: 'Dashboard Analítico',
    description: 'Panel de métricas en tiempo real con gráficos interactivos.',
    tech: ['React', 'Chart.js', 'WebSockets', 'Express'],
    category: 'Web App',
    status: 'En progreso'
  }
];

router.get('/', (req, res) => {
  res.json({ success: true, data: projects });
});

module.exports = router;
