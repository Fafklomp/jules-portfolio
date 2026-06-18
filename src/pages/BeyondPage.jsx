import { useRef } from 'react'

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
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import { SiInstagram } from 'react-icons/si'

const photographyImages = [
  'JULIA TUCKER_0260_00010.JPG',
  'JULIA TUCKER_0260_00012.JPG',
  'JULIA TUCKER_0260_00026.JPG',
  ...Array.from({ length: 45 }, (_, i) => i === 0 ? 'unnamed.jpg' : `unnamed (${i}).jpg`),
  '1.jpg',
].map(f => `/photography/${f}`)

const artImages = [
  '079.jpg',
  '2018-08-10 01.46.28 1.jpg',
  '2020-03-30 04.26.15 1.jpg',
  '2020-04-15 04.30.12 1.jpg',
  '2020-05-09 04.45.23 1.jpg',
  '2020-07-19 04.17.06 1.jpg',
  '2020-07-20 12.46.09 1.jpg',
  '2020-08-11 08.32.59 1.jpg',
  '2021-02-10-055407564.jpg',
  'IMG_4265.JPG',
  'IMG_4471.JPG',
  'IMG_6074.JPG',
  'LUMF5501.JPG',
  'XAZJE5949.JPG',
  'nklxc.JPG',
  'unnamed (46).jpg',
  'unnamed.jpg',
].map(f => `/art/${f}`)

const handsonImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','ss.jpg','sss.jpg'].map(f => `/handson/${f}`)


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
      <motion.div ref={containerRef} style={{ x }} className="flex gap-3 w-max items-stretch h-48 md:h-64">
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
                ) : title === 'Art' ? (
                  <PhotoBanner images={artImages} />
                ) : (
                  <PhotoBanner images={handsonImages} />
                )}
              </div>
            ))}
          </div>

        </section>
      </FadeIn>
    </PageTransition>
  )
}
