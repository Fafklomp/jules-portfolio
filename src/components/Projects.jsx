import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 1,
    name: 'The Alderton',
    category: 'Hospitality',
    location: 'Marrakech, Morocco',
    year: '2023',
    area: '4,200 sq ft',
    role: 'Lead Designer',
    description:
      'A 24-suite boutique riad reimagined for a European hospitality group. The brief called for a balance between Moroccan craft traditions and a spare, contemporary sensibility — hand-laid zellige, raw plaster walls, and bespoke ironwork throughout.',
    tags: ['Boutique Hotel', 'Heritage Restoration', 'FF&E'],
  },
  {
    id: 2,
    name: 'Kensington Private Residence',
    category: 'Residential',
    location: 'London, UK',
    year: '2023',
    area: '6,800 sq ft',
    role: 'Principal Designer',
    description:
      'Full refurbishment of a five-storey Victorian townhouse for a private client. The project involved structural alterations to open the lower ground floor to a landscaped garden, alongside a complete interior scheme drawing on English country and Italian modernism.',
    tags: ['Full Refurbishment', 'Listed Building', 'Bespoke Furniture'],
  },
  {
    id: 3,
    name: 'Villa Sorano',
    category: 'Residential',
    location: 'Umbria, Italy',
    year: '2022',
    area: '9,100 sq ft',
    role: 'Lead Designer',
    description:
      'A 16th-century farmhouse conversion for a family splitting time between New York and Italy. Natural stone floors were preserved throughout; new additions were kept deliberately understated — linen, terracotta, aged oak — to honour the existing fabric.',
    tags: ['Heritage Property', 'Stone Restoration', 'Landscape Integration'],
  },
  {
    id: 4,
    name: 'Aster Spa & Wellness',
    category: 'Hospitality',
    location: 'Zurich, Switzerland',
    year: '2022',
    area: '3,500 sq ft',
    role: 'Interior Consultant',
    description:
      'Concept and FF&E direction for a members-only urban spa. The palette was drawn from Swiss alpine landscapes — stone, birch, deep moss — with a material language that emphasised warmth and tactility over the clinical feel typical of urban wellness spaces.',
    tags: ['Wellness', 'Members Club', 'Material Concept'],
  },
  {
    id: 5,
    name: 'Notting Hill Apartment',
    category: 'Residential',
    location: 'London, UK',
    year: '2021',
    area: '1,900 sq ft',
    role: 'Principal Designer',
    description:
      'Redesign of a lateral apartment for a young couple relocating from Paris. The brief prioritised a relaxed, lived-in quality — a palette of warm whites, aged brass, and vintage French furniture sourced alongside a full bespoke joinery package.',
    tags: ['Apartment', 'French Influence', 'Joinery'],
  },
  {
    id: 6,
    name: 'Maison Larue',
    category: 'Hospitality',
    location: 'Lyon, France',
    year: '2021',
    area: '5,600 sq ft',
    role: 'Lead Designer',
    description:
      "Interior concept for a twelve-room maison d'hôtes set within a classified 18th-century building. The scheme layered period architectural detail with contemporary French craft — ceramic lighting, woven textiles, and hand-dyed wallcoverings produced by regional artisans.",
    tags: ["Maison d'Hôtes", 'Heritage', 'Artisan Craft'],
  },
]

const filters = ['All', 'Residential', 'Hospitality']

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Selected Work</p>
        <h2
          className="text-5xl md:text-6xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
        >
          Projects
        </h2>
      </div>

      <div className="flex gap-8 mb-12 border-b border-stone/10 pb-0">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`pb-3 text-sm tracking-widest uppercase transition-colors duration-200 border-b-[1.5px] -mb-px ${
              activeFilter === f
                ? 'border-terra text-stone'
                : 'border-transparent text-stone/40 hover:text-stone/70'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={activeFilter}
          variants={listVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="divide-y divide-stone/10"
        >
          {filtered.map((project, i) => (
            <motion.li key={project.id} variants={itemVariants}>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left py-7 flex items-baseline justify-between group"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs text-stone/30 w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span
                      className="text-2xl md:text-3xl font-light group-hover:text-terra transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.name}
                    </span>
                    <span className="ml-4 text-xs tracking-widest uppercase text-stone/40">
                      {project.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0 ml-4">
                  <span className="hidden md:block text-xs tracking-widest uppercase text-stone/40">
                    {project.category}
                  </span>
                  <span className="text-stone/30 text-sm">{project.year}</span>
                  <span className="text-terra opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
