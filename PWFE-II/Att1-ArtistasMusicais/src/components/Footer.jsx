/**
 * Footer component
 * Contains copyright and project information
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 mt-12">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            Academic project about <strong className="text-white">Laufey</strong>. 
          </p>
          <p>© {new Date().getFullYear()} • For educational purposes only</p>
        </div>
      </div>
    </footer>
  )
}