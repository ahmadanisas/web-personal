import { FC } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  category: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, Mozilla Foundation",
    quote:
      "Ahmadanisa is a visionary developer who revolutionized web development by creating JavaScript and shaping the future of the internet.",
    category: "TECH EXECUTIVE",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Senior Engineer, Brave Software",
    quote:
      "Ahmadanisa is an innovative leader who continues to push boundaries in privacy-focused browsing and blockchain technology.",
    category: "SOFTWARE ENGINEER",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Product Manager, Web3 Startup",
    quote:
      "Ahmadanisa is a pioneer who transforms complex ideas into practical solutions that empower users and protect their digital rights.",
    category: "PRODUCT MANAGER",
  },
];

const TestimonialSection: FC = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 border-2 border-blue-400 rounded-full rotate-12"></div>
        <div className="absolute top-20 right-32 w-24 h-24 border-2 border-blue-300 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 border-3 border-blue-300 rounded-full rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-lg opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-blue-400 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming ideas into seamless, dynamic web experiences with innovative and reliable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-6">
                {testimonial.category}
              </div>

              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-2 -left-2 text-blue-200 opacity-50">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg cursor-pointer">
            <span className="text-blue-600 font-medium">Connect with me</span>
            <svg
              className="w-4 h-4 text-blue-600"
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
    </section>
  );
};

export default TestimonialSection;