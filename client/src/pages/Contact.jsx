import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { postContact } from '../api'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await postContact(form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.response?.data?.message || 'Error al enviar. Intenta de nuevo.')
    }
  }

  return (
    <PageTransition>
      <div className="page section">
        <div className="container">
          <FadeIn>
            <p className="tag" style={{ marginBottom: 16 }}>Escríbenos</p>
            <h1 className="section-title">Contacto</h1>
            <p className="section-subtitle">
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas.
            </p>
          </FadeIn>

          <div className="contact-layout">
            {/* Left: info */}
            <FadeIn delay={0.1}>
              <div className="contact-info-panel">
                <div className="contact-img-wrap">
                  <img src="/images/mandiz2.jpeg" alt="Equipo Mandiz" />
                  <div className="contact-img-overlay" />
                </div>
                <div className="contact-quick">
                  <div className="quick-item">
                    <span>📧</span>
                    <div>
                      <strong>Email</strong>
                      <p>mandizcontacto@gmail.com</p>
                    </div>
                  </div>
                  <div className="quick-item">
                    <span>💬</span>
                    <div>
                      <strong>WhatsApp</strong>
                      <p>+57 300 8848006</p>
                    </div>
                  </div>
                  <div className="quick-item">
                    <span>⚡</span>
                    <div>
                      <strong>Respuesta</strong>
                      <p>Menos de 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.2}>
              <div className="contact-form-wrap">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      className="success-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="success-icon">✅</div>
                      <h2>¡Mensaje enviado!</h2>
                      <p>Gracias por contactarnos. Te responderemos muy pronto.</p>
                      <button className="btn-primary" onClick={() => setStatus(null)}>
                        Enviar otro mensaje
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      className="contact-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2>Envíanos un mensaje</h2>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">Nombre *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Tu nombre"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Teléfono (opcional)</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+57 300 000 0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Mensaje *</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Cuéntanos sobre tu proyecto..."
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {status === 'error' && (
                        <motion.div
                          className="form-error"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          ⚠️ {errorMsg}
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        className="btn-primary submit-btn"
                        disabled={status === 'loading'}
                        whileTap={{ scale: 0.97 }}
                      >
                        {status === 'loading' ? (
                          <span className="btn-loading">
                            <span className="btn-spinner" /> Enviando...
                          </span>
                        ) : 'Enviar mensaje →'}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
