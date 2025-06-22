import React from "react";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import TaskManager from "../../assets/Taskmanagement.png"
import  Bankiizard from "../../assets/Bankiizard.png"
import TourGuid from "../../assets/TourGuid.png"
import Fest from "../../assets/Fest.png"
import p from "../../assets/p.png"
import new1 from "../../assets/new.png"
import Text from "../../assets/texteditor.png"
const projects = [
   {
    name: "FestPass Scanner",
    image: Fest,
    github: "https://github.com/Amanjarngal/FestPass-Scanner",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_mern-webdevelopment-reactjs-activity-7341564600061972480-3q_G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://festpass-scanner.netlify.app/",
  },
  {
    name: "AmanJarngal-portfolio",
    image: p,
    github: "https://github.com/Amanjarngal/AmanJarngal-portfolio",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_webdevelopment-reactjs-tailwindcss-activity-7328512483202097152-Qk98?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://melodic-pika-161407.netlify.app/",
  },
  {
    name: "Portfolio Website",
    image: new1,
    github: "https://github.com/Amanjarngal/Portfolio",
    linkedin:
      "https://www.linkedin.com/posts/aman-jarngal_this-portfolio-website-is-a-personal-project-activity-7285375960638537728-WuOH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://wondrous-chebakia-3a07b6.netlify.app/",
  },
  {
    name: "Text Editor",
    image: Text,
    github: " https://github.com/Amanjarngal/TextEditor",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_this-project-is-a-fully-customizable-text-activity-7280168648114151424-4zhF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://lustrous-salamander-7014ce.netlify.app/",
  },
  {
    name: "TourGuide Website",
    image: TourGuid,
    github: " https://github.com/Amanjarngal/TourGuide",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_explorewithusonline-bookyouradventure-guidedtourexperience-activity-7241144522896728065-bfCM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://tour-guide-three.vercel.app/",
  },
  {
    name: "Bankiizard",
    image: Bankiizard,
    github: "https://github.com/Amanjarngal/Bankiizard",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_frontenddevelopment-currencyconverter-financialnews-activity-7208784757076226049-qv8e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://bankiizard.onrender.com/",
  },
  {
    name: "task-management-app",
    image: TaskManager,
    github: "https://github.com/Amanjarngal/task-management-app",
    linkedin: "https://www.linkedin.com/posts/taskmanager",
    live: "https://dainty-bunny-82491a.netlify.app/",
  },

  // Add more projects here if needed
];

const ProjectsTab = () => {
  return (
    <section id="projects" data-aos="fade-right">
      {/* Disclaimer */}
     <p className="text-sm text-center text-purple-300 italic mb-2">
  📌 For more details about each project, check the GitHub repo or LinkedIn post.
</p>
<br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 border border-purple-400 rounded-xl p-4 shadow-md hover:shadow-[0_0_20px_#a855f7] backdrop-blur-md transition duration-300"
          >
           <img
                src={project.image}
                alt={project.name}
                className="rounded-md w-full h-40 object-contain mb-3 transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
            <h4 className="text-lg font-semibold text-white mb-2 text-center">{project.name}</h4>
            <div className="flex justify-center gap-6 mt-2 text-purple-300 text-xl">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                title="GitHub Repo"
              >
                <FaGithub />
              </a>
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                title="LinkedIn Post"
              >
                <FaLinkedin />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                title="Live Preview"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsTab;
