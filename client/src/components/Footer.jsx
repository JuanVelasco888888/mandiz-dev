import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800 }}>
              <span style={{ color: 'var(--accent)' }}>&lt;</span>
              Mandiz
              <span style={{ color: 'var(--accent)' }}> /&gt;</span>
            </span>
            <p>Transformamos ideas en software de alto impacto. Bucaramanga, Colombia.</p>
          </div>
          <div className="footer-col">
            <h4>Páginas</h4>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="mailto:contacto@mandizdev.com">mandizcontacto@gmail.com</a>
            <a href="tel:+573001234567">+57 300 8848006</a>
            <NavLink to="/ubicacion">Ver ubicación</NavLink>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mandiz Dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
