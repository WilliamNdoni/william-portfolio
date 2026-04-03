import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-purple-900 font-bold text-lg">William Ndoni</h1>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-6 list-none">
        <li><a href="#about" className="hover:text-purple-900 transition-all">About</a></li>
        <li><a href="#skills" className="hover:text-purple-900 transition-all">Skills</a></li>
        <li><a href="#works" className="hover:text-purple-900 transition-all">Works</a></li>
        <li><a href="#experience" className="hover:text-purple-900 transition-all">Experience</a></li>
        <li><a href="#contact" className="hover:text-purple-900 transition-all">Contact</a></li>
      </ul>

      {/* Mobile hamburger */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full flex flex-col gap-4 px-6 py-4 list-none shadow-md md:hidden bg-white/95 backdrop-blur-sm">
          <li className="border-b border-black/20 py-2">
          <a href="#about" onClick={() => setOpen(false)}className="block w-full">About</a></li>
          <li className="border-b border-black/10 py-2">
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li className="border-b border-black/20 py-2">
          <a href="#works" onClick={() => setOpen(false)}>Works</a></li>
          <li className="border-b border-black/20 py-2">
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li className="border-b border-black/20 py-2">
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;