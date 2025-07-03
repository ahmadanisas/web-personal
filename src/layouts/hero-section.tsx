import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium opacity-0 animate-fade-in-up animation-delay-200">
                Hello there, I am Ahmadanisa!
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 animate-fade-in-up animation-delay-400">
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Full-Stack Web
                </span>
                <br />
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-none sm:max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in-up animation-delay-600">
              Responsible for building and managing full-cycle web applications.
              Work to deliver scalable solutions that meet user needs and
              business goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in-up animation-delay-800">
              <Link
                href="#contact"
                className="bg-white/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full border border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl group w-full sm:w-auto justify-center"
              >
                <span>My Resume</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Link>

              <div className="flex space-x-3 justify-center">
                <Link
                  href="https://instagram.com/nisasusatyo"
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                <Link
                  href="https://linkedin.com"
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>

                <Link
                  href="https://github.com/ahmadanisas"
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up animation-delay-1000 order-first lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/foto-profile.jpg"
                  alt="Brendan Eich Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-lg border border-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-blue-600 font-medium text-xs sm:text-sm">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
