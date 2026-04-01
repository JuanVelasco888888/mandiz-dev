import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import './About.css'

const values = [
  { icon: '🎯', title: 'Enfoque en resultados', desc: 'Cada línea de código tiene un propósito de negocio.' },
  { icon: '🤝', title: 'Comunicación clara', desc: 'Sin tecnicismos innecesarios. Siempre transparentes.' },
  { icon: '⚡', title: 'Velocidad sin sacrificar calidad', desc: 'Entregamos rápido porque trabajamos con procesos maduros.' },
  { icon: '🔒', title: 'Código seguro y escalable', desc: 'Construimos pensando en el futuro de tu producto.' },
]

const team = [
  { name: 'Juan Mandiz', role: 'CEO & Fullstack Dev', emoji: '👨‍💻' },
  { name: 'Ana Torres', role: 'UI/UX Designer', emoji: '🎨' },
  { name: 'Carlos Ríos', role: 'Backend Engineer', emoji: '⚙️' },
]

export default function About() {
  return (
    <PageTransition>
      <div className="page section">
        <div className="container">
          <FadeIn>
            <p className="tag" style={{ marginBottom: 16 }}>Quiénes somos</p>
            <h1 className="section-title">Sobre Nosotros</h1>
            <p className="section-subtitle">
              Un equipo apasionado por la tecnología, con sede en Bucaramanga, construyendo software para toda Colombia y el mundo.
            </p>
          </FadeIn>

          {/* Story */}
          <FadeIn delay={0.1}>
            <div className="about-story">
              <div className="story-content">
                <h2>Nuestra historia</h2>
                <p>
                  Mandiz Dev nació en 2019 con una misión simple: hacer que la tecnología de calidad
                  esté al alcance de todo tipo de negocio. Empezamos como freelancers y hoy somos
                  un equipo completo con más de 50 proyectos entregados.
                </p>
                <p>
                  Nos especializamos en construir productos digitales que resuelven problemas reales:
                  desde el e-commerce de una PYME hasta la API de una startup de alto crecimiento.
                </p>
                <p>
                  Cada cliente importa. Cada proyecto es una nueva oportunidad de superar expectativas.
                </p>
              </div>
              <div className="story-numbers">
                <div className="story-num">
                  <span>2019</span>
                  <p>Año de fundación</p>
                </div>
                <div className="story-num">
                  <span>50+</span>
                  <p>Proyectos</p>
                </div>
                <div className="story-num">
                  <span>10+</span>
                  <p>Industrias</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Values */}
          <div style={{ margin: '80px 0' }}>
            <FadeIn>
              <h2 className="section-title">Nuestros valores</h2>
            </FadeIn>
            <div className="grid-2">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.12}>
                  <div className="card value-card">
                    <span className="value-icon">{v.icon}</span>
                    <div>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Team */}
          <FadeIn>
            <h2 className="section-title">El equipo</h2>
            <p className="section-subtitle">Las personas detrás del código.</p>
          </FadeIn>
          <div className="team-grid">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="team-card">
                  <div className="team-avatar">{member.emoji}</div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
