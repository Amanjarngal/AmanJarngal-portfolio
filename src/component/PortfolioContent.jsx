import React from "react";
import PortfolioTabs from "./PortfolioTabs";

const PortfolioContent = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f051d] to-[#0c0715] text-white px-4 md:px-20 py-10">
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
        Portfolio Showcase
      </h2>
      <p className="text-center text-gray-300 mb-10">
        Explore my journey through projects, certifications, and technical expertise.
      </p>

      <PortfolioTabs />

      {/* PROJECTS */}
      <div id="projects" className="mt-20">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Example Card */}
          <div className="bg-white/10 p-6 rounded-lg border border-purple-400">
            <h4 className="text-xl font-bold mb-2 text-white">Weather App</h4>
            <p className="text-sm text-gray-300">A live weather forecast app using OpenWeather API and React.</p>
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div id="certificates" className="mt-20">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Certificates</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Frontend Development - Coursera</li>
          <li>JavaScript Algorithms - freeCodeCamp</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div id="techstack" className="mt-20">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Tech Stack</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {/* Example Tech Card */}
          <div className="bg-[#1e1b2e] rounded-lg p-4 text-center">
            <img src="/html.png" alt="HTML" className="h-12 mx-auto" />
            <p className="mt-2 text-sm">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
