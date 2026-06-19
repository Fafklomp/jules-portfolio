import { useEffect } from 'react'
import { motion } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panel = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: 32, transition: { duration: 0.22, ease: 'easeIn' } },
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        className="absolute inset-0 bg-stone/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        variants={panel}
        className="relative bg-offwhite w-full md:max-w-2xl md:rounded-sm max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone/40 hover:text-stone transition-colors duration-150 text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8 md:p-12">
          <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">
            {project.category}
          </p>

          <h3
            className="text-4xl md:text-5xl font-light leading-tight mb-1"
            style={{ fontFamily: 'var(--font-display)', color: '#2d2e8c', fontStyle: 'italic' }}
          >
            {project.name}
          </h3>
          {project.subtitle && (
            <p className="text-base font-light text-stone/50 mb-1">{project.subtitle}</p>
          )}
          <p className="text-sm text-stone/50 mb-8">{project.location}</p>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-stone/10 mb-8">
            {[
              { label: 'Year', value: project.year },
              { label: 'Area', value: project.area },
              { label: 'Role', value: project.role },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs tracking-widest uppercase text-stone/40 mb-1">{label}</p>
                <p className="text-sm text-stone">{value}</p>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base leading-relaxed text-stone/80 mb-8">
            {project.description}
          </p>

          {project.myRole && (
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-stone/40 mb-3">My Role</p>
              {project.myRole.split('\n\n').map((para, i) => (
                <p key={i} className="text-xs leading-relaxed text-stone/80 mb-4 last:mb-0">{para}</p>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs tracking-widests uppercase text-sage border border-sage/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.software && (
            <div className="mt-8 pt-6 border-t border-stone/10">
              <p className="text-xs tracking-widest uppercase text-stone/40 mb-3">Software</p>
              <div className="flex flex-wrap gap-2">
                {project.software.map(s => (
                  <span key={s} className="text-xs tracking-widest uppercase text-sage border border-sage/30 px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
