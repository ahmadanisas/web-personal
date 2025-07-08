import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ReactNode; 
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com/nisasusatyo",
    icon: <FontAwesomeIcon icon={faInstagram} />,  
    color: "text-blue-600",
  },
  {
    href: "https://linkedin.com",
    icon: <FontAwesomeIcon icon={faLinkedin} />,  
    color: "text-blue-600",
  },
  {
    href: "https://github.com/ahmadanisas",
    icon: <FontAwesomeIcon icon={faGithub} />,  
    color: "text-gray-600",
  },
];

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
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
                  Full-Stack Web
                </span>
                <br />
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
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
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`w-10 sm:w-12 h-10 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center ${link.color} hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up animation-delay-1000 order-first lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/foto-profile.jpg"
                  alt="Ahmadanisa Profile"
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