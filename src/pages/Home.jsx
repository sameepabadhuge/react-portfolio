import sithuImage from '../assests/sithu.jpeg';
import Resume from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { motion } from 'framer-motion';


export default function Home() {
  const socialLinks = [
    { icon: "linkedin", url: "https://www.linkedin.com/in/sameepaa-badhuge-0343b4299", label: "LinkedIn" },
    { icon: "github", url: "https://github.com/sameepabadhuge", label: "GitHub" },
    { icon: "email", url: "mailto:sameepabadhuge2003@gmail.com", label: "Email" },
    { icon: "medium", url: "https://medium.com/@sameepabadhuge2003", label: "Medium" },
  ];

  return (
    <div className="bg-[#0B1220]">
      {/* Home Section */}
      <section id="home">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-14 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-20 md:py-28"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <AnimatedText text="Sameepa Badhuge" />
              </h1>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#10B981]">
                <AnimatedText text="I'm a Full Stack Developer" />
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              I am a passionate Full Stack Developer with experience in building modern web and mobile applications. I work with .NET, MERN stack, and React Native to create clean, scalable, and user-friendly solutions. I enjoy solving real-world problems through code and continuously improving my skills by learning new technologies.
            </p>

            {/* CTA and Social */}
            <div className="flex flex-col items-stretch gap-8 pt-4 sm:flex-row sm:items-center">
              <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`} 
                download="Sameepa_Badhuge_CV.pdf"
                className="w-full rounded-full bg-[#10B981] px-8 py-4 text-center text-lg font-bold text-black shadow-lg transition duration-300 hover:bg-[#2DD4BF] sm:w-auto"
              >
                Download CV
              </a>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    aria-label={link.label}
                    className="w-12 h-12 rounded-full border-2 border-[#10B981]/50 flex items-center justify-center text-[#10B981] hover:bg-[#10B981]/10 hover:border-[#10B981] transition duration-300"
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#10B981] sm:h-80 sm:w-80 md:h-96 md:w-96">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#10B981]/40 via-[#1a4d2e] to-[#0b1220]">
                <img
                  src={sithuImage}
                  alt="Sameepa Badhuge - Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Resume />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Contact />
      </section>


    </div>
  );
}

function SocialIcon({ icon }) {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    medium: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  };

  return icons[icon] || null;
}

function AnimatedText({ text }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split('').map((char, idx) => (
        <span
          key={`${char}-${idx}`}
          className="animated-letter"
          style={{ animationDelay: `${idx * 0.08}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
