import React from "react";
import { useEffect } from "react";



const MoreAboutMe = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen grid-background text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-purple-400 mb-6 drop-shadow">
          More About Me
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-10">
          👋 Hello! I'm <span className="text-purple-300 font-semibold">Aman Jarngal</span>, a passionate Computer Science Engineering student at Amritsar Group of Colleges. With a love for learning and an eye for design, I thrive on turning creative ideas into real-world digital solutions.
        </p>

        {/* Section: Education & Interests */}
        <div className="text-left text-lg text-gray-300 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">🎓 Academic Background</h2>
            <p>
              I'm currently pursuing my B.Tech in Computer Science Engineering. I have a deep interest in web development and constantly explore new tools, frameworks, and trends to enhance my knowledge and skills.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">🛠️ Technical Skills</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Framer Motion</li>
              <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
              <li><strong>Programming Languages:</strong> C, C++, Java</li>
              <li><strong>Currently Learning:</strong> Android Development</li>
            </ul>
          </div>

          {/* Section: Projects & Experience */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">💼 Projects & Experience</h2>
            <p>
              I have hands-on experience working as a web developer at <span className="text-purple-200 font-semibold">Renusharma Foundation</span> where I contributed to real-world projects that improved my development and teamwork skills.
            </p>
            <p>
              I'm also honored to be a <span className="text-purple-200 font-semibold">Contributor in GirlScript Summer of Code 2024 – Extended Edition</span>, where I actively contribute to open-source projects and collaborate with the community.
            </p>
          </div>

          {/* Section: Competitions & Growth */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">🏆 Competitions & Learning</h2>
            <p>
              I actively participate in various coding and project-building competitions. These challenges push me to grow, apply my skills in creative ways, and learn continuously from my peers and mentors.
            </p>
          </div>

          {/* Section: Personal Drive */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">💡 Vision & Passion</h2>
            <p>
              I'm driven by creativity, determination, and a love for technology. I enjoy learning new frameworks and applying them to solve real-world problems. With every line of code, I strive to create impactful digital solutions that are both functional and beautiful.
            </p>
            <p>
              My goal is to become a well-rounded software developer who can build scalable, user-focused applications across both web and mobile platforms.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <a
            href="/"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
