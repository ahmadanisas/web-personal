import { coreSkills, keyValues } from "../data/dummy-about";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 border-1 sm:border-2 border-blue-400 rounded-full transform animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-20 sm:right-40 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-1 sm:border-2 border-blue-300 rounded-lg transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 border-2 sm:border-3 border-blue-300 rounded-full transform animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-blue-300 rounded-full opacity-20 animate-bounce delay-100"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-blue-400 rounded-lg opacity-30 animate-pulse delay-200 transform rotate-12"></div>

        <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-1 sm:border-2 border-blue-300 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-blue-200 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 opacity-0 animate-fade-in-up animation-delay-200">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-blue-100 relative group hover:bg-white/80 transition-all duration-500">
            <div className="absolute -top-3 sm:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm sm:text-lg md:text-xl font-bold shadow-lg">
                N.
              </div>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Full-Stack Visionary & Problem Solver
              </h3>
              <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="text-blue-600 font-semibold">
                    Ahmadanisa
                  </span>
                  , a web developer driven by a passion for building seamless, user-first digital experiences. From crafting responsive frontends to architecting powerful backend systems, I turn ideas into interactive realities on the web. My journey started with curiosity and code, and it's grown into a commitment to clean design, performance optimization, and accessibility.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4">
              Artistic Expertise
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
              Core competencies that define my creative approach and program
              identity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {coreSkills.map((skillSet, index) => (
              <div
                key={skillSet.category}
                className="group bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skillSet.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {skillSet.category}
                  </h4>
                  <div className="space-y-2 flex flex-wrap justify-center gap-1 sm:gap-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-blue-100 text-blue-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium group-hover:bg-blue-200 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4">
              Core Values
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
              Fundamental principles that guide my artistic vision and creative
              decisions
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {keyValues.map((value, index) => (
              <div
                key={value.title}
                className="group bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:bg-white/90 hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1.0 + index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 text-center sm:text-left">
                  <div className="flex-shrink-0">
                    <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 sm:block hidden">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
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
      `}</style>
    </section>
  );
}
