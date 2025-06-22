import React from "react";
import Certificate from "../../assets/Certificate.jpg"
import Flipkart from "../../assets/Flipkart.jpg"
import gg1 from "../../assets/gg.jpg"
import gsoc from "../../assets/gsoc.jpg"
import iet from "../../assets/iet.jpg"
import tata from "../../assets/tata.jpg"
import xiaomi from "../../assets/xiaomi.jpg"
const certificates = [
  {
    title: "Xiaomi Ode2Code 3.0",
    img: xiaomi,
    link: "https://www.linkedin.com/posts/aman-jarngal_xiaomiode2code-techinnovation-codingchallenge-activity-7269385757423734784-yO_A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0", // Add your certificate link
  },
  {
    title: "GirlScript Summer of Code 2024 - Extended Edition",
    img: gsoc,
    link: "https://www.linkedin.com/posts/aman-jarngal_gssoc24x-codethefuture2024-girlscriptextended2024-activity-7245424095599730688-woGe?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "Code Clash of WebTech Trivia",
    img: iet,
    link: "https://www.linkedin.com/posts/aman-jarngal_ietabrjec-activity-7205542161847574528-w2Zx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "The Web Development Bootcamp 2024",
    img: Certificate ,
    link: "https://www.udemy.com/certificate/UC-3746392d-9844-40de-94d7-beba82365dd0/", // Add your certificate link
  },
  {
    title: "Flipkart GRID 5.0 - Software Development Track Hackathon ",
    img: Flipkart,
    link: "https://www.linkedin.com/posts/aman-jarngal_flipkart-flipkartgrid-activity-7095411867719753728-JDay?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: " Tata iQ Data Visualisation Virtual Programme",
    img: tata,
    link: "https://www.linkedin.com/posts/aman-jarngal_completing-the-tata-iq-data-visualisation-activity-7088949912620417024-FeGL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "geeksforgeeks Tech-QUIZ. ",
    img: gg1,
    link: "https://www.linkedin.com/posts/aman-jarngal_participate-in-geeksforgeeks-tech-quiz-activity-7086283527809302528-ifmf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
];

const CertificatesTab = () => {
  return (
    <section id="certificates" data-aos="fade-left">
      {/* Disclaimer */}
      <p className="text-sm text-center text-purple-300 italic mb-2">
        🔍 Click on title to get more details about certificate.
      </p>
<br />
      {/* <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-8">
        My Certificates
      </h3> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-xl border border-purple-400 text-gray-100 shadow-lg backdrop-blur-md hover:shadow-[0_0_20px_#a855f7] transition-all duration-500"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full max-h-56 object-contain rounded-md mb-4 border border-purple-300 hover:scale-105 transition-transform duration-300"
            />
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-purple-200 hover:text-pink-300 text-center block transition-colors duration-300"
            >
              {cert.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesTab;
