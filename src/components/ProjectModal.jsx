import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-offwhite w-full md:max-w-2xl md:rounded-sm max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone/40 hover:text-stone transition-colors duration-150 text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8 md:p-12">
          {/* Category tag */}
          <p className="text-xs tracking-[0.2em] uppercase text-sage mb-4">
            {project.category}
          </p>

          {/* Title */}
          <h3
            className="text-4xl md:text-5xl font-light leading-tight mb-2"
            style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
          >
            {project.name}
          </h3>
          <p className="text-sm text-stone/50 mb-8">{project.location}</p>

          {/* Specs row */}
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

          {/* Description */}
          <p className="text-base leading-relaxed text-stone/80 mb-8">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs tracking-widest uppercase text-sage border border-sage/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
