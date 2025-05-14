import React, { useState } from "react";

const InternshipTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section id="internship" data-aos="flip-up">
      {/* <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-8">
        Internship Experience
      </h3> */}

      <div
        onClick={toggleExpand}
        className={`cursor-pointer bg-white/10 p-6 rounded-xl border border-purple-500 text-white backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_#a855f7] hover:bg-white/20 
        ${isExpanded ? "max-h-[1000px]" : "max-h-40 overflow-hidden"}
        `}
      >
        {/* Main Info */}
        <h4 className="text-xl font-bold text-purple-300 mb-1">
          Company: <span className="text-pink-400">Renu Sharma Foundation</span>
        </h4>
        <p className="text-sm text-purple-200">
          <span className="font-medium text-white">Position:</span> Web Developer Intern
        </p>
        <p className="text-sm text-purple-200 mb-2">
          <span className="font-medium text-white">Tenure:</span> 5th Feb 2025 - 5th May 2025 (3 Months)
        </p>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mt-4">
            <div className="mb-4">
              <h5 className="font-semibold text-pink-300 mb-1">📌 Experience Summary:</h5>
              <p className="text-sm text-gray-200 leading-relaxed">
               During this internship, I gained firsthand experience in understanding how an IT company and NGO operate from the inside. I learned how tasks are divided among teams, how collaboration plays a critical role in real-time projects, and how proper coordination shapes a successful product. I worked specifically on their main website — contributing to UI improvements, bug fixes, and feature integrations. It was a great learning experience where I not only absorbed new knowledge but also shared some of my own. The culture was collaborative, and I truly realized the importance of teamwork and communication.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="font-semibold text-pink-300 mb-1">🛠️ Skills & Technologies Used:</h5>
              <ul className="list-disc list-inside text-sm space-y-1 text-purple-200">
                <li>ReactJS</li><li>Tailwind CSS</li>
                <li>Express js</li>
                <li>Git & GitHub</li>
                <li>Node js</li>
                <li>Mongoodb</li>
                <li>Frame Motion</li>
              </ul>
            </div>
            
          </div>
        )}

        {/* Toggle Indicator */}
        <div className="text-center mt-4 text-sm italic text-purple-400">
          {isExpanded ? "Click to collapse ▲" : "Click to expand ▼"}
        </div>
      </div>
    </section>
  );
};

export default InternshipTab;
