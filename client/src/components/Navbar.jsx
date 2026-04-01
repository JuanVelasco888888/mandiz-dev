import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/ubicacion', label: 'Ubicación' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Mandiz
          <span className="logo-bracket"> /&gt;</span>
        </NavLink>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contacto" className="btn-primary nav-cta">
          Empecemos →
        </NavLink>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className="mobile-link" end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
