import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'
import projects from '../data/projects'
import ProjectModal from '../components/ProjectModal'
import { useState } from 'react'

function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false)
  return (
    <button onClick={onClick} className="group text-left">
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
    </button>
  )
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const featured = projects.slice(0, 4)

  return (
    <PageTransition>
      <Hero />

      {/* Featured projects teaser */}
      <FadeIn>
        <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Selected Work</p>
              <h2
                className="text-4xl md:text-5xl font-light leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
              >
                Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs tracking-widest uppercase text-stone/40 hover:text-terra transition-colors duration-200 shrink-0 ml-4"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {featured.map(p => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn><Skills /></FadeIn>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
