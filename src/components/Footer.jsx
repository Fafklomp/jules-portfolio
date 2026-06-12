export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-16 py-8 max-w-5xl mx-auto border-t border-stone/10">
      <p className="text-xs text-stone/30 tracking-wide">
        © {year} Jules Tucker. All rights reserved.
      </p>
    </footer>
  )
}
