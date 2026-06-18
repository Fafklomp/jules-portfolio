import photo from '../assets/photo.jpg'

export default function Hero() {
  return (
    <div className="px-6 md:px-16 pt-24 md:pt-20 pb-16 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-end">

        {/* Sticky photo */}
        <div className="md:sticky md:top-20 shrink-0">
          <img
            src={photo}
            alt="Jules Tucker"
            className="w-56 md:w-80 rounded-sm block"
          />
        </div>

        {/* Name + position + about */}
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h1
              className="text-5xl md:text-7xl font-light leading-tight mb-3"
              style={{ fontFamily: 'var(--font-display)', color: '#2d2e8c', fontStyle: 'italic' }}
            >
              Jules Tucker
            </h1>
            <p className="text-base md:text-lg font-light tracking-wide text-stone/60">
              Interior Designer
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
              My name is Jules, a South African trained Interior Architect passionate about crafting spaces through the lens of human wellbeing and sustainability. After gaining three years of professional experience, earning my LEED Green Associate credential, and graduating Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment to designing interiors that exceed client expectations.
            </p>
            <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80">
              My work spans luxury residential and hospitality projects across the world, where I have had the creative freedom to explore bespoke design solutions and refine my ability to craft detail-driven spaces that engage and inspire. My design approach blends aesthetics, comfort and brand identity to create meaningful, human-centred environments. I am committed to delivering spaces that positively impact both their users and the environment.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
