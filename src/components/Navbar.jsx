import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `text-base font-medium ${
    isActive ? "text-[#10B981]" : "text-white/70 hover:text-white"
  }`;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Resume" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight" onClick={() => setIsOpen(false)}>
          <span>Port</span>
          <span className="text-[#10B981]">folio.</span>
        </NavLink>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-[#10B981]/50 hover:text-[#10B981] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b1220]/95 px-4 pb-6 pt-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-[#10B981]/10 text-[#10B981]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
