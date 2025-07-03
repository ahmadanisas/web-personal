import Image from "next/image";
import { useState } from "react";
import { portfolioItems } from "../data/dummy-portofolio";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Programming Languages",
    "Web Browsers",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portofolio"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 sm:top-32 left-10 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-10 sm:top-20 right-16 sm:right-32 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-blue-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-16 sm:left-32 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-blue-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-30 sm:bottom-60 right-10 sm:right-20 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 border-3 border-blue-300 rounded-lg -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              My Recent Works
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4">
            Crafting innovative web solutions that empower seamless digital experiences for users worldwide.
          </p>
        </div>

        {/* <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-full p-2 sm:p-2 shadow-lg border border-blue-100 mx-2 sm:mx-0 max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-blue-600 bg-white"
                }`}
              >
                <span className="hidden md:inline">{filter}</span>
                <span className="md:hidden">
                  {filter === "Programming Languages"
                    ? "Code"
                    : filter === "Web Browsers"
                    ? "Browser"
                    : filter}
                </span>
              </button>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/50 z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <div class="text-white/50 text-4xl sm:text-5xl md:text-6xl">💻</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-20 flex items-end p-4 sm:p-6">
                  <div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 relative z-10">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 pr-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <span className="text-blue-400 text-xs sm:text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="ml-2 sm:ml-4">
                    <button className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <svg
                        className="w-4 sm:w-5 h-4 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  {item.description}
                </p>
              </div>

              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl opacity-10 blur-sm -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <button className="bg-white/80 backdrop-blur-sm text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-blue-200 font-medium shadow-lg text-sm sm:text-base">
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <svg
                className="w-4 h-4"
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
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}