import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

const bannerImages = Array.from({ length: 14 }, (_, i) => `/banner/img${i + 1}.jpg`)

export default function ImageBanner({ speed = 40 }) {
  const x = useMotionValue(0)
  const containerRef = useRef(null)

  useAnimationFrame((_, delta) => {
    const container = containerRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    const next = x.get() - (speed * delta) / 1000
    x.set(next <= -halfWidth ? 0 : next)
  })

  // Duplicate images for seamless loop
  const images = [...bannerImages, ...bannerImages]

  return (
    <div className="w-full overflow-hidden pt-14 pb-4">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-4 w-max"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="h-48 md:h-72 w-[18rem] md:w-[28rem] flex-shrink-0 overflow-hidden rounded-sm"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
