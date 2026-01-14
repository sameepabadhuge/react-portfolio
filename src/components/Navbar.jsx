import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive
      ? "text-[#2DFF7A]"
      : "text-white/70 hover:text-white"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1220]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">
          <span>Port</span>
          <span className="text-[#2DFF7A]">folio.</span>
        </NavLink>

        <nav className="flex gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
