const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juliatucker-profile/',
    description: 'Professional profile',
  },
  {
    label: 'Email',
    href: 'mailto:juliaktucker@gmail.com',
    description: 'Get in touch',
  },
]

export default function Links() {
  return (
    <section id="links" className="py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-stone/10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Connect</p>
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2d2e8c', fontStyle: 'italic' }}
        >
          Links
        </h2>
      </div>

      <ul className="divide-y divide-stone/10">
        {links.map(({ label, href, description }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 group"
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-2xl md:text-3xl font-light group-hover:text-terra transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {label}
                </span>
                <span className="hidden sm:block text-xs text-stone/35">{description}</span>
              </div>
              <span className="text-terra text-sm translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
