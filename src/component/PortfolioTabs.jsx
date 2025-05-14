import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaCertificate, FaLaptopCode, FaTools } from "react-icons/fa";

// Import tab content components
import ProjectsTab from "./PortfolioTabs/ProjectsTab";
import CertificatesTab from "./PortfolioTabs/CertificatesTab";
import InternshipTab from "./PortfolioTabs/InternshipTab";
import TechStackTab from "./PortfolioTabs/TechStackTab";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const tabs = [
    { id: "projects", label: "Projects", icon: <FaProjectDiagram size={24} /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate size={24} /> },
    { id: "internship", label: "Internship", icon: <FaLaptopCode size={24} /> },
    { id: "techstack", label: "Tech Stack", icon: <FaTools size={24} /> },
  ];

  const tabClass = (tab) =>
    `flex flex-col items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-center gap-1 rounded-xl text-sm sm:text-lg md:text-xl font-semibold transition-all duration-300 ease-in-out
     ${
       activeTab === tab
         ? "bg-purple-700 text-white shadow-md scale-105"
         : "bg-white/10 text-gray-300 hover:bg-purple-600 hover:text-white hover:shadow-lg"
     }`;

  return (
    <section id="portfolio" className="grid-background text-white px-4 md:px-20 py-12">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-3">Portfolio Showcase</h2>
      <p className="text-center text-gray-400 mb-10">
        Explore my journey through projects, certifications, internships, and tech stack.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 sm:px-6 py-6 mb-12 border border-purple-500 rounded-2xl bg-white/10 backdrop-blur-md shadow-md max-w-4xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={tabClass(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="transition-all duration-500 ease-in-out"
      >
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "certificates" && <CertificatesTab />}
        {activeTab === "internship" && <InternshipTab />}
        {activeTab === "techstack" && <TechStackTab />}
      </motion.div>
    </section>
  );
};

export default PortfolioTabs;
