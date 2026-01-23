import sithuImage from "../assests/sithu.jpeg";
import Resume from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function Home() {
  const socialLinks = [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/sameepaa-badhuge-0343b4299",
      label: "LinkedIn",
    },
    {
      icon: "github",
      url: "https://github.com/sameepabadhuge",
      label: "GitHub",
    },
    {
      icon: "email",
      url: "mailto:sameepabadhuge2003@gmail.com",
      label: "Email",
    },
    {
      icon: "medium",
      url: "https://medium.com/@sameepabadhuge2003",
      label: "Medium",
    },
  ];

  // ✅ GitHub Pages + Vite
  const CV_URL = `${import.meta.env.BASE_URL}cv.pdf`;

  return (
    <div className="bg-[#0B1220]">
      {/* Home Section */}
      <section id="home">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-14 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-20 md:py-28"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                <AnimatedText text="Sameepa Badhuge" />
              </h1>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#10B981]">
                <AnimatedText text="I'm a Full Stack Developer" />
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              I am a passionate Full Stack Developer with experience in building modern
              web and mobile applications. I work with .NET, MERN stack, and React Native
              to create clean, scalable, and user-friendly solutions. I enjoy solving
              real-world problems and continuously improving my skills.
            </p>

            {/* CTA + Social */}
            <div className="flex flex-col items-stretch gap-8 pt-4 sm:flex-row sm:items-center">
              {/* CV Download */}
              <a
                href={CV_URL}
                download="Sameepa_Badhuge_CV.pdf"
                target="_blank"
                rel="noreferrer"
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
                    target="_blank"
                    rel="noreferrer"
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
              <img
                src={sithuImage}
                alt="Sameepa Badhuge"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Resume />
      </section>

      {/* Services */}
      <section id="services" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Services />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Portfolio />
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen scroll-mt-24 pt-20 pb-20">
        <Contact />
      </section>
    </div>
  );
}

/* ===== SOCIAL ICONS (REAL LOGOS) ===== */
function SocialIcon({ icon }) {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),

    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.86 3.16 8.98 7.55 10.43.55.1.76-.23.76-.52v-1.82c-3.07.67-3.72-1.3-3.72-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.7-1.47-2.45-.28-5.02-1.23-5.02-5.46 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.4.1-2.92 0 0 .92-.29 3.02 1.13.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.42 3.02-1.13 3.02-1.13.59 1.52.22 2.64.11 2.92.7.77 1.12 1.75 1.12 2.95 0 4.24-2.58 5.18-5.04 5.46.39.34.74 1.01.74 2.03v3.01c0 .29.2.63.76.52 4.39-1.45 7.55-5.57 7.55-10.43C23.25 5.48 18.27.5 12 .5z" />
      </svg>
    ),

    email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),

    medium: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.37 7.25c0-.4-.15-.77-.43-1.05L2.5 4.6V4.25h6.6l5.1 11.2 4.48-11.2H24v.35l-1.24 1.19c-.11.08-.17.22-.15.35v12.2c-.02.13.04.27.15.35l1.21 1.19v.35h-6.1v-.35l1.26-1.23c.12-.12.12-.15.12-.35V8.45L15.7 20.9h-.48L10 8.45v8.1c-.03.23.05.46.2.63l1.64 2v.35H7v-.35l1.64-2c.15-.17.22-.4.2-.63V7.25z" />
      </svg>
    ),
  };

  return icons[icon] || null;
}

/* ===== ANIMATED TEXT ===== */
function AnimatedText({ text }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="animated-letter"
          style={{ animationDelay: `${idx * 0.08}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
