import { useRef, useState, useCallback } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

const bannerImages = Array.from({ length: 13 }, (_, i) => `/banner/${i + 1}.webp`)

export default function ImageBanner({ speed = 40 }) {
  const x = useMotionValue(0)
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartMotionX = useRef(0)
  const [cursor, setCursor] = useState('grab')

  useAnimationFrame((_, delta) => {
    if (isDragging.current) return
    const container = containerRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    const next = x.get() - (speed * delta) / 1000
    x.set(next <= -halfWidth ? 0 : next)
  })

  const onMouseDown = useCallback((e) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragStartMotionX.current = x.get()
    setCursor('grabbing')
  }, [x])

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    const container = containerRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    let next = dragStartMotionX.current + (e.clientX - dragStartX.current)
    // wrap
    if (next <= -halfWidth) next += halfWidth
    if (next > 0) next -= halfWidth
    x.set(next)
  }, [x])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    setCursor('grab')
  }, [])

  const images = [...bannerImages, ...bannerImages]

  return (
    <div
      className="w-full overflow-hidden pt-14 pb-4 select-none"
      style={{ cursor }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
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
              className="h-full w-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
