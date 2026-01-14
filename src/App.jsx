import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />        {/* default */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="mt-20 border-t border-white/10 py-6 text-center text-sm text-white/60">
        © 2026 Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
