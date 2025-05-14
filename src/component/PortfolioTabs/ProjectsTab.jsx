import React from "react";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import TaskManager from "../../assets/Taskmanagement.png"
const projects = [
  {
    name: "Portfolio Website",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHSrRMQ9YMbnw/feedshare-shrink_800/B56ZRraxkQHoAg-/0/1736968983333?e=1750291200&v=beta&t=UQKCar-M-BtPn4kOIncG7DiFgifG5dbJ2Po7E8AXvv4",
    github: "https://github.com/Amanjarngal/Portfolio",
    linkedin:
      "https://www.linkedin.com/posts/aman-jarngal_this-portfolio-website-is-a-personal-project-activity-7285375960638537728-WuOH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://wondrous-chebakia-3a07b6.netlify.app/",
  },
  {
    name: "Text Editor",
    image: "https://media.licdn.com/dms/image/v2/D5622AQF0DwRM-V315A/feedshare-shrink_800/B56ZQhazqOHIAg-/0/1735727463583?e=1750291200&v=beta&t=ybSlv_SZuVNTYWrptQoAAneZlc9xChdUPOlxcUOHwbI",
    github: " https://github.com/Amanjarngal/TextEditor",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_this-project-is-a-fully-customizable-text-activity-7280168648114151424-4zhF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://lustrous-salamander-7014ce.netlify.app/",
  },
  {
    name: "TourGuide Website",
    image: "https://media.licdn.com/dms/image/v2/D562DAQFLYuonN9Tw3A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735725643345?e=1747771200&v=beta&t=vwZicdLnhY51eX5liAngH8MUdx13DxIFjZDSnOTJh3o",
    github: " https://github.com/Amanjarngal/TourGuide",
    linkedin: "https://www.linkedin.com/posts/aman-jarngal_explorewithusonline-bookyouradventure-guidedtourexperience-activity-7241144522896728065-bfCM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
    live: "https://tourguide-1-ym1n.onrender.com/",
  },
  {
    name: "bankiizard",
    image: "https://media.licdn.com/dms/image/v2/D562DAQFPga4CSbuErA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1711035753561?e=1747771200&v=beta&t=y0J_Jrl8UIYcbfdft5vAjlIJiig3yhaqOxfI6h-Ns94",
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
