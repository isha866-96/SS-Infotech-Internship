import { useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const SESSION_KEY = 'signin-current-user'
const USERS_KEY = 'signin-users'

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY))
    } catch {
      return null
    }
  })
  const [mode, setMode] = useState('login')
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const firstName = useMemo(() => {
    return currentUser?.name?.split(' ')[0] || 'friend'
  }, [currentUser])

  function updateField(event) {
    const { name, value } = event.target
    setForm((details) => ({ ...details, [name]: value }))
    setMessage('')
  }

  function saveSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    setCurrentUser(user)
  }

  function handleRegister(event) {
    event.preventDefault()

    const users = getStoredUsers()
    const email = form.email.trim().toLowerCase()

    if (users.some((user) => user.email === email)) {
      setMessage('An account with this email already exists.')
      return
    }

    const user = {
      name: form.name.trim(),
      email,
      password: form.password,
    }

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]))
    saveSession({ name: user.name, email: user.email })
  }

  function handleLogin(event) {
    event.preventDefault()

    const email = form.email.trim().toLowerCase()
    const user = getStoredUsers().find(
      (savedUser) =>
        savedUser.email === email && savedUser.password === form.password,
    )

    if (!user) {
      setMessage('Please check your email and password.')
      return
    }

    saveSession({ name: user.name, email: user.email })
  }

  function handleLogout() {
    localStorage.removeItem(SESSION_KEY)
    setCurrentUser(null)
    setMode('login')
    setMessage('')
    setForm({ name: '', email: '', password: '' })
  }

  if (currentUser) {
    return (
      <main className="home-page">
        <nav className="home-nav" aria-label="Main navigation">
          <span className="brand">
            <span className="brand-mark">A</span>
            AccountPro
          </span>
          <button type="button" className="ghost-button logout-button" onClick={handleLogout}>
            <span aria-hidden="true">Exit</span>
            Logout
          </button>
        </nav>

        <section className="home-hero">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Welcome back, {firstName}</h1>
            <p>
              Your secure home page is ready with a clean workspace and quick
              account overview.
            </p>
          </div>
          <div className="profile-card">
            <div className="avatar" aria-hidden="true">
              {firstName.charAt(0).toUpperCase()}
            </div>
            <div>
              <strong>{currentUser.name}</strong>
              <span>{currentUser.email}</span>
            </div>
          </div>
        </section>

        <section className="dashboard-grid" aria-label="Account overview">
          <article className="metric-card">
            <span className="metric-icon">OK</span>
            <p>Session</p>
            <strong>Active</strong>
          </article>
          <article className="metric-card">
            <span className="metric-icon">Safe</span>
            <p>Security</p>
            <strong>Protected</strong>
          </article>
          <article className="metric-card">
            <span className="metric-icon">Live</span>
            <p>Status</p>
            <strong>Online</strong>
          </article>
        </section>

        <section className="activity-panel">
          <div className="section-heading">
            <p className="eyebrow">Overview</p>
            <h2>Account activity</h2>
          </div>
          <div className="activity-list">
            <div>
              <span className="activity-dot"></span>
              Logged in successfully
            </div>
            <div>
              <span className="activity-dot"></span>
              Home page opened automatically
            </div>
            <div>
              <span className="activity-dot"></span>
              Profile session saved locally
            </div>
          </div>
        </section>
      </main>
    )
  }

  const isLogin = mode === 'login'

  return (
    <main className="welcome-page">
      <section className="welcome-copy" aria-labelledby="welcome-title">
        <nav className="welcome-brand" aria-label="Brand">
          <span className="brand-mark">A</span>
          <span>AccountPro</span>
        </nav>

        <div className="hero-visual" aria-hidden="true">
          <img src={heroImg} alt="" className="welcome-art" />
          <div className="glass-card top-card">
            <strong>99.9%</strong>
            <span>Secure access</span>
          </div>
          <div className="glass-card bottom-card">
            <strong>Instant</strong>
            <span>Home redirect</span>
          </div>
        </div>

        <p className="eyebrow">Professional access</p>
        <h1 id="welcome-title">Welcome to your secure workspace</h1>
        <p className="intro-text">
          Sign in to continue or create a new account. Returning users are taken
          directly to their home dashboard.
        </p>

        <div className="feature-row" aria-label="Highlights">
          <div>
            <strong>Fast</strong>
            <span>Simple account entry</span>
          </div>
          <div>
            <strong>Secure</strong>
            <span>Private saved session</span>
          </div>
          <div>
            <strong>Smart</strong>
            <span>Auto home opening</span>
          </div>
        </div>
      </section>

      <section className="auth-panel" aria-label="Account access">
        <div className="auth-header">
          <span className="lock-badge" aria-hidden="true">ID</span>
          <div>
            <h2>{isLogin ? 'Welcome back' : 'Create your account'}</h2>
            <p>
              {isLogin
                ? 'Enter your details to access your dashboard.'
                : 'Join once and continue straight to your dashboard.'}
            </p>
          </div>
        </div>

        <div className="tabs" role="tablist" aria-label="Choose form">
          <button
            type="button"
            className={isLogin ? 'active' : ''}
            onClick={() => {
              setMode('login')
              setMessage('')
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={!isLogin ? 'active' : ''}
            onClick={() => {
              setMode('register')
              setMessage('')
            }}
          >
            Register
          </button>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <label>
              Full name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your name"
                required
              />
            </label>
          )}

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={updateField}
              placeholder="Enter password"
              minLength="6"
              required
            />
          </label>

          {message && <p className="form-message">{message}</p>}

          <button type="submit" className="primary-button">
            <span aria-hidden="true">{isLogin ? 'Go' : '+'}</span>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
