import { useParams, useNavigate } from 'react-router-dom'

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const projects = {
    1: {
      icon: '🔐',
      title: 'Bug Hunter Toolkit',
      subtitle: 'Recon • Enumeration • Testing Workflow',
      description:
        'A toolkit focused on reconnaissance, subdomain enumeration, and vulnerability testing workflow collection. This project reflects practical bug hunting methodology and target analysis thinking.',
      tech: ['Recon', 'Subdomains', 'Enumeration', 'Testing'],
      color: '#38bdf8',
      github: 'https://github.com/mdmazbahulislam/Bug-Hunter-Notes',
      demo: 'https://github.com/mdmazbahulislam/Bug-Hunter-Notes',
      learn: [
        'How to organize recon workflow',
        'How to structure enumeration process',
        'How to think in a bug hunter mindset',
      ],
    },
    2: {
      icon: '🐍',
      title: 'Python Security Scripts',
      subtitle: 'Automation • Parsing • Security Tasks',
      description:
        'A collection of Python-based scripts for automation, parsing, recon support, and practical security-related tasks. This project highlights scripting for real workflow speed and repeatability.',
      tech: ['Python', 'Automation', 'Parsing', 'Security'],
      color: '#22c55e',
      github: 'https://github.com/mdmazbahulislam/Python-Security-Scripts',
      demo: 'https://github.com/mdmazbahulislam/Python-Security-Scripts',
      learn: [
        'How to automate repetitive tasks',
        'How to use Python for security workflow',
        'How to improve speed with scripting',
      ],
    },
    3: {
      icon: '⚙️',
      title: 'DevOps CI/CD Project',
      subtitle: 'GitHub Actions • Docker • Deployment',
      description:
        'A project focused on CI/CD workflow automation with GitHub Actions and deployment practices. It represents modern DevOps learning and practical pipeline thinking.',
      tech: ['CI/CD', 'GitHub Actions', 'Docker', 'Deployment'],
      color: '#a78bfa',
      github: 'https://github.com/mdmazbahulislam/Devops-Mlops',
      demo: 'https://github.com/mdmazbahulislam/Devops-Mlops',
      learn: [
        'How CI/CD pipeline works',
        'How Docker helps deployment flow',
        'How automation improves delivery process',
      ],
    },
  }

  const project = projects[id]

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at top left, #0d1f45, #040b18 40%), linear-gradient(135deg, #040b18, #0b1730, #101935)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '700px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '28px',
            padding: '40px',
            backdropFilter: 'blur(14px)',
            textAlign: 'center',
          }}
        >
          <h1 style={{ marginBottom: '16px' }}>Project Not Found</h1>
          <p style={{ color: '#cbd5e1', marginBottom: '24px' }}>
            The requested project does not exist.
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '14px 24px',
              borderRadius: '14px',
              border: 'none',
              background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
              color: '#03111d',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, #0d1f45, #040b18 40%), linear-gradient(135deg, #040b18, #0b1730, #101935)',
        color: 'white',
        padding: '30px 20px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'fixed',
          width: '260px',
          height: '260px',
          background: project.color,
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.22,
          top: '40px',
          left: '-80px',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          background: '#2563eb',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.18,
          bottom: '20px',
          right: '-80px',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          <h2 style={{ fontSize: '28px' }}>Project Details</h2>

          <button
            onClick={() => navigate('/')}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.04)',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ← Back Home
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '28px',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '30px',
              padding: '34px',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ fontSize: '50px', marginBottom: '18px' }}>
              {project.icon}
            </div>

            <p
              style={{
                color: project.color,
                fontSize: '13px',
                letterSpacing: '2px',
                marginBottom: '10px',
              }}
            >
              FEATURED PROJECT
            </p>

            <h1
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                marginBottom: '14px',
              }}
            >
              {project.title}
            </h1>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: '500',
                color: '#dbeafe',
                marginBottom: '20px',
              }}
            >
              {project.subtitle}
            </h3>

            <p
              style={{
                color: '#cbd5e1',
                fontSize: '18px',
                lineHeight: '1.9',
                marginBottom: '28px',
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '14px 24px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '14px 24px',
                  borderRadius: '14px',
                  border: 'none',
                  background: `linear-gradient(135deg, ${project.color}, #ffffff22)`,
                  color: '#03111d',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                Open GitHub
              </a>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '24px',
                padding: '28px',
                backdropFilter: 'blur(14px)',
              }}
            >
              <h3 style={{ marginBottom: '18px', color: project.color }}>
                Tech / Focus
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#e2e8f0',
                      fontSize: '14px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '24px',
                padding: '28px',
                backdropFilter: 'blur(14px)',
              }}
            >
              <h3 style={{ marginBottom: '16px', color: project.color }}>
                What I Learned
              </h3>

              <ul style={{ color: '#cbd5e1', lineHeight: '1.9', paddingLeft: '20px' }}>
                {project.learn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails