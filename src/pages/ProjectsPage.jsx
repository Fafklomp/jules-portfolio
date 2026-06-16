import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectModal from '../components/ProjectModal'
import projects from '../data/projects'

const heroImages = [
  '/projects-hero-1.jpg',
  '/projects-hero-2.jpg',
  '/projects-hero-3.jpg',
]

function ProjectsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const scale  = useTransform(scrollYProgress, [0, 1], [1, 0.1])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={ref} className="h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, y: imageY }}
          className="flex gap-2 origin-top w-full h-full"
        >
          {heroImages.map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
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
      <ProjectsHero />
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
