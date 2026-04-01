import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import './Home.css'

const stats = [
  { value: '50+', label: 'Proyectos entregados' },
  { value: '30+', label: 'Clientes satisfechos' },
  { value: '5+', label: 'Años de experiencia' },
  { value: '99%', label: 'Satisfacción' },
]

const techs = ['React', 'Node.js', 'MongoDB', 'Python', 'AWS', 'Docker']

export default function Home() {
  return (
    <PageTransition>
      <div className="page">

        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-inner">
            <div className="hero-content">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge-dot" />
                Disponibles para nuevos proyectos
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                Software que
                <span className="gradient-text"> transforma</span>
                <br />tu negocio
              </motion.h1>

              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Construimos soluciones digitales modernas: webs, APIs y automatizaciones
                que escalan contigo. Código limpio, entrega rápida, resultados reales.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <NavLink to="/contacto" className="btn-primary">
                  Iniciar proyecto →
                </NavLink>
                <NavLink to="/proyectos" className="btn-secondary">
                  Ver portafolio
                </NavLink>
              </motion.div>

              <motion.div
                className="hero-techs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="techs-label">Stack:</span>
                {techs.map((t, i) => (
                  <motion.span
                    key={t}
                    className="tech-pill"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.75 + i * 0.07 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="hero-image-wrap"
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <img src="/images/mandiz1.jpeg" alt="Mandiz Dev" className="hero-img" />
              <div className="hero-img-glow" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map(({ value, label }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="stat-card">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section className="section">
          <div className="container">
            <FadeIn>
              <p className="tag" style={{ marginBottom: 16 }}>Lo que hacemos</p>
              <h2 className="section-title">Servicios diseñados<br />para crecer</h2>
              <p className="section-subtitle">
                Desde landing pages hasta sistemas empresariales complejos. Te acompañamos en cada etapa.
              </p>
            </FadeIn>
            <div className="grid-3">
              {[
                { icon: '🌐', title: 'Desarrollo Web', desc: 'Sitios y apps web rápidos, modernos y con diseño premium.' },
                { icon: '⚡', title: 'APIs REST', desc: 'Backends escalables que conectan tus productos digitales.' },
                { icon: '🤖', title: 'Automatización', desc: 'Procesos automáticos que ahorran tiempo y reducen errores.' },
              ].map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.15}>
                  <div className="card home-service-card">
                    <span className="service-icon">{s.icon}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <NavLink to="/servicios" className="btn-secondary">
                  Ver todos los servicios →
                </NavLink>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-banner">
          <div className="container">
            <FadeIn>
              <div className="cta-inner">
                <h2>¿Tienes un proyecto en mente?</h2>
                <p>Cuéntanos tu idea y te daremos una propuesta sin costo.</p>
                <NavLink to="/contacto" className="btn-primary">
                  Hablemos hoy →
                </NavLink>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
