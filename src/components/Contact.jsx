import React, { useState } from "react";
import { github, gmail, instagram, linkedin, x, youtube } from "../assets";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const social = [
    {
      platform: "Gmail",
      icon: gmail,
      link: "mailto:gsubhampatra@gmail.com",
      username: "gsubhampatra",
      color: "f3f6c8",
    },
    {
      platform: "GitHub",
      icon: github,
      link: "https://github.com/gsubhampatra",
      username: "gsubhampatra",
      color: "",
    },
    {
      platform: "Instagram",
      icon: instagram,
      link: "https://instagram.com/gsubhampatra",
      username: "gsubhampatra",
      color: "f6c8f5",
    },
    {
      platform: "LinkedIn",
      icon: linkedin,
      link: "https://linkedin.com/in/gsubhampatra",
      username: "gsubhampatra",
    },
    {
      platform: "X",
      icon: x,
      link: "https://x.com/gsubhampatra",
      username: "gsubhampatra",
    },
    {
      platform: "youtube",
      icon: youtube,
      link: "https://youtube.com/@gsubhampatra",
      username: "gsubhampatra",
    },
  ];

  return (
    <section id="contact">
      <h1 className="text-3xl font-bold text-center text-transparent md:text-4xl bg-gradient-to-r bg-clip-text from-sky-400 to-violet-400">
        Contact
      </h1>
      <div className="flex flex-col items-center justify-center  max-w-[1000px] p-4 mx-auto md:flex-row">
        {/* Left contact page */}
        <form
          data-aos="flip-left"
          onSubmit={handleSubmit}
          className="flex flex-col w-full p-4 rounded-md to-gray-600 bg-gradient-to-r from-gray-700 md:w-1/2 "
        >
          <input
            type="text"
            className="p-2 mb-2 text-sm text-white bg-gray-800 border-b border-gray-800 rounded-md md:p-2 md:mb-4"
            id="name"
            placeholder="NAME"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="p-2 mb-2 text-sm text-white bg-gray-800 border-b border-gray-500 rounded-md md:p-2 md:mb-4"
            id="email"
            placeholder="EMAIL"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="p-2 mb-2 text-sm text-white bg-gray-800 border-b border-gray-500 rounded-md md:p-2 md:mb-4"
            rows="5"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-600"
          >
            SEND
          </button>
        </form>

        {/* Right contact page */}
        <div className="grid grid-cols-2 gap-4 my-6 text-sm rounded-md sm:pl-10 md:w-1/2 md:mt-0">
          {social.map((profile, index) => (
            <div data-aos="zoom-in" key={index}>
              <a
                className="flex items-center justify-center w-full gap-2 p-2 px-5 text-white bg-transparent border border-white rounded-full shadow-md hover:shadow-lg hover:shadow-gray-100 shadow-gray-200"
                href={profile.link}
                target="_blank"
              >
                <img src={profile.icon} className="sm:w-10 w-7 " alt="" />
                <span>{profile.username}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 text-sm text-center text-white bg-gray-900">
        made with ❤️ by gsubhampatra
      </div>
    </section>
  );
};

export default Contact;
