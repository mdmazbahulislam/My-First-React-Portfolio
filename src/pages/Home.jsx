import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('loggedInUser'))
  const canvasRef = useRef(null)
  const audioRef = useRef(null)

  const [loading, setLoading] = useState(true)
  const [terminalText, setTerminalText] = useState([])

  const terminalLines = [
    'Initializing system...',
    'Connecting to secure server...',
    'Bypassing firewall...',
    'Access granted ✔',
  ]

  const roles = [
    'Ethical Hacker',
    'Bug Hunter',
    'DevOps Learner',
    'Cyber Security Enthusiast',
  ]

  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const [theme, setTheme] = useState('dark')
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [hackCount, setHackCount] = useState(0)
  const [pythonCount, setPythonCount] = useState(0)
  const [devopsCount, setDevopsCount] = useState(0)

  const projects = [
    {
      id: 1,
      icon: '🔐',
      title: 'Bug Hunter Toolkit',
      description:
        'Recon, subdomain enumeration, and vulnerability testing workflow collection.',
      category: 'security',
      status: 'Active',
      preview: 'Recon / Enum / Vuln Flow',
      github: 'https://github.com/mdmazbahulislam/Bug-Hunter-Notes',
      demo: 'https://github.com/mdmazbahulislam/Bug-Hunter-Notes',
    },
    {
      id: 2,
      icon: '🐍',
      title: 'Python Security Scripts',
      description:
        'Python-based scripts for automation, recon, parsing and practical security tasks.',
      category: 'python',
      status: 'Updated',
      preview: 'Automation / Parsing / Scripts',
      github: 'https://github.com/mdmazbahulislam/Python-Security-Scripts',
      demo: 'https://github.com/mdmazbahulislam/Python-Security-Scripts',
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'DevOps CI/CD Project',
      description:
        'Automated deployment workflow using GitHub Actions and Docker.',
      category: 'devops',
      status: 'Learning',
      preview: 'Actions / Docker / Deploy',
      github: 'https://github.com/mdmazbahulislam/Devops-Mlops',
      demo: 'https://github.com/mdmazbahulislam/Devops-Mlops',
    },
  ]

  const faqs = [
    {
      question: 'What is my main focus area?',
      answer:
        'My main focus is web hacking, bug bounty learning, and practical security testing workflows.',
    },
    {
      question: 'What technologies am I currently learning?',
      answer:
        'I am currently learning Python automation, DevOps, CI/CD workflows, and MLOps fundamentals.',
    },
    {
      question: 'Do I build real projects?',
      answer:
        'Yes. I try to convert what I learn into practical projects, scripts, and portfolio work.',
    },
    {
      question: 'How can someone contact me?',
      answer:
        'The easiest way is through the contact form below or directly by email.',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark')
    localStorage.setItem('portfolioTheme', theme)
  }, [theme])

  useEffect(() => {
    const audio = new Audio('/typing.mp3')
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    let i = 0

    audio.play().catch(() => {})

    const interval = setInterval(() => {
      setTerminalText((prev) => {
        if (i < terminalLines.length) {
          return [...prev, terminalLines[i]]
        }
        return prev
      })

      i++

      if (i >= terminalLines.length) {
        clearInterval(interval)

        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
        }

        setTimeout(() => setLoading(false), 1000)
      }
    }, 650)

    return () => {
      clearInterval(interval)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  useEffect(() => {
    const currentWord = roles[roleIndex]
    const speed = isDeleting ? 55 : 110

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 900)
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, roles])

  useEffect(() => {
    if (loading) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const letters = '01'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    function draw() {
      ctx.fillStyle =
        theme === 'light' ? 'rgba(255,255,255,0.06)' : 'rgba(4, 11, 24, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = theme === 'light' ? '#0ea5e9' : '#00ff00'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const value = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(value, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme, loading])

  useEffect(() => {
    let hack = 0
    let python = 0
    let devops = 0

    const interval = setInterval(() => {
      if (hack < 85) hack += 1
      if (python < 80) python += 1
      if (devops < 60) devops += 1

      setHackCount(hack)
      setPythonCount(python)
      setDevopsCount(devops)

      if (hack >= 85 && python >= 80 && devops >= 60) {
        clearInterval(interval)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (loading) return

    const elements = document.querySelectorAll('.fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [loading])

  // 🔥 SCROLL PROGRESS BAR
  useEffect(() => {
    if (loading) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      const bar = document.querySelector('.scroll-progress')
      if (bar) {
        bar.style.width = `${progress}%`
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    navigate('/login')
    window.location.reload()
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Please fill up all fields.')
      return
    }

    alert('Message submitted successfully!')
    setContactForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleEnableSound = () => {
    if (loading && audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
  }

  if (loading) {
    return (
      <div
        onClick={handleEnableSound}
        style={{
          background: '#000',
          color: '#22c55e',
          minHeight: '100vh',
          padding: '40px',
          fontFamily: 'monospace',
          cursor: 'pointer',
        }}
      >
        <p style={{ marginBottom: '18px', color: '#6ee7b7' }}>
          Click anywhere if sound does not start...
        </p>

        {terminalText.map((line, index) => (
          <p key={index} style={{ marginBottom: '10px' }}>
            {line}
          </p>
        ))}

        <span className="typing-cursor">|</span>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="scroll-progress"></div>
      <canvas ref={canvasRef} className="matrix-bg"></canvas>

      <nav className="navbar fade-in">
        <div className="brand">
          <span className="brand-dot"></span>
          <h2>Mazbah</h2>
        </div>

        <div className="nav-buttons">
          <button
            className="btn btn-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          <span className="username">👋 {user?.username}</span>

          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <section className="hero-section fade-in">
        <div className="hero-left">
          <div className="mini-badge">🚀 BUILDING • LEARNING • GROWING</div>

          <h1 className="hero-title">
            Hi, I&apos;m <span>Md. Mazbahul Islam</span>
          </h1>

          <h3 className="hero-subtitle typing-line">
            {text}
            <span className="typing-cursor">|</span>
          </h3>

          <p className="hero-text">
            I explore security, build practical projects, and keep learning
            modern technologies like Python, DevOps, automation, and secure
            engineering.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-fill"
              onClick={() => {
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              View Projects
            </button>

            <button
              className="btn btn-outline"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Contact Me
            </button>

            <a href="/cv.pdf" download className="btn btn-cv">
              Download CV
            </a>
          </div>

          <div className="stats-row">
            <div className="stat-card fade-in">
              <h2>{hackCount}%</h2>
              <p>Web Hacking</p>
            </div>

            <div className="stat-card fade-in">
              <h2>{pythonCount}%</h2>
              <p>Python Automation</p>
            </div>

            <div className="stat-card fade-in">
              <h2>{devopsCount}%</h2>
              <p>DevOps Journey</p>
            </div>
          </div>
        </div>

        <div className="hero-right fade-in">
          <div className="profile-card">
            <div className="profile-top">
              <div className="avatar">M</div>
              <div>
                <h3>About Me</h3>
                <p className="small-text">Hunter • Builder • Learner</p>
              </div>
            </div>

            <div className="profile-list">
              <div className="profile-item">🔐 Cyber Security Enthusiast</div>
              <div className="profile-item">🐞 Bug Bounty Hunter</div>
              <div className="profile-item">⚙️ Learning DevOps & MLOps</div>
              <div className="profile-item">💻 Python & Security Tools</div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievement-section fade-in">
        <div className="section-heading">
          <p className="section-tag">HIGHLIGHTS</p>
          <h2>Achievement & Focus</h2>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card fade-in">
            <div className="achievement-icon">🎯</div>
            <h3>Focused Learning</h3>
            <p>
              Building strong fundamentals in cybersecurity, automation, and
              DevOps with practical hands-on learning.
            </p>
          </div>

          <div className="achievement-card fade-in">
            <div className="achievement-icon">🚀</div>
            <h3>Project Driven</h3>
            <p>
              Turning learning into real portfolio projects instead of keeping
              everything only in theory.
            </p>
          </div>

          <div className="achievement-card fade-in">
            <div className="achievement-icon">🛡️</div>
            <h3>Security Mindset</h3>
            <p>
              Approaching systems with an attacker mindset to understand risk,
              behavior, and defense better.
            </p>
          </div>

          <div className="achievement-card fade-in">
            <div className="achievement-icon">⚡</div>
            <h3>Automation First</h3>
            <p>
              Using scripting and tools to reduce repetitive work and improve
              workflow speed.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section fade-in">
        <div className="section-heading">
          <p className="section-tag">SKILLS</p>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-progress-grid">
          <div className="progress-card fade-in">
            <div className="progress-top">
              <h3>Web Hacking</h3>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill fill-85"></div>
            </div>
          </div>

          <div className="progress-card fade-in">
            <div className="progress-top">
              <h3>Python</h3>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill fill-80"></div>
            </div>
          </div>

          <div className="progress-card fade-in">
            <div className="progress-top">
              <h3>DevOps</h3>
              <span>60%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill fill-60"></div>
            </div>
          </div>

          <div className="progress-card fade-in">
            <div className="progress-top">
              <h3>Networking</h3>
              <span>70%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill fill-70"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section fade-in">
        <div className="section-heading">
          <p className="section-tag">PROJECTS</p>
          <h2>Featured Work</h2>
        </div>

        <div className="filter-buttons fade-in">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active-filter' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'security' ? 'active-filter' : ''}`}
            onClick={() => setActiveFilter('security')}
          >
            Security
          </button>
          <button
            className={`filter-btn ${activeFilter === 'python' ? 'active-filter' : ''}`}
            onClick={() => setActiveFilter('python')}
          >
            Python
          </button>
          <button
            className={`filter-btn ${activeFilter === 'devops' ? 'active-filter' : ''}`}
            onClick={() => setActiveFilter('devops')}
          >
            DevOps
          </button>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card preview-card fade-in ${project.id === 2 ? 'featured-card' : ''}`}
            >
              <div className="project-top-row">
                <div className="project-icon">{project.icon}</div>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-preview-box">
                <span>{project.preview}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline small-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline small-btn"
                >
                  GitHub
                </a>

                <Link to={`/project/${project.id}`} className="btn btn-fill small-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section fade-in">
        <div className="section-heading">
          <p className="section-tag">FAQ</p>
          <h2>Common Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item fade-in ${openFaq === index ? 'faq-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span>{openFaq === index ? '−' : '+'}</span>
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section fade-in">
        <div className="section-heading">
          <p className="section-tag">CONTACT</p>
          <h2>Send Me a Message</h2>
        </div>

        <div className="contact-form-wrap">
          <form className="contact-form fade-in" onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
            ></textarea>

            <button type="submit" className="btn btn-fill">
              Send Message
            </button>
          </form>

          <div className="contact-side-card fade-in">
            <h3>Let&apos;s Connect</h3>
            <p>
              You can also reach me directly through email for learning,
              collaboration, and project discussion.
            </p>

            <a className="email-link" href="mailto:mazbahulislm036@gmail.com">
              mazbahulislm036@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home