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

  const scale  = useTransform(scrollYProgress, [0, 1], [1, 0.1])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY  = useTransform(scrollYProgress, [0, 1], [0, textOffset])

  return (
    <div ref={ref} className="h-[200vh] max-w-5xl mx-auto">
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
        </motion.div>
      </div>
    </div>
  )
}
