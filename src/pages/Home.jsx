export default function Home() {
  const socialLinks = [
    { icon: "facebook", url: "#", label: "Facebook" },
    { icon: "linkedin", url: "#", label: "LinkedIn" },
    { icon: "youtube", url: "#", label: "YouTube" },
    { icon: "github", url: "#", label: "GitHub" },
  ];

  return (
    <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-14 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-20 md:py-28">
      {/* Left Content */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Tim Knoll
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2DFF7A]">
            I'm a Frontend Developer
          </h2>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aliquam voluptates, tempora, ratione libero saepe voluptatibus et, necessitatibus nisl temporibus optio. Velit, enim tempora. Est voluptate eveniet magni laborum labore beatae.
        </p>

        {/* CTA and Social */}
        <div className="flex flex-col items-stretch gap-8 pt-4 sm:flex-row sm:items-center">
          <button className="w-full rounded-full bg-[#2DFF7A] px-8 py-4 text-center text-lg font-bold text-black shadow-lg transition duration-300 hover:bg-[#1dd85f] sm:w-auto">
            Download CV
          </button>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                aria-label={link.label}
                className="w-12 h-12 rounded-full border-2 border-[#2DFF7A]/50 flex items-center justify-center text-[#2DFF7A] hover:bg-[#2DFF7A]/10 hover:border-[#2DFF7A] transition duration-300"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#2DFF7A] sm:h-80 sm:w-80 md:h-96 md:w-96">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2DFF7A]/40 via-[#1a4d2e] to-[#0b1220]">
            <img
              src="https://via.placeholder.com/400/2DFF7A/0b1220?text=Profile+Photo"
              alt="Tim Knoll - Frontend Developer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  const icons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  };

  return icons[icon] || null;
}
