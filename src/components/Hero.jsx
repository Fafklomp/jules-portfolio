import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import photo from '../assets/photo.jpg'

export default function Hero() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [textOffset, setTextOffset] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const imageCenter = containerRef.current.offsetHeight / 2
        const viewportCenter = window.innerHeight / 2
        setTextOffset(viewportCenter - imageCenter)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const scale    = useTransform(scrollYProgress, [0, 1], [1, 0.1])
  const imageY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY    = useTransform(scrollYProgress, [0, 1], [0, textOffset])
  const aboutY = useTransform(scrollYProgress, [0, 1], ['60px', '0px'])

  return (
    <div ref={ref} className="h-[300vh] max-w-5xl mx-auto">
      {/* Sticky hero image + name */}
      <div ref={containerRef} className="sticky top-0 overflow-hidden rounded-sm">
        <motion.img
          src={photo}
          alt=""
          aria-hidden="true"
          style={{ scale, y: imageY }}
          className="w-full h-auto block origin-top"
        />

        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1
            className="text-7xl md:text-9xl font-bold leading-none tracking-tight mb-2 text-offwhite"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Jules Tucker
          </h1>
          <p className="text-4xl md:text-5xl font-light italic text-offwhite max-w-md leading-none mb-0">
            Interior Designer
          </p>
          <p className="text-sm tracking-[0.2em] uppercase font-bold text-offwhite mt-6">Portfolio</p>
        </motion.div>
      </div>

      {/* About — rises up during the second half of the hero scroll */}
      <motion.section
        id="about"
        style={{ y: aboutY }}
        className="px-6 md:px-16 pt-8 pb-20 max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
          <p className="text-xs tracking-[0.2em] uppercase text-sage pt-1">About Me</p>
          <div className="space-y-4">
            <p className="text-base md:text-lg font-light leading-relaxed text-stone/80">
              My name is Jules, a South African trained Interior Architect passionate about crafting
              spaces through the lens of human wellbeing and sustainability. After gaining three years
              of professional practice, earning my LEED Green Associate credential, and graduating
              Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment
              to designing interiors that exceed client expectations.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-stone/80">
              My work spans luxury residential and hospitality projects across the world, where I have
              had the creative freedom to explore bespoke design solutions and refine my ability to
              craft detail-driven spaces that engage and inspire those who experience them. My design
              approach blends aesthetics, comfort, and brand identity to create meaningful,
              human-centered environments. I am committed to delivering spaces that positively impact
              both their users and the environment, and I plan to continue advancing my sustainability
              and wellbeing expertise through LEED AP ID+C and WELL AP credentials.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
