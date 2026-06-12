const skillGroups = [
  {
    category: '3D Modelling & 2D Drawings',
    skills: ['AutoCAD', 'Revit', 'SketchUp', 'Rhino', 'ArchiCAD'],
  },
  {
    category: 'Rendering',
    skills: ['V-Ray', 'Enscape', 'Lumion', 'Twinmotion', 'Corona Renderer'],
  },
  {
    category: 'Graphics & Vector Editing',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
  },
  {
    category: 'Docs',
    skills: ['Microsoft Office', 'Google Workspace', 'Notion'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-stone/10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Expertise</p>
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
        >
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map(({ category, skills }) => (
          <div key={category} className="grid md:grid-cols-[240px_1fr] gap-3 md:gap-16 items-start">
            <p className="text-xs tracking-[0.15em] uppercase text-stone/40 md:pt-2">{category}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3.5 py-1 rounded-full text-xs font-light border border-stone/15 text-stone/60 hover:border-terra hover:text-terra transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
