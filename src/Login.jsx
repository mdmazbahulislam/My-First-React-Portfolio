import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem('user'))

    if (!savedUser) {
      alert('No user found! Register first.')
      return
    }

    if (username === savedUser.username && password === savedUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(savedUser))
      alert('Login Successful')
      navigate('/')
      window.location.reload()
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, #0d1f45, #040b18 40%), linear-gradient(135deg, #040b18, #0b1730, #101935)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'fixed',
          width: '250px',
          height: '250px',
          background: '#06b6d4',
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.25,
          top: '20px',
          left: '-80px',
        }}
      ></div>

      <div
        style={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          background: '#2563eb',
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.25,
          bottom: '20px',
          right: '-100px',
        }}
      ></div>

      <form
        onSubmit={handleLogin}
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(16px)',
          borderRadius: '26px',
          padding: '36px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: '#38bdf8',
            fontSize: '13px',
            letterSpacing: '2px',
            marginBottom: '10px',
          }}
        >
          WELCOME BACK
        </p>

        <h1
          style={{
            color: 'white',
            marginBottom: '10px',
            fontSize: '38px',
          }}
        >
          Sign In
        </h1>

        <p
          style={{
            color: '#cbd5e1',
            marginBottom: '24px',
            lineHeight: '1.7',
          }}
        >
          Login to access your portfolio dashboard and protected pages.
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            marginBottom: '16px',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)',
            color: 'white',
            outline: 'none',
            fontSize: '15px',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            marginBottom: '20px',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)',
            color: 'white',
            outline: 'none',
            fontSize: '15px',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '14px',
            border: 'none',
            background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
            color: '#03111d',
            fontWeight: 'bold',
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(14,165,233,0.25)',
            marginBottom: '18px',
          }}
        >
          Login
        </button>

        <p style={{ color: '#cbd5e1', textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <Link to="/register" style={{ color: '#38bdf8', fontWeight: 'bold' }}>
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login