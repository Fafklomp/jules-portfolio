import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Jules,\n\nMy name is ${form.name} and my email is ${form.email}.\n\n${form.message}`
    )
    window.location.href = `mailto:juliaktucker@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full bg-transparent border-b border-stone/15 py-3 text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:border-terra transition-colors duration-200'

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-stone/10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2">Get in Touch</p>
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2C2822' }}
        >
          Contact Me
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-sm font-light leading-relaxed text-stone/60 mb-8">
            Interested in working together or have a project in mind? Fill in the form
            and it will open your email client with everything pre-filled.
          </p>
          <p className="text-xs tracking-widest uppercase text-stone/35">Direct email</p>
          <p className="text-sm text-stone/50 mt-1">juliaktucker@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="mt-2 text-xs tracking-widest uppercase text-terra border border-terra/60 px-8 py-3 rounded-full hover:bg-terra hover:border-terra hover:text-offwhite transition-all duration-200"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
