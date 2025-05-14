import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="w-full pt-14 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <motion.span
            className="text-sm bg-purple-800 px-4 py-1 rounded-full inline-block mb-4 shadow-md"
            custom={1}
            variants={fadeInUp}
          >
            🚀 Ready to Innovate
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]"
            custom={2}
            variants={fadeInUp}
          >
            Web <span className="text-purple-500">Developer</span>
          </motion.h1>

          <motion.h2
            className="text-xl mb-4 text-gray-300 drop-shadow"
            custom={3}
            variants={fadeInUp}
          >
            <span>Tech Enthusiast | </span>
            <Typewriter
              words={["Creative Thinker", "Complexity Breaker", "Deadline Beater", "Problem Solver"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-6 max-w-lg"
            custom={4}
            variants={fadeInUp}
          >
            Transforming ideas into beautiful, high-performance websites focused on usability, accessibility, and exceptional user experience,Blending creativity with code to create interfaces that are intuitive and visually striking.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-6 pl-6"
            custom={5}
            variants={fadeInUp}
          >
            <a
              href="#projects"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 drop-shadow"
            >
              Projects ↗
            </a>
            <a
              href="#contact"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 drop-shadow"
            >
              Contact ✉
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-6 text-3xl text-gray-400 pl-20"
            custom={6}
            variants={fadeInUp}
          >
            <a href="https://github.com/Amanjarngal" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aman-jarngal/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/i___aman___00?igsh=bGJ0cnhkNmJxcGV4" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInFromRight}
        >
          <img
            src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_6804917.png"
            alt="Developer"
            className="w-[90%] md:w-[80%] lg:w-[80%] drop-shadow-[20px_10px_20px_rgba(255,255,255,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
