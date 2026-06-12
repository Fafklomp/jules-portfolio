const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juliatucker-profile/',
    description: 'Professional profile',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Fafklomp/my-portfolio',
    description: 'Code & projects',
  },
  {
    label: 'Email',
    href: 'mailto:juliaktucker@gmail.com',
    description: 'Get in touch',
  },
]

export default function Links() {
  return (
    <section id="links" className="px-6 md:px-16 py-20 max-w-5xl mx-auto border-t border-stone/10">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
        <p className="text-xs tracking-[0.2em] uppercase text-sage pt-1">Links</p>
        <ul className="divide-y divide-stone/10">
          {links.map(({ label, href, description }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-baseline justify-between py-5 group"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-2xl font-light group-hover:text-terra transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {label}
                  </span>
                  <span className="text-sm text-stone/40">{description}</span>
                </div>
                <span className="text-terra opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
