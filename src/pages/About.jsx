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

export default function Resume() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'My Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24">
      <div className="space-y-8 text-center md:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl">
          My <span className="text-[#2DFF7A]">Resume</span>
        </h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? 'bg-[#2DFF7A] text-black'
                  : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* About Me Section */}
        {activeTab === 'about' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            About <span className="text-[#2DFF7A]">Me</span>
          </h2>
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
            <span className="text-[#2DFF7A]">Certificates</span> & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="rounded-lg bg-white/5 p-4 border border-[#2DFF7A]/30 overflow-hidden">
                {/* Certificate Image */}
                <div className="mb-4 bg-white/10 rounded-lg overflow-hidden h-48 flex items-center justify-center border border-[#2DFF7A]/20">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-white/40 text-center hidden" id={`placeholder-${index}`}>
                    <p className="text-sm">Certificate Image</p>
                  </div>
                </div>
                
                {/* Certificate Info */}
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="text-sm text-[#2DFF7A] mt-1">{cert.issuer}</p>
                  <p className="text-sm text-white/60 mt-3">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Achievements Section */}
        {activeTab === 'achievements' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            My <span className="text-[#2DFF7A]">Achievements</span>
          </h2>
          <div className="space-y-4 rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#2DFF7A]">🏆</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Academic Excellence</h3>
                <p className="text-sm text-white/70 mt-2">Consistently maintained high academic performance throughout my undergraduate studies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#2DFF7A]">💼</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Project Development</h3>
                <p className="text-sm text-white/70 mt-2">Successfully completed multiple full-stack and mobile development projects from conception to deployment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#2DFF7A]">🚀</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Continuous Learning</h3>
                <p className="text-sm text-white/70 mt-2">Actively pursuing certifications and mastering new technologies to stay current with industry standards.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#2DFF7A]">👥</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
                <p className="text-sm text-white/70 mt-2">Worked effectively in team environments, contributing ideas and supporting peers to achieve common goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#2DFF7A]">⭐</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Problem Solving</h3>
                <p className="text-sm text-white/70 mt-2">Demonstrated strong analytical and problem-solving skills in tackling complex technical challenges.</p>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
