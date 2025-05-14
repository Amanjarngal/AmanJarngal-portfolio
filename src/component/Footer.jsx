import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <footer style={{ backgroundColor: "#0a0a23" }} className="text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo / Name */}
        <div className="flex flex-col items-start space-y-2">
          <h1 className="text-2xl font-bold">Aman Jarnagal</h1>
          <p className="text-sm text-blue-200">
            Passionate Full-Stack Developer crafting digital experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="#aboutme" className="hover:text-blue-300 transition">About</a>
          <a href="#projects" className="hover:text-blue-300 transition">Projects</a>
          <a href="#techstack" className="hover:text-blue-300 transition">Tech Stack</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
          
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Connect with me</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/Amanjarngal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aman-jarngal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedin />
            </a>
            <a href="mailto:amanjarngal2004@gmail.com" className="hover:text-blue-300">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/i___aman___00?igsh=bGJ0cnhkNmJxcGV4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 text-blue-200">
        © {new Date().getFullYear()} Aman Jarnagal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
