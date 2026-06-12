export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-16 py-10 max-w-5xl mx-auto border-t border-stone/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-stone/30 tracking-wide">
          © {year} Jules Tucker. All rights reserved.
        </p>
        <p className="text-xs text-stone/20 tracking-wide">
          Interior Designer · LEED Green Associate
        </p>
      </div>
    </footer>
  )
}
