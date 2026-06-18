import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About',   to: '/about'    },
  { label: 'Mission', to: '/mission' },
  { label: '& Beyond', to: '/beyond' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase transition-colors duration-200 ${
      isActive ? 'text-stone' : 'text-stone/50 hover:text-stone'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#F7F4EF' }}>
      <nav className="max-w-5xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-light tracking-widest uppercase transition-colors duration-200 text-stone/60 hover:text-stone"
        >
          Jules Tucker
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-px bg-stone transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
            className="md:hidden border-t border-stone/10 px-6 py-8"
            style={{ backgroundColor: '#F7F4EF' }}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <NavLink to={to} className={linkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
