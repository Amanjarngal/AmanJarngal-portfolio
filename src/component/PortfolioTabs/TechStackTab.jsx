import React from "react";

const techs = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 95,
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 90,
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 75,
  },
  {
    name: "ReactJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 78,
  },
  {
  name: "Tailwind CSS",
  img: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg",
  proficiency: 95,
}
,
//   {
//     name: "Vite",
//     img: "https://vitejs.dev/logo.svg",
//     proficiency: 95,
//   },
  {
    name: "NodeJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 70,
  },
  {
    name: "ExpressJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    proficiency: 78,
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 85,
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    proficiency: 70,
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 90,
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    proficiency: 95,
  },
  {
    name: "NextJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    proficiency: 55,
  },
  {
    name: "C",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    proficiency: 75,
  },
  {
    name: "C++",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    proficiency: 78,
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    proficiency: 70,
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    proficiency: 75,
  },
  {
    name: "Framer Motion",
    img: "https://cdn.dribbble.com/userupload/28046663/file/still-879bd5f88faa2c210d4013090939ae0e.png",
    proficiency: 90,
  },
];

const getProficiencyLevel = (percent) => {
  if (percent >= 90) return "Expert";
  if (percent >= 75) return "Advanced";
  if (percent >= 60) return "Intermediate";
  return "Beginner";
};

const TechStackTab = () => {
  return (
    <section id="techstack" data-aos="fade-right">
      {/* <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Tech Stack</h3> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-purple-500 bg-white/10 text-white
            hover:scale-105 transition-all duration-500 hover:shadow-[0_0_15px_#a855f7] hover:bg-white/20 backdrop-blur-md group overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-purple-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500 z-0"></div>

            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
              <div className="absolute w-1/2 h-full bg-white opacity-10 rotate-45 transform scale-125 -translate-x-full group-hover:animate-shine"></div>
            </div>

            <img src={tech.img} alt={tech.name} className="w-12 h-12 mb-2 z-10" />
            <span className="text-lg font-semibold z-10 mb-2">{tech.name}</span>

           {/* Proficiency Bar */}
<div className="w-full mt-2 z-10 relative">
  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-purple-400 rounded-full transition-all duration-1000 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"
      style={{ width: `${tech.proficiency}%` }}
    ></div>
  </div>

  {/* Percentage & Proficiency Label */}
  <div className="flex justify-between mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-1 text-purple-200">
    <span>{tech.proficiency}%</span>
    <span>{getProficiencyLevel(tech.proficiency)}</span>
  </div>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackTab;
