import React from "react";
const Experience = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "NIST University",
      date: "2019 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in lectus fermentum aliquam. Nulla facilisi. ",
    },
    {
      title: "Software Developer",
      company: "NIST University",
      date: "2017 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in lectus fermentum aliquam. Nulla facilisi. ",
    },
    {
      title: "Software Developer",
      company: "NIST University",
      date: "2017 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in lectus fermentum aliquam. Nulla facilisi. ",
    },
    {
      title: "Software Developer",
      company: "NIST University",
      date: "2017 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in lectus fermentum aliquam. Nulla facilisi. ",
    },
  ];
  return (
    <div id="experience" className="w-full my-5">
      <h1 className="mt-10 text-3xl font-bold text-center text-transparent md:text-6xl bg-gradient-to-r bg-clip-text from-pink-400 to-violet-400">
        Experience
      </h1>
      <div className="relative m-[100px_auto]  max-w-[1000px] flex flex-col sm:flex-row items-start">
        <div className="absolute top-0 left-5 z-[2] block w-1.5 h-full bg-white sm:left-1/2"></div>
        <div className="flex-1 overflow-hidden ">
          {experience.map((exp, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="relative left-5 sm:even:pl-10 pl-4 sm:odd:pr-10 sm:odd:left-0 sm:sm:even:left-[50%] w-3/4 sm:w-1/2 to-gray-600 bg-gradient-to-r from-gray-700 hover:from-gray-600 hover:to-gray-700 transition-all p-2 rounded-lg mb-4 sm:mb-0"
            >
              <div className="relative p-4 text-gray-200 bg-transparent border border-white rounded-lg shadow-2xl">
                <h2 className="text-lg font-bold md:text-2xl">{exp.title}</h2>
                <h3 className="text-lg">{exp.company}</h3>
                <small>{exp.date}</small>
                <p className="text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default Experience;
