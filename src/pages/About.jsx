import { useState } from 'react';
import softwareDevelopment from '../assests/1.png';
import Web from '../assests/webDesign.png';
import Frontend from '../assests/frontend.png';
import Python1 from '../assests/python.png';
import Linux from '../assests/linux.png';
import Docker from '../assests/docker.png';



const certificates = [
  {
    title: "Introduction to career skills in Software  Development",
    issuer: "LinkedIn Learning",
    description: "Top skills covered include software development, Career Management and Tech Career Skills.",
    image: softwareDevelopment,
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    description: "Completed an introductory course on web design covering HTML, CSS, basic JavaScript, responsive layouts, and modern UI/UX principles. Gained hands-on experience in building simple, user-friendly web pages and understanding core web design best practices.",
    image: Web,
  },
  {
    title: "Frontend Development Certificate",
    issuer: "Online Course",
    description: "Certificate for frontend development covering React, HTML, CSS and responsive layouts.",
    image: Frontend,
  },
  {
    title: "Python Programming Certificate",
    issuer: "Online Course",
    description: "Certificate for completing a Python fundamentals and scripting course.",
    image: Python1,
  },
  {
    title: "Linux Fundamentals Certificate",
    issuer: "Online Course",
    description: "Certificate demonstrating proficiency in basic Linux commands and system usage.",
    image: Linux,
  },
  {
    title: "Docker Basics Certificate",
    issuer: "Online Course",
    description: "Certificate for Docker containerization fundamentals and practical usage.",
    image: Docker,
  },
  
 
  {
    title: "Uva Wellassa University - BICT Degree",
    issuer: "In Progress (Expected 2027)",
    description: "Bachelor of Information and Communication Technology with focus on software development and modern technologies.",
    
  },
  
];

const experiences = [
  {
    title: "Software Developer",
    org: "University / Personal Projects",
    bullets: [
      "Frontend Developer: Built responsive and user-friendly interfaces using React and modern CSS",
      "Backend Developer (.NET & Node.js): Developed REST APIs, authentication systems, and database logic",
      "Full Stack Developer: Designed and implemented complete web applications end-to-end",
      "Mobile App Developer: Developed cross-platform mobile applications using React Native",
    ],
    highlight: true,
  },
  {
    title: "QuizMaster – Online Quiz Management System",
    org: "Project",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Developed a full-stack MCQ-based online quiz platform for students and teachers",
      "Implemented role-based access control for managing quizzes and users",
      "Built a responsive frontend using React and developed optimized backend APIs using Node.js & Express",
      "Integrated secure authentication and MongoDB database",
      "Technologies: React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
    ],
  },
  {
    title: "EMS – Employee Management System",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "Developed a full-stack Education Management System using ASP.NET Core with role-based access for teachers, parents, and students",
      "Implemented attendance tracking and academic data management features",
      "Technologies: ASP.NET Core, Role-Based Access Control",
    ],
  },
  {
    title: "CityCare – Smart City Issue Reporting System",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "Developed a web-based application using ASP.NET Core to report and track city issues",
      "Implemented REST APIs and structured database schemas focusing on real-world problem solving",
      "Technologies: ASP.NET Core, REST APIs, Database Design",
    ],
  },
  {
    title: "ServeLanka - Service & Job Marketplace mobile App",
    org: "Project",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing a cross-platform mobile application connecting service providers and service seekers",
      "Implemented authentication, profiles, and real-time data handling using Firebase",
      "Technologies: React Native, Firebase, Cross-Platform Mobile Development",
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
      <div className="space-y-8 md:space-y-10">
        <h1 className="text-4xl font-bold sm:text-5xl text-center md:text-left tracking-tight">
          Why <span className="text-[#2DFF7A]">hire me?</span>
        </h1>

        {/* Tab Navigation (vertical stack) */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-row lg:flex-col w-full lg:w-72 gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-[#2DFF7A] text-black shadow-lg shadow-[#2DFF7A]/20'
                    : 'bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
                } px-6 py-4 rounded-2xl text-base font-semibold text-left transition-all duration-200`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 space-y-6">

        {/* Experience Section */}
        {activeTab === 'experience' && (
        <section className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-200 ${
                exp.highlight 
                  ? 'bg-[#2DFF7A]/10 border-[#2DFF7A] shadow-lg shadow-[#2DFF7A]/10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{exp.title}</h2>
                <p className="text-[#2DFF7A] text-sm sm:text-base font-medium">{exp.org} • {exp.period}</p>
              </div>
              <ul className="mt-6 space-y-3 text-white/80 text-sm sm:text-base">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#2DFF7A] mt-1 shrink-0">▸</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        )}

        {/* About Me Section */}
        {activeTab === 'about' && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            About <span className="text-[#2DFF7A]">Me</span>
          </h2>
          {/* Original detailed description */}
          <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-[#2DFF7A]/30 space-y-5 shadow-lg">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10 hover:border-[#2DFF7A]/50 transition-all duration-200">
             
              <p className="mt-3 text-white/80">
                BICT undergraduate with a strong passion for full-stack development and building real-world web and mobile applications.
              </p>
              <div className="mt-4 space-y-2 text-white/70 text-sm">
                <p><span className="text-white">Name:</span> <span className="font-semibold">Sameepa Badhuge</span></p>
                <p><span className="text-white">Experience:</span> <span className="font-semibold">22 Years old</span></p>
                <p><span className="text-white">Nationality:</span> <span className="font-semibold">Sri Lankan</span></p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10 hover:border-[#2DFF7A]/50 transition-all duration-200">
              <h3 className="text-xl font-semibold text-white">Contact</h3>
              <div className="mt-3 space-y-2 text-white/70 text-sm">
                <p><span className="text-white">Phone:</span> <span className="font-semibold">070-2256830</span></p>
                <p><span className="text-white">Email:</span> <span className="font-semibold">sameepabadhuge2003@gmail.com</span></p>
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
                <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md bg-white/10 rounded-lg overflow-hidden border border-[#2DFF7A]/20 flex items-center justify-center p-4">
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
