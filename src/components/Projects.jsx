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
    image: '/projects/alderton.jpg',
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
    image: '/projects/kensington.jpg',
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
    image: '/projects/villa-sorano.jpg',
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
    image: '/projects/aster-spa.jpg',
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
    image: '/projects/notting-hill.jpg',
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
    image: '/projects/maison-larue.jpg',
    description:
      "Interior concept for a twelve-room maison d'hôtes set within a classified 18th-century building. The scheme layered period architectural detail with contemporary French craft — ceramic lighting, woven textiles, and hand-dyed wallcoverings produced by regional artisans.",
    tags: ["Maison d'Hôtes", 'Heritage', 'Artisan Craft'],
  },
  {
    id: 7,
    name: 'Château de Vigne',
    category: 'Hospitality',
    location: 'Bordeaux, France',
    year: '2024',
    area: '7,800 sq ft',
    role: 'Lead Designer',
    image: '/projects/chateau-vigne.jpg',
    description:
      'Full interior renovation of a 19th-century wine estate converted into a luxury guesthouse. The scheme celebrated the existing architectural grandeur while introducing contemporary comfort — brushed linen, aged stone, and custom wine-inspired art installations throughout.',
    tags: ['Wine Estate', 'Heritage', 'Luxury Hospitality'],
  },
  {
    id: 8,
    name: 'Belgravia Family Home',
    category: 'Residential',
    location: 'London, UK',
    year: '2024',
    area: '8,200 sq ft',
    role: 'Principal Designer',
    image: '/projects/belgravia.jpg',
    description:
      'A complete interior overhaul of a Grade II listed stucco townhouse for a growing family. The brief balanced practicality with refined aesthetics — bespoke cabinetry throughout, a custom kitchen with hand-painted tiles, and a lower ground play space that connects seamlessly to the garden.',
    tags: ['Listed Building', 'Family Home', 'Bespoke Joinery'],
  },
  {
    id: 9,
    name: 'The Meridian Club',
    category: 'Hospitality',
    location: 'Cape Town, South Africa',
    year: '2023',
    area: '5,100 sq ft',
    role: 'Interior Consultant',
    image: '/projects/meridian-club.jpg',
    description:
      'Interior concept for a new members club perched above the Atlantic Seaboard. The design drew on Cape Dutch architecture and contemporary African craft — whitewashed walls, rattan, locally woven textiles, and panoramic glazing that frames the ocean at every turn.',
    tags: ['Members Club', 'African Craft', 'Coastal'],
  },
  {
    id: 10,
    name: 'Portofino Villa',
    category: 'Residential',
    location: 'Portofino, Italy',
    year: '2024',
    area: '4,600 sq ft',
    role: 'Lead Designer',
    image: '/projects/portofino.jpg',
    description:
      'Seasonal residence for a private client on the Ligurian coast. The interior takes its cues from the sea — bleached oak, cerused stone, hand-blown Murano glass, and a palette of aqua, ivory, and warm sand that changes character entirely between morning light and dusk.',
    tags: ['Coastal Residence', 'Italian Craft', 'Seasonal Home'],
  },
]

const filters = ['All', 'Residential', 'Hospitality']

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
}

function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-stone/5">
      <span className="text-xs tracking-widest uppercase text-stone/30">Add image</span>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [imgErrors, setImgErrors] = useState({})

  const filtered = (activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)).slice(0, 4)

  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-sage mb-3">Selected Work</p>
        <h2
          className="text-5xl md:text-6xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
        >
          Projects
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-8 mb-12 border-b border-stone/10">
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

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={gridVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="group text-left"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-4 bg-stone/5">
                {imgErrors[project.id] ? (
                  <ImagePlaceholder />
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={() => setImgErrors(e => ({ ...e, [project.id]: true }))}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-xl font-light group-hover:text-terra transition-colors duration-200 mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-xs tracking-widest uppercase text-stone/40">{project.location}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-xs tracking-widest uppercase text-stone/40">{project.category}</p>
                  <p className="text-xs text-stone/30 mt-1">{project.year}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
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
