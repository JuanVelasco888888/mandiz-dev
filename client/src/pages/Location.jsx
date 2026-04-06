import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import './Location.css'

const info = [
  { icon: '📍', label: 'Dirección', value: 'Bucaramanga, Santander, Colombia' },
  { icon: '📞', label: 'Teléfono', value: '+57 300 8848006' },
  { icon: '✉️', label: 'Email', value: 'mandizcontacto@gmail.com' },
  { icon: '🕐', label: 'Horario', value: 'Lun – Vie: 8am – 6pm' },
]

export default function Location() {
  return (
    <PageTransition>
      <div className="page section">
        <div className="container">
          <FadeIn>
            <p className="tag" style={{ marginBottom: 16 }}>Encuéntranos</p>
            <h1 className="section-title">Ubicación & Servicio</h1>
            <p className="section-subtitle">
              Basados en Bucaramanga, trabajamos con clientes en toda Colombia y el exterior.
            </p>
          </FadeIn>

          <div className="location-layout">
            {/* Info cards */}
            <div className="location-info">
              {info.map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.1}>
                  <div className="info-card">
                    <span className="info-icon">{item.icon}</span>
                    <div>
                      <span className="info-label">{item.label}</span>
                      <p className="info-value">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.4}>
                <div className="coverage-box">
                  <h3>Cobertura de servicio</h3>
                  <p>Atendemos proyectos de forma <strong>100% remota</strong>. No importa dónde estés — trabajamos contigo.</p>
                  <div className="coverage-tags">
                    {['🇨🇴 Colombia', '🇺🇸 USA', '🇪🇸 España', '🌎 Latinoamérica'].map(t => (
                      <span key={t} className="coverage-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Image */}
            <FadeIn delay={0.2} direction="left">
              <div className="location-image-wrap">
                <img src="/images/mandiz2.jpeg" alt="Mandiz Dev oficina" className="location-img" />
                <div className="location-overlay">
                  <div className="location-badge">
                    <span>📍</span>
                    <div>
                      <strong>Bucaramanga</strong>
                      <p>Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
