import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectModal from '../components/ProjectModal'
import ImageBanner from '../components/ImageBanner'
import projects from '../data/projects'

const heroImages = [
  '/projects-hero-1.jpg',
  '/projects-hero-2.jpg',
  '/projects-hero-3.jpg',
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } }),
}

function ProjectsHero() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1)
      setIndex(i => (i + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-screen overflow-hidden relative">
      <AnimatePresence initial={false} custom={dir}>
        <motion.img
          key={index}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          src={heroImages[index]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-offwhite scale-125' : 'bg-offwhite/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const filters = ['All', 'Work', 'University']

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
  exit:  { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false)
  return (
    <motion.button variants={cardVariants} onClick={onClick} className="group text-left">
      <div className="w-full aspect-[3/2] overflow-hidden rounded-sm mb-4 bg-stone/5">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs tracking-widest uppercase text-stone/25">Image</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-xl md:text-2xl font-light group-hover:text-terra transition-colors duration-200 leading-snug mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
          <p className="text-xs tracking-wide text-stone/40">{project.location}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs tracking-widest uppercase text-stone/35">{project.category}</p>
          <p className="text-xs text-stone/30 mt-0.5">{project.year}</p>
        </div>
      </div>
    </motion.button>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <PageTransition>
      <ImageBanner />
      <section className="pt-8 pb-24 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Selected Work</p>
            <h1
              className="text-4xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: '#2d2e8c', fontStyle: 'italic' }}
            >
              Projects
            </h1>
          </div>

          <div className="flex gap-6 border-b border-stone/10 pb-0">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`pb-3 text-xs tracking-widest uppercase transition-colors duration-200 border-b-[1.5px] -mb-px ${
                  activeFilter === f
                    ? 'border-gold text-stone'
                    : 'border-transparent text-stone/35 hover:text-stone/60'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
