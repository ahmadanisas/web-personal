import { education, experiences } from "../data/dummy-experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 border-2 border-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-blue-400 rounded-lg transform rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-blue-200 rounded-full opacity-30 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4">
            My Journey
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            My journey to web development was driven by a passion for technology and problem-solving, with a focus on creating innovative digital solutions.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Experience Column */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center lg:text-left opacity-0 animate-fade-in-up animation-delay-200">
              My Experience
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50/50 group opacity-0 animate-fade-in-up ${exp.delay}`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-blue-500 font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.year}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300 break-words">
                        {exp.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 break-words">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center lg:text-left opacity-0 animate-fade-in-up animation-delay-400">
              My Education
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50/50 group opacity-0 animate-fade-in-up ${edu.delay}`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-blue-500 font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {edu.year}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300 break-words">
                        {edu.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 break-words">
                        {edu.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
      `}</style>
    </section>
  );
}
