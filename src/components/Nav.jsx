import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useScroll } from 'framer-motion'

const navLinks = [
  { label: 'Work',    to: '/projects' },
  { label: 'Contact', to: '/contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 40))
  }, [scrollY])

  // On non-home pages always show background; on home only after scroll
  const showBg = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBg ? 'bg-offwhite/90 backdrop-blur-md border-b border-stone/10' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        <Link
          to="/"
          className={`text-sm font-light tracking-widest uppercase transition-colors duration-200 ${
            showBg ? 'text-stone/60 hover:text-stone' : 'text-offwhite/70 hover:text-offwhite'
          }`}
        >
          Jules Tucker
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => {
                  const base = 'text-xs tracking-widest uppercase transition-colors duration-200'
                  const active = isActive ? 'text-terra' : ''
                  const color = showBg
                    ? (isActive ? 'text-terra' : 'text-stone/50 hover:text-terra')
                    : (isActive ? 'text-terra' : 'text-offwhite/70 hover:text-offwhite')
                  return `${base} ${color}`
                }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
