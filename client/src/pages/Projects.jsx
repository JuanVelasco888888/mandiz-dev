import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { getProjects } from '../api'
import './Projects.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('Todos')

  useEffect(() => {
    getProjects()
      .then(r => setProjects(r.data.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const categories = ['Todos', ...new Set(projects.map(p => p.category))]
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter)

  return (
    <PageTransition>
      <div className="page section">
        <div className="container">
          <FadeIn>
            <p className="tag" style={{ marginBottom: 16 }}>Portafolio</p>
            <h1 className="section-title">Proyectos Destacados</h1>
            <p className="section-subtitle">
              Soluciones reales que hemos construido para clientes reales.
            </p>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.1}>
            <div className="filter-bar">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {loading ? (
            <div className="loading">
              <div>
                <div className="spinner" />
                <p>Cargando proyectos...</p>
              </div>
            </div>
          ) : (
            <motion.div
              className="projects-grid"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filtered.map(project => (
                <motion.div key={project.id} variants={item} className="project-card">
                  <div className="project-header">
                    <span className="tag">{project.category}</span>
                    <span className={`status-badge ${project.status === 'Completado' ? 'done' : 'progress'}`}>
                      {project.status}
                    </span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-techs">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
