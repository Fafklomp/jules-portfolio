import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About',   to: '/'         },
  { label: 'Mission', to: '/mission' },
  { label: '& Beyond', to: '/beyond' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="max-w-5xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-light tracking-widest uppercase transition-colors duration-200 text-stone/60 hover:text-stone"
        >
          Jules Tucker
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? 'text-stone' : 'text-stone/50 hover:text-stone'
                  }`
                }
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
