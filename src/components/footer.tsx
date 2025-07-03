import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl">
            N.
          </div>
        </div>

        <nav className="flex justify-center mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm">
        
            <Link
              href="/works"
              className="text-blue-200 hover:text-white transition-colors duration-200 px-2 py-1"
            >
              Portofolio
            </Link>
            <Link
              href="/resume"
              className="text-blue-200 hover:text-white transition-colors duration-200 px-2 py-1"
            >
              Experience
            </Link>
            <Link
              href="/testimonials"
              className="text-blue-200 hover:text-white transition-colors duration-200 px-2 py-1"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-blue-200 hover:text-white transition-colors duration-200 px-2 py-1"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="text-center px-4">
          <p className="text-blue-300 text-xs sm:text-sm">
            © 2025 Ahmadanisa
          </p>
        </div>
      </div>
    </footer>
  );
}
