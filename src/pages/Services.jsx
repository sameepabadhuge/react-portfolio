export default function Services() {
  const services = [
    {
      title: "Frontend Developer",
      tagline: "UI • Responsive • Modern",
      description: "I design and develop responsive and user-friendly interfaces using modern frontend technologies. I focus on clean layouts, smooth interactions, and mobile-friendly designs to create engaging user experiences.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Backend Developer",
      tagline: "Secure • Scalable • APIs",
      description: "I build secure and efficient backend systems to handle application logic, data management, and API development. I focus on writing clean and maintainable code that supports scalable applications.",
      technologies: ["ASP.NET Core", "Node.js", "Express.js", "Firebase", "REST APIs"]
    },
    {
      title: "Full Stack Developer",
      tagline: "End-to-End Development",
      description: "I develop complete web applications by integrating frontend and backend technologies. From database design to user interface, I manage the full development process and ensure smooth communication between all system components.",
      technologies: ["MERN Stack", ".NET", "MongoDB", "SQL", "Firebase"]
    },
    {
      title: "Mobile App Developer",
      tagline: "Android & iOS Apps",
      description: "I create cross-platform mobile applications with a focus on performance and usability. I build applications that work smoothly on both Android and iOS using modern mobile development tools.",
      technologies: ["React Native", "Expo", "Firebase"]
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="text-[#2DFF7A]">🛠️</span> What I <span className="text-[#2DFF7A]">Do</span>
        </h1>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          I offer a range of services to help you build modern, scalable applications across web and mobile platforms.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col rounded-2xl border border-[#2DFF7A]/30 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-[#2DFF7A]/60 transition duration-300">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            
            <p className="mt-2 inline-block text-sm font-medium text-[#2DFF7A]/80">
              {service.tagline}
            </p>

            <p className="mt-4 flex-1 text-base leading-relaxed text-white/70">
              {service.description}
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80 mb-3">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-[#2DFF7A]/10 px-4 py-1.5 text-sm font-medium text-[#2DFF7A] border border-[#2DFF7A]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
