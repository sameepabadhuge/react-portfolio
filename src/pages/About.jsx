import { useState } from 'react';

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Online Learning Platform",
    description: "Completed comprehensive course covering MERN stack development, best practices, and real-world project implementation.",
    image: "/certificates/fullstack-certificate.jpg",
  },
  {
    title: ".NET Development Certification",
    issuer: "Professional Development Program",
    description: "Gained expertise in C# and .NET framework for building robust backend applications and enterprise solutions.",
    image: "/certificates/dotnet-certificate.jpg",
  },
  {
    title: "React Native Mobile Development",
    issuer: "Advanced Tech Course",
    description: "Successfully completed training in cross-platform mobile development with React Native, building production-ready applications.",
    image: "/certificates/reactnative-certificate.jpg",
  },
  {
    title: "Uva Wellassa University - BICT Degree",
    issuer: "In Progress (Expected 2026)",
    description: "Bachelor of Information and Communication Technology with focus on software development and modern technologies.",
    image: "/certificates/bict-degree.jpg",
  },
];

const experiences = [
  {
    title: "CI/CD Pipeline Engineer",
    org: "GitHub",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Built CI/CD pipelines with Jenkins, automated Docker container deployments, and Kubernetes orchestration",
      "Implemented code quality checks with SonarQube and managed Docker images via Docker Hub",
      "Technologies: Jenkins, GitHub, Docker, Docker Hub, Kubernetes, SonarQube, WSL2",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "Freelance",
    period: "2024 – Present",
    bullets: [
      "Developed MERN applications with responsive UI and secure REST APIs",
      "Integrated authentication, role-based access, and optimized database queries",
      "Technologies: React, Node.js, Express, MongoDB, Tailwind CSS",
    ],
  },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');
  const [certIndex, setCertIndex] = useState(0);

  const showPrevCert = () => {
    if (certificates.length === 0) return;
    setCertIndex((i) => (i - 1 + certificates.length) % certificates.length);
  };

  const showNextCert = () => {
    if (certificates.length === 0) return;
    setCertIndex((i) => (i + 1) % certificates.length);
  };

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About me' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24">
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-3xl font-bold sm:text-4xl text-center md:text-left">
          Why hire me?
        </h1>

        {/* Tab Navigation (vertical stack) */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex sm:flex-col w-full sm:w-64 gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-[#2DFF7A] text-black'
                    : 'bg-white/5 text-white/80 hover:text-white border border-white/10'
                } px-5 py-3 rounded-xl text-base font-semibold text-left`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 space-y-6">

        {/* Experience Section */}
        {activeTab === 'experience' && (
        <section className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold">{exp.title}</h2>
              <p className="text-[#2DFF7A] text-sm sm:text-base mt-1">{exp.org} • {exp.period}</p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm sm:text-base list-disc pl-5">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        )}

        {/* About Me Section */}
        {activeTab === 'about' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            About <span className="text-[#2DFF7A]">Me</span>
          </h2>
          {/* Original detailed description */}
          <div className="rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30 space-y-4">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              I am an undergraduate student at Uva Wellassa University of Sri Lanka, currently following the Bachelor of Information and Communication Technology (BICT) degree program. Through my academic studies and personal projects, I have gained a strong foundation in software development, problem-solving, and modern application design.
            </p>

            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              I have hands-on experience working with .NET for backend development, MERN stack for full stack web applications, and React Native for cross-platform mobile development. I enjoy building complete applications from idea to implementation, focusing on clean code, performance, and user experience.
            </p>

            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              As a motivated learner, I continuously improve my skills by practicing new technologies, building real-world projects, and exploring best development practices. My goal is to become a skilled Full Stack Developer and contribute to impactful software solutions while growing professionally in the tech industry.
            </p>
          </div>

          {/* New compact profile + contact cards */}
          <div className="space-y-6 mt-6">
            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white">About me</h3>
              <p className="mt-3 text-white/80">
                BICT undergraduate passionate about DevOps, cloud computing, and building secure, automated systems.
              </p>
              <div className="mt-4 space-y-2 text-white/70 text-sm">
                <p><span className="text-white">Name:</span> <span className="font-semibold">Ayesha Lakshan</span></p>
                <p><span className="text-white">Experience:</span> <span className="font-semibold">23 Years old</span></p>
                <p><span className="text-white">Nationality:</span> <span className="font-semibold">Sri Lankan</span></p>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white">Contact</h3>
              <div className="mt-3 space-y-2 text-white/70 text-sm">
                <p><span className="text-white">Phone:</span> <span className="font-semibold">070-5049567</span></p>
                <p><span className="text-white">Email:</span> <span className="font-semibold">ayeshalakshan00@gmail.com</span></p>
                <p><span className="text-white">Languages:</span> <span className="font-semibold">English, Sinhala</span></p>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            My <span className="text-[#2DFF7A]">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
              <h3 className="text-lg font-semibold text-[#2DFF7A] mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> React & React Native
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> JavaScript & TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> HTML & CSS
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
              <h3 className="text-lg font-semibold text-[#2DFF7A] mb-4">Backend Development</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> .NET & C#
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Node.js & Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> MongoDB & SQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> RESTful APIs
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
              <h3 className="text-lg font-semibold text-[#2DFF7A] mb-4">Tools & Technologies</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Visual Studio & VS Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Figma
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Postman
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
              <h3 className="text-lg font-semibold text-[#2DFF7A] mb-4">Other Skills</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Team Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2DFF7A]">✓</span> Project Management
                </li>
              </ul>
            </div>
          </div>
        </section>
        )}

        {/* Certificates Section */}
        {activeTab === 'certificates' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-[#2DFF7A]">Certificates</span>
          </h2>
          {certificates.length === 0 ? (
            <div className="rounded-xl bg-white/5 p-6 border border-white/10 text-white/70">
              No certificates added yet.
            </div>
          ) : (
            <>
              <div className="rounded-xl bg-white/5 p-4 border border-[#2DFF7A]/30 overflow-hidden">
                <div className="bg-white/10 rounded-lg overflow-hidden border border-[#2DFF7A]/20 flex items-center justify-center">
                  <img
                    src={certificates[certIndex].image}
                    alt={certificates[certIndex].title}
                    className="w-full h-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{certificates[certIndex].title}</h3>
                  <p className="text-sm text-[#2DFF7A] mt-1">{certificates[certIndex].issuer}</p>
                  <p className="text-sm text-white/60 mt-3">{certificates[certIndex].description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6">
                <button
                  aria-label="Previous certificate"
                  onClick={showPrevCert}
                  className="h-12 w-12 rounded-full bg-[#2DFF7A] text-black text-2xl flex items-center justify-center shadow hover:bg-[#22e36c]"
                >
                  ‹
                </button>
                <button
                  aria-label="Next certificate"
                  onClick={showNextCert}
                  className="h-12 w-12 rounded-full bg-[#2DFF7A] text-black text-2xl flex items-center justify-center shadow hover:bg-[#22e36c]"
                >
                  ›
                </button>
              </div>
            </>
          )}
        </section>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
