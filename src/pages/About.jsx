import { useState } from 'react';

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-[#2DFF7A]">Me</span>
        </h1>

        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
           I am an undergraduate student at Uva Wellassa University of Sri Lanka, currently following the Bachelor of Information and Communication Technology (BICT) degree program. Through my academic studies and personal projects, I have gained a strong foundation in software development, problem-solving, and modern application design.
        </p>

        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
           I have hands-on experience working with .NET for backend development, MERN stack for full stack web applications, and React Native for cross-platform mobile development. I enjoy building complete applications from idea to implementation, focusing on clean code, performance, and user experience.
        </p>

        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
           As a motivated learner, I continuously improve my skills by practicing new technologies, building real-world projects, and exploring best development practices. My goal is to become a skilled Full Stack Developer and contribute to impactful software solutions while growing professionally in the tech industry.
        </p>

        {readMore && (
          <div className="space-y-4 rounded-lg bg-white/5 p-6 border border-[#2DFF7A]/30">
            <h2 className="text-xl font-semibold text-[#2DFF7A]">My Journey</h2>
            <ul className="space-y-3 text-base leading-relaxed text-white/70 sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#2DFF7A] mt-1">•</span>
                <span>Undergraduate ICT student at UWU</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2DFF7A] mt-1">•</span>
                <span>Focused on Full Stack & Mobile Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2DFF7A] mt-1">•</span>
                <span>Built academic & personal projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2DFF7A] mt-1">•</span>
                <span>Actively learning modern frameworks and tools</span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg pt-4">
              Beyond coding, I am passionate about exploring emerging technologies and their applications in solving real-world problems. I have worked on several projects that showcase my ability to design and implement scalable solutions.
            </p>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              I believe in the power of continuous learning and collaboration. I enjoy working in teams, sharing knowledge, and contributing to projects where I can make a meaningful impact. My technical skills are complemented by strong communication and problem-solving abilities.
            </p>
          </div>
        )}

        <button 
          onClick={() => setReadMore(!readMore)}
          className="inline-flex rounded-full bg-[#2DFF7A] px-7 py-3 text-base font-semibold text-black transition hover:bg-[#1dd85f]"
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
