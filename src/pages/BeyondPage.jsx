import { useRef, useState, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { SiInstagram } from 'react-icons/si'
import { MdTouchApp } from 'react-icons/md'

function PH({ children }) {
  return (
    <span className="relative inline-block">
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full" viewBox="0 0 120 24" preserveAspectRatio="none" style={{ top: '10%', height: '85%' }}>
        <path d="M2,18 C10,8 20,4 40,6 C60,8 80,5 100,7 C112,8 118,12 118,16 C118,20 110,22 90,21 C70,20 40,21 20,20 C8,19 2,21 2,18 Z" fill="#fdbf69" opacity="0.7"/>
      </svg>
      <span className="relative">{children}</span>
    </span>
  )
}

const photographyImages = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.JPG', '9.JPG',
  '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg',
  '18.jpg', '19.jpg', '20.jpg', '21.jpg', '23.jpg', '24.JPG', '25.jpg', '26.jpg',
  'unnamed.jpg', 'unnamed (3).jpg', 'unnamed (5).jpg', 'unnamed (6).jpg',
  'unnamed (11).jpg', 'unnamed (14).jpg', 'unnamed (15).jpg', 'unnamed (18).jpg',
  'unnamed (20).jpg', 'unnamed (21).jpg', 'unnamed (30).jpg', 'unnamed (32).jpg',
  'unnamed (33).jpg', 'unnamed (38).jpg', 'unnamed (40).jpg', 'unnamed (45).jpg',
].map(f => `/photography/${f}`)

const handsonImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','ss.jpg','sss.jpg'].map(f => `/handson/${f}`)

const artImages = [
  '1.jpg', '2.jpg', '3.jpg', '4.JPG', '5.JPG', '6.jpg', '7.jpg', '8.JPG', '9.JPG',
  '10.jpg', '11.JPG', '12.jpg',
  '2020-03-30 04.26.15 1.jpg', '2020-05-09 04.45.23 1.jpg', '2020-07-19 04.17.06 1.jpg',
  'IMG_4265.JPG', 'unnamed (46).jpg',
].map(f => `/art/${f}`)

const IMAGE_MAP = {
  'Art': artImages,
  'Photography': photographyImages,
  'Hands-On Making': handsonImages,
}

const sections = [
  { title: 'Art',             instagram: 'https://www.instagram.com/artwrksju/'  },
  { title: 'Photography',     instagram: 'https://www.instagram.com/journalsju/' },
  { title: 'Hands-On Making', instagram: 'https://www.instagram.com/designsju/' },
]

function PhotoBanner({ images, speed = 40, onImageClick }) {
  const x = useMotionValue(0)
  const containerRef = useRef(null)
  const doubled = [...images, ...images]

  useAnimationFrame((_, delta) => {
    const container = containerRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    const next = x.get() - (speed * delta) / 1000
    x.set(next <= -halfWidth ? 0 : next)
  })

  return (
    <div className="w-full overflow-hidden">
      <motion.div ref={containerRef} style={{ x }} className="flex gap-3 w-max items-stretch h-48 md:h-64">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-full w-auto object-cover flex-shrink-0 rounded-sm cursor-pointer hover:opacity-90 transition-opacity duration-150"
            onClick={() => onImageClick(i % images.length)}
          />
        ))}
      </motion.div>
    </div>
  )
}

function PhotoGrid({ images, onImageClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-2"
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-full aspect-square object-cover rounded-sm cursor-zoom-in hover:opacity-90 transition-opacity duration-150"
          onClick={() => onImageClick(i)}
        />
      ))}
    </motion.div>
  )
}

function Lightbox({ gallery, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const touchStartX = useRef(null)

  function navigate(dir) {
    setIndex(i => Math.min(Math.max(i + dir, 0), gallery.length - 1))
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  setIndex(i => Math.max(i - 1, 0))
      if (e.key === 'ArrowRight') setIndex(i => Math.min(i + 1, gallery.length - 1))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, gallery.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1)
        touchStartX.current = null
      }}
    >
      <motion.img
        key={gallery[index]}
        src={gallery[index]}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-full max-h-full object-contain rounded-sm cursor-default"
        onClick={e => e.stopPropagation()}
      />

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {index < gallery.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate(1) }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {gallery.length}
      </p>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-150 text-xl leading-none"
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  )
}

export default function BeyondPage() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { gallery, index }

  function openGrid(title) {
    setExpandedSection(title)
  }

  function openLightbox(gallery, index) {
    setLightbox({ gallery, index })
  }

  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">

          {/* Intro */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Additional Creative Fields</p>
            <div className="space-y-6">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                In my free time, I love exploring my <PH>creativity</PH> through <PH>painting</PH>, <PH>photography</PH>, and <PH>hands-on making</PH>, from <PH>pottery</PH> and <PH>model building</PH> to <PH>CNC projects</PH>.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                Painting <PH>landscapes</PH> lets me capture moments and places that left an impression on me, turning memory into art. Working with my hands allows me to experiment and bring ideas to life in a <PH>tactile</PH> way. Photography, especially while <PH>travelling</PH>, helps me notice fleeting moments, people, and landscapes (recently, I've been drawn to the textured, timeless quality of film).
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                These hobbies give me space to switch off, let my mind <PH>wander</PH> and <PH>recharge</PH>, while continuously inspiring the way I approach design.
              </p>
            </div>
          </div>

          {/* Art / Photography / Hands-On Making */}
          <div className="space-y-20">
            {sections.map(({ title, instagram }) => {
              const images = IMAGE_MAP[title]
              const isExpanded = expandedSection === title

              return (
                <div key={title} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
                  <div className="pt-1">
                    <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">{title}</p>
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#fdbf69] hover:opacity-70 transition-opacity duration-200"
                    >
                      <SiInstagram size={28} />
                    </a>
                    {isExpanded && (
                      <button
                        onClick={() => setExpandedSection(null)}
                        className="block mt-3 text-[10px] tracking-widest uppercase text-stone/35 hover:text-stone/60 transition-colors duration-150"
                      >
                        ← collapse
                      </button>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <PhotoGrid
                        key="grid"
                        images={images}
                        onImageClick={(i) => openLightbox(images, i)}
                      />
                    ) : (
                      <motion.div key="banner" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="relative">
                        <PhotoBanner
                          images={images}
                          onImageClick={() => openGrid(title)}
                        />
                        <div className="absolute top-3 left-3 pointer-events-none z-10">
                          <MdTouchApp size={22} style={{ color: '#fdbf69' }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </section>
      </FadeIn>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            gallery={lightbox.gallery}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
