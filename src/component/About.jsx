import React from "react";
import CountUp from "react-countup";



import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaCertificate, FaGlobe } from "react-icons/fa";
import myPhoto from "../assets/aj.jpeg";


// Animation Variants
const fadeLeftVariant = {
  hidden: { opacity: 0, x: -80, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stats data
const stats = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-purple-500 mb-2" />,
    number: 8, // Numeric
    title: "Total Projects",
    description: "Innovative web solutions crafted",
   onClick: () => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    },

  },
  {
    id: 2,
    icon: <FaCertificate className="text-4xl text-purple-500 mb-2" />,
    number: 7, // Numeric
    title: "Certificates",
    description: "Professional skills validated",
    onClick: () => {
      document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 3,
    icon: <FaGlobe className="text-4xl text-purple-500 mb-2" />,
    number: "3", // No count for string
    title: "Months of Experience",
    description: "Continuous learning journey",
     onClick: () => {
      document.getElementById("internship")?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

const About = () => {

  
  // Animations
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const headerControls = useAnimation();

  const [textRef, textInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const textControls = useAnimation();

  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const imageControls = useAnimation();

  // Effect Hooks
  React.useEffect(() => {
    headerInView ? headerControls.start("visible") : headerControls.start("hidden");
  }, [headerInView, headerControls]);

  React.useEffect(() => {
    textInView ? textControls.start("visible") : textControls.start("hidden");
  }, [textInView, textControls]);

  React.useEffect(() => {
    imageInView ? imageControls.start("visible") : imageControls.start("hidden");
  }, [imageInView, imageControls]);

  return (
    <section
      id="aboutme"
      className="w-full py-20 px-6 mx-auto grid md:grid-cols-1 gap-8 items-center text-white font-sans"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerControls}
          className="text-4xl font-bold text-purple-400"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          animate={headerControls}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-2 text-lg italic"
        >
          Building beautiful web experiences one line of code at a time 💻✨
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          ref={textRef}
          variants={fadeLeftVariant}
          initial="hidden"
          animate={textControls}
          className="space-y-6 ml-6 md:ml-20"
        >
          <h3 className="text-5xl md:text-6xl font-extrabold text-purple-500 leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.4)]">
            Hello, I'm
          </h3>
          <p className="text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
            Aman Jarngal
          </p>
          <p className="text-gray-300 leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]">
            A dedicated Web Developer with a passion for creating intuitive, dynamic, and responsive web applications.
            I specialize in Front-End and Back-End development and enjoy crafting digital products that deliver seamless user experiences.
          </p>
          <Link
            to="/more-about-me"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-lg transition"
          >
            🚀 More About Me
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          variants={fadeRightVariant}
          initial="hidden"
          animate={imageControls}
          className="flex justify-center"
        >
          <img
            src={myPhoto}
            alt="Aman Jarngal"
            className="rounded-full w-96 h-96 object-cover border-4 border-purple-600 shadow-[5px_-10px_30px_rgba(128,90,213,0.6)]"
          />
        </motion.div>
      </div>

      {/*------------------------------- Stats Section----------------------------------------------- */}
   <motion.div
  className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20 px-4"
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.3 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }}
>
  {stats.map(({ id, icon, number, title, description, onClick }, index) => {
    const directionVariants = {
      hidden:
        index === 0
          ? { opacity: 0, x: -80 }
          : index === 1
          ? { opacity: 0, y: 80 }
          : { opacity: 0, x: 80 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.div
  key={id}
  variants={directionVariants}
  whileHover={{ scale: 1.05 }}
  onClick={onClick}
  className="w-full md:w-[100%] bg-white/10 backdrop-blur-lg border border-purple-400 p-8 rounded-xl shadow-lg hover:shadow-purple-500/40 transition cursor-pointer mx-auto"
>
  {/* Icon + Number in row */}
  <div className="flex items-center gap-4 mb-3">
    <div className="text-4xl text-purple-500">{icon}</div>
    <h3 className="text-4xl font-extrabold text-purple-300">
      {typeof number === "number" ? (
        <CountUp start={0} end={number} duration={5} />

      ) : (
        number
      )}
    </h3>
  </div>

  <p className="text-lg font-semibold mt-2">{title}</p>
  <p className="text-gray-300 text-sm mt-1">{description}</p>
</motion.div>

    );
  })}
</motion.div>


    </section>
  );
};

export default About;
