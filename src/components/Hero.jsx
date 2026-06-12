export default function Hero() {
  return (
    <section className="px-6 md:px-16 pt-24 pb-16 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.2em] uppercase text-sage mb-6">Portfolio</p>
      <h1
        className="text-6xl md:text-8xl font-light leading-none tracking-tight mb-6"
        style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
      >
        Jules Tucker
      </h1>
      <p className="text-lg md:text-xl font-light text-stone/60 max-w-md leading-relaxed">
        Interior Designer
      </p>
    </section>
  )
}
