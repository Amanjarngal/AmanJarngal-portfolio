import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css"; // 💡 Add this CSS file for shine effect

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nb2und6",
        "template_wrt6jae",
        form.current,
        "P02CDJruifXrsKGB2"
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. ❌");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-4 py-10 bg-grid">
      <div
        className="max-w-2xl mx-auto rounded-xl p-8 bg-white/10 backdrop-blur-md border border-purple-400 shadow-xl transition-all duration-500 hover:shadow-purple-700"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-center text-purple-300 mb-4">
          Contact Me
        </h2>
        <p className="text-center text-purple-100 mb-6">
          Got a question? Send me a message, and I’ll get back to you soon.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white border border-purple-400 placeholder-purple-300 focus:outline-none transition duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white border border-purple-400 placeholder-purple-300 focus:outline-none transition duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white border border-purple-400 placeholder-purple-300 focus:outline-none transition duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md transition duration-300 flex justify-center items-center gap-2 "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
