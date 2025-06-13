import React from "react";
import Certificate from "../../assets/Certificate.jpg"
const certificates = [
  {
    title: "Xiaomi Ode2Code 3.0",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEyZSiS5csdZA/feedshare-shrink_800/feedshare-shrink_800/0/1733156621374?e=1750291200&v=beta&t=P5gsrxBwlUVyDrnvqNXytb-KmbdqXpiu5bVd9KtQ12M",
    link: "https://www.linkedin.com/posts/aman-jarngal_xiaomiode2code-techinnovation-codingchallenge-activity-7269385757423734784-yO_A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0", // Add your certificate link
  },
  {
    title: "GirlScript Summer of Code 2024 - Extended Edition",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHKoaFTllHAIA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727443714937?e=1750291200&v=beta&t=3GzL6YC0FizHDKRO7G5oFqALQwqH_pBW0U6a_2l0iKg",
    link: "https://www.linkedin.com/posts/aman-jarngal_gssoc24x-codethefuture2024-girlscriptextended2024-activity-7245424095599730688-woGe?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "Code Clash of WebTech Trivia",
    img: "https://media.licdn.com/dms/image/v2/D5622AQFlNDpC7MGf7w/feedshare-shrink_800/feedshare-shrink_800/0/1719186752407?e=1750291200&v=beta&t=vlx_Po3myU2truQBmJmDc646CJOvfqNdqP3tJgNhZhk",
    link: "https://www.linkedin.com/posts/aman-jarngal_ietabrjec-activity-7205542161847574528-w2Zx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "The Web Development Bootcamp 2024",
    img: Certificate ,
    link: "https://www.udemy.com/certificate/UC-3746392d-9844-40de-94d7-beba82365dd0/", // Add your certificate link
  },
  {
    title: "Flipkart GRID 5.0 - Software Development Track Hackathon ",
    img: "https://media.licdn.com/dms/image/v2/D4E22AQEyhuAXw0NW8g/feedshare-shrink_800/feedshare-shrink_800/0/1691678012638?e=1750291200&v=beta&t=2XiTlqZxK4sBp8JTiG-RVGOnhcitYgtYc5pi2PXCp9c",
    link: "https://www.linkedin.com/posts/aman-jarngal_flipkart-flipkartgrid-activity-7095411867719753728-JDay?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: " Tata iQ Data Visualisation Virtual Programme",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQGuswNGMGMAjQ/feedshare-shrink_800/feedshare-shrink_800/0/1690137364715?e=1750291200&v=beta&t=x7c9VEhOGoK-5bP3fz2N7RgVsTjGDMrsDuMEXUlz_9M",
    link: "https://www.linkedin.com/posts/aman-jarngal_completing-the-tata-iq-data-visualisation-activity-7088949912620417024-FeGL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrx89sBjczQpjeDkmTZIpc3wYCvewsE0J0",
  },
  {
    title: "geeksforgeeks Tech-QUIZ. ",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQH-7ny0KLxaww/feedshare-shrink_800/feedshare-shrink_800/0/1689501645098?e=1750291200&v=beta&t=cQh5HS5IWFetKtbb-PiET0dffYESe_sZ8tRrPyDHHT4",
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
