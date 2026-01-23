import { useState } from "react";
import softwareDevelopment from "../assests/1.png";
import Web from "../assests/webDesign.png";
import Frontend from "../assests/frontend.png";
import Python1 from "../assests/python.png";
import Linux from "../assests/linux.png";
import Docker from "../assests/docker.png";

const certificates = [
  {
    title: "Introduction to career skills in Software  Development",
    issuer: "LinkedIn Learning",
    description:
      "Top skills covered include software development, Career Management and Tech Career Skills.",
    image: softwareDevelopment,
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    description:
      "Completed an introductory course on web design covering HTML, CSS, basic JavaScript, responsive layouts, and modern UI/UX principles.",
    image: Web,
  },
  {
    title: "Frontend Development Certificate",
    issuer: "Online Course",
    description:
      "Certificate for frontend development covering React, HTML, CSS and responsive layouts.",
    image: Frontend,
  },
  {
    title: "Python Programming Certificate",
    issuer: "Online Course",
    description:
      "Certificate for completing a Python fundamentals and scripting course.",
    image: Python1,
  },
  {
    title: "Linux Fundamentals Certificate",
    issuer: "Online Course",
    description:
      "Certificate demonstrating proficiency in basic Linux commands and system usage.",
    image: Linux,
  },
  {
    title: "Docker Basics Certificate",
    issuer: "Online Course",
    description:
      "Certificate for Docker containerization fundamentals and practical usage.",
    image: Docker,
  },
  {
    title: "Uva Wellassa University - BICT Degree",
    issuer: "In Progress (Expected 2027)",
    description:
      "Bachelor of Information and Communication Technology with focus on software development and modern technologies.",
  },
];

