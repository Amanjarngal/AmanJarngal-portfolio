import { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="grid-background min-h-[80px] text-white shadow-md  top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">

        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://t4.ftcdn.net/jpg/03/01/07/77/360_F_301077705_oerlPhfTjRuL6obvSNe9tWKL6I3ID7hr.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl font-bold text-white">Aman</span>
        </div>

        {/* Center: Nav Links */}
      <ul className="hidden md:flex space-x-10 text-white font-semibold text-lg">
  {["Home", "About Me", "Portfolio"].map((item, index) => (
    <li key={index}>
      <a
        href={`#${item.toLowerCase().replace(" ", "")}`}
        className="hover:underline underline-offset-8 transition-all duration-300"
      >
        {item}
      </a>
    </li>
  ))}
</ul>


        {/* Right: Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 text-sm font-semibold transition"
        >
          Contact Us
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden text-3xl text-blue-500 cursor-pointer">
          {menuOpen ? (
            <CgClose onClick={() => setMenuOpen(false)} />
          ) : (
            <CgMenuRightAlt onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden  px-6 pb-4 text-center shadow-md bg-black-900 min-h-[80px] text-white">
          <a href="#home" className="block py-2  font-medium">Home</a>
          <a href="#aboutme" className="block py-2  font-medium">About Me</a>
          <a href="#portfolio" className="block py-2  font-medium">Portfolio</a>
          <a href="#contact" className="block py-2 text-white bg-purple-500 rounded-full mt-2 hover:bg-purple-700">
            Contact Us
          </a>
        </div>
        
      )}
    </nav>
    
  );
};

export default Navbar;
