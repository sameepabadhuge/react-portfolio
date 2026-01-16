

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project Name",
      type: "image",
      src: "/images/p1.jpg",
      description: "Project description here"
    },
    {
      id: 2,
      title: "Project Name",
      type: "image",
      src: "/images/p2.jpg",
      description: "Project description here"
    },
    {
      id: 3,
      title: "Project Name",
      type: "image",
      src: "/images/p3.jpg",
      description: "Project description here"
    },
    {
      id: 4,
      title: "Project Name",
      type: "image",
      src: "/images/p4.jpg",
      description: "Project description here"
    },
    {
      id: 5,
      title: "Project Name",
      type: "image",
      src: "/images/p5.jpg",
      description: "Project description here"
    },
    {
      id: 6,
      title: "Project Name",
      type: "image",
      src: "/images/p6.jpg",
      description: "Project description here"
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Latest <span className="text-[#10B981]">Project</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#10B981]/50 transition duration-300">
            <div className="aspect-video w-full bg-black/50 relative overflow-hidden">
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                />
              ) : (
                <video
                  src={project.src}
                  controls
                  className="h-full w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