const experiences = [
  {
    title: "Software Developer",
    org: "University / Personal Projects",
    bullets: [
      "Frontend: React, responsive UI, modern CSS",
      "Backend: .NET & Node.js (REST APIs, Auth, DB logic)",
      "Full Stack: End-to-end web apps",
      "Mobile: React Native cross-platform apps",
    ],
    highlight: true,
  },
  {
    title: "QuizMaster – Online Quiz Management System",
    org: "Project",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "MCQ quiz platform for students & teachers",
      "Role-based access for quizzes and users",
      "React frontend + Node/Express APIs",
      "Secure auth + MongoDB integration",
      "Tech: React, Node.js, Express, MongoDB, JWT, Tailwind",
    ],
  },
  {
    title: "EMS – Education Management System",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "ASP.NET Core system for teachers, parents, students",
      "Attendance tracking + academic data management",
      "Tech: ASP.NET Core, RBAC",
    ],
  },
  {
    title: "CityCare – Smart City Issue Reporting System",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "ASP.NET Core app to report & track city issues",
      "REST APIs + database design for real-world workflows",
      "Tech: ASP.NET Core, REST APIs, SQL/DB Design",
    ],
  },
  {
    title: "ServeLanka – Service & Job Marketplace App",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "Cross-platform app for service providers & seekers",
      "Auth, profiles, real-time data with Firebase",
      "Tech: React Native, Firebase",
    ],
  },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const [certIndex, setCertIndex] = useState(0);

  const showPrevCert = () => {
    if (!certificates.length) return;
    setCertIndex((i) => (i - 1 + certificates.length) % certificates.length);
  };

  const showNextCert = () => {
    if (!certificates.length) return;
    setCertIndex((i) => (i + 1) % certificates.length);
  };

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About me" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why <span className="text-[#10B981]">hire me?</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto lg:mx-0">
            Focused on building clean, responsive web & mobile applications with modern stacks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Tabs */}
          <div className="w-full lg:w-72">
            {/* Mobile: horizontal scroll chips */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-[#10B981] text-black shadow"
                      : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop: vertical */}
            <div className="hidden lg:flex lg:flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold text-left transition-all ${
                    activeTab === tab.id
                      ? "bg-[#10B981] text-black shadow-lg shadow-[#10B981]/20"
                      : "bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Experience */}
            {activeTab === "experience" && (
              <section className="space-y-4 sm:space-y-6">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      exp.highlight
                        ? "bg-[#10B981]/10 border-[#10B981] shadow-lg shadow-[#10B981]/10"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    } p-4 sm:p-6`}
                  >
                    <div className="space-y-1">
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                        {exp.title}
                      </h2>

                      <p className="text-[#10B981] text-xs sm:text-sm font-medium">
                        {exp.org}
                        {exp.period ? ` • ${exp.period}` : ""}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2 text-white/80 text-sm sm:text-base">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#10B981] mt-[3px] shrink-0">•</span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {/* About */}
            {activeTab === "about" && (
              <section className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  About <span className="text-[#10B981]">Me</span>
                </h2>

                <div className="rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10">
                  <p className="text-sm sm:text-base leading-relaxed text-white/70">
                    I am a BICT undergraduate at Uva Wellassa University of Sri Lanka. I build web
                    and mobile apps with modern stacks, focusing on clean UI, performance, and
                    real-world problem solving.
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
                    I work with .NET, MERN stack, and React Native, and I enjoy building complete
                    solutions from idea to deployment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Profile
                    </h3>
                    <div className="mt-3 space-y-2 text-white/70 text-sm">
                      <p>
                        <span className="text-white">Name:</span>{" "}
                        <span className="font-semibold">Sameepa Badhuge</span>
                      </p>
                      <p>
                        <span className="text-white">Age:</span>{" "}
                        <span className="font-semibold">22</span>
                      </p>
                      <p>
                        <span className="text-white">Location:</span>{" "}
                        <span className="font-semibold">Sri Lanka</span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Contact
                    </h3>
                    <div className="mt-3 space-y-2 text-white/70 text-sm">
                      <p>
                        <span className="text-white">Phone:</span>{" "}
                        <span className="font-semibold">070-2256830</span>
                      </p>
                      <p>
                        <span className="text-white">Email:</span>{" "}
                        <span className="font-semibold">sameepabadhuge2003@gmail.com</span>
                      </p>
                      <p>
                        <span className="text-white">Languages:</span>{" "}
                        <span className="font-semibold">English, Sinhala</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* Skills */}
            {activeTab === "skills" && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  My <span className="text-[#10B981]">Skills</span>
                </h2>

                <div className="space-y-5">
                  {/* Programming Languages */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Python', 'PHP', 'Java', 'JavaScript', 'HTML', 'CSS', 'C#', 'SQL'].map((lang, idx) => (
                        <div key={lang} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React.js', 'HTML5', 'CSS3', 'Responsive UI Design'].map((tech, idx) => (
                        <div key={tech} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs'].map((tech, idx) => (
                        <div key={tech} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Mobile</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React Native', 'Expo'].map((tech, idx) => (
                        <div key={tech} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Databases</h3>
                    <div className="flex flex-wrap gap-3">
                      {['MySQL', 'MongoDB', 'SQLite','SQL Server', 'Firebase'].map((db, idx) => (
                        <div key={db} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{db}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Postman', 'VS Code', 'Figma', 'Git', 'GitHub'].map((tool, idx) => (
                        <div key={tool} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Concepts */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Concepts & Security</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Version Control', 'MVC', 'OOP', 'JWT', 'Role-Based Access Control', 'Encryption-Decryption'].map((concept, idx) => (
                        <div key={concept} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{concept}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Problem-solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability'].map((skill, idx) => (
                        <div key={skill} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981]/50 transition-all hover:scale-105">
                          <span className="text-[#10B981] text-sm">●</span>
                          <span className="text-white/80 group-hover:text-white text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Certificates */}
            {activeTab === "certificates" && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-[#10B981]">Certificates</span>
                </h2>

                {!certificates.length ? (
                  <div className="rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10 text-white/70">
                    No certificates added yet.
                  </div>
                ) : (
                  <>
                    <div className="rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10">
                      {certificates[certIndex].image && (
                        <div className="mx-auto max-w-xs sm:max-w-sm bg-white/10 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-3 sm:p-4">
                          <img
                            src={certificates[certIndex].image}
                            alt={certificates[certIndex].title}
                            className="w-full h-auto object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      )}

                      <div className="mt-4">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {certificates[certIndex].title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#10B981] mt-1">
                          {certificates[certIndex].issuer}
                        </p>
                        <p className="text-sm text-white/60 mt-3 leading-relaxed">
                          {certificates[certIndex].description}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-3">
                        <button
                          aria-label="Previous certificate"
                          onClick={showPrevCert}
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#10B981] text-black text-xl flex items-center justify-center shadow hover:bg-[#2DD4BF]"
                        >
                          ‹
                        </button>
                        <button
                          aria-label="Next certificate"
                          onClick={showNextCert}
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#10B981] text-black text-xl flex items-center justify-center shadow hover:bg-[#2DD4BF]"
                        >
                          ›
                        </button>
                      </div>
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
