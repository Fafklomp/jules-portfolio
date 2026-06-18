import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { SiInstagram } from 'react-icons/si'

const photographyImages = [
  'JULIA TUCKER_0260_00010.JPG',
  'JULIA TUCKER_0260_00012.JPG',
  'JULIA TUCKER_0260_00026.JPG',
  ...Array.from({ length: 45 }, (_, i) => i === 0 ? 'unnamed.jpg' : `unnamed (${i}).jpg`),
].map(f => `/photography/${f}`)

function PhotoBanner({ images, speed = 40 }) {
  const x = useMotionValue(0)
  const containerRef = useRef(null)

  useAnimationFrame((_, delta) => {
    const container = containerRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    const next = x.get() - (speed * delta) / 1000
    x.set(next <= -halfWidth ? 0 : next)
  })

  const doubled = [...images, ...images]

  return (
    <div className="w-full overflow-hidden">
      <motion.div ref={containerRef} style={{ x }} className="flex gap-3 w-max items-stretch h-64">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className="h-full w-auto object-cover flex-shrink-0 rounded-sm"
          />
        ))}
      </motion.div>
    </div>
  )
}

const sections = [
  { title: 'Art',           instagram: 'https://www.instagram.com/artwrksju/'  },
  { title: 'Photography',   instagram: 'https://www.instagram.com/journalsju/' },
  { title: 'Hands-On Making', instagram: 'https://www.instagram.com/designsju/' },
]

export default function BeyondPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">

          {/* Intro */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Additional Creative Fields</p>
            <div className="space-y-6">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                In my free time, I love exploring my creativity through painting, photography, and hands-on making, from pottery and model building to CNC projects.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                Painting landscapes lets me capture moments and places that left an impression on me, turning memory into art. Working with my hands allows me to experiment and bring ideas to life in a tactile way. Photography, especially while traveling, helps me notice fleeting moments, people, and landscapes (recently, I've been drawn to the textured, timeless quality of film).
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
                These hobbies give me space to switch off, let my mind wander and recharge, while continuously inspiring the way I approach design.
              </p>
            </div>
          </div>

          {/* Art / Photography / Hands-On Making */}
          <div className="space-y-20">
            {sections.map(({ title, instagram }) => (
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
                </div>

                {title === 'Photography' ? (
                  <PhotoBanner images={photographyImages} />
                ) : (
                  <div className="min-h-[120px] rounded-sm border border-stone/10 flex items-center justify-center">
                    <p className="text-xs tracking-widest uppercase text-stone/20">Photos coming soon</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>
      </FadeIn>
    </PageTransition>
  )
}
