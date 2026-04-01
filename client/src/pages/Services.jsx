import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { getServices } from '../api'
import './Services.css'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServices()
      .then(r => setServices(r.data.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageTransition>
      <div className="page section">
        <div className="container">
          <FadeIn>
            <p className="tag" style={{ marginBottom: 16 }}>Qué ofrecemos</p>
            <h1 className="section-title">Nuestros Servicios</h1>
            <p className="section-subtitle">
              Soluciones tecnológicas pensadas para impulsar tu negocio al siguiente nivel.
            </p>
          </FadeIn>

          {loading ? (
            <div className="loading">
              <div>
                <div className="spinner" />
                <p>Cargando servicios...</p>
              </div>
            </div>
          ) : (
            <div className="services-grid">
              {services.map((service, i) => (
                <FadeIn key={service.id} delay={i * 0.15}>
                  <motion.div
                    className="service-card"
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="service-icon-wrap">
                      <span className="service-icon-big">{service.icon}</span>
                    </div>
                    <h2>{service.title}</h2>
                    <p className="service-desc">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map(f => (
                        <li key={f}>
                          <span className="check">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Process section */}
          <FadeIn>
            <div className="process-section">
              <h2 className="section-title" style={{ textAlign: 'center' }}>Nuestro Proceso</h2>
              <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
                De la idea al producto en pasos claros y predecibles.
              </p>
              <div className="process-steps">
                {[
                  { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu negocio, objetivos y usuarios.' },
                  { num: '02', title: 'Diseño', desc: 'Prototipos y arquitectura antes de escribir código.' },
                  { num: '03', title: 'Desarrollo', desc: 'Sprints ágiles con demos semanales.' },
                  { num: '04', title: 'Entrega', desc: 'Deploy, capacitación y soporte post-lanzamiento.' },
                ].map((step, i) => (
                  <FadeIn key={step.num} delay={i * 0.1}>
                    <div className="process-step">
                      <span className="step-num">{step.num}</span>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
