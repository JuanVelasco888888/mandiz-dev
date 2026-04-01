const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Nombre, email y mensaje son requeridos.' });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({ success: true, message: '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
});

// GET /api/contact (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener contactos.' });
  }
});

module.exports = router;
