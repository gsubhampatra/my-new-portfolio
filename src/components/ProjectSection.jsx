import React from "react";
 
const ProjectSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "ecommerce website",
      image: "",
      tags: ["js", "mongo", "express"],
      link: "",
      github: "",
    },
    {
      title: "Project 2",
      description: "ecommerce website",
      image: "",
      tags: ["js", "mongo", "express"],
      link: "",
      github: "",
    },
    {
      title: "Project 3",
      description: "ecommerce website",
      image: "",
      tags: ["js", "mongo", "express"],
      link: "",
      github: "",
    },
    {
      title: "Project 4",
      description: "ecommerce website",
      image: "",
      tags: ["js", "mongo", "express"],
      link: "",
      github: "",
    },
  ];
  return (
    <>
      <div id="projects" className="max-w-[1000px] mx-auto mt-44 p-4 ">
        <h1 data-aos="zoom-in" className="text-4xl font-semibold lg:text-6xl sm:text-5xl">
          <span className="text-center text-transparent bg-gradient-to-r bg-clip-text from-sky-400 to-teal-700">
            Projects
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-2 mt-8 overflow-hidden md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={`${index * 500}`}
              className="p-4 bg-gray-700 rounded-md shadow-[0_5px_20px]  hover:shadow-[2px_4px_50px] transition-all"
            >
              <img
                className="rounded-md h-[200px] w-full object-cover"
                src={project.image}
                alt="project image"
              />
              <h1 className="my-2 text-2xl font-semibold text-sky-50">{project.title}</h1>
              <p className="text-gray-200">{project.description}</p>
              <div className="flex justify-between mt-4">
                <div>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mr-2 text-xs sm:text-sm rounded-full shadow-[0_0_8px] bg-gradient-to-r shadow-sky-300 from-sky-400 to-violet-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div>
                  <a
                    href={project.link}
                    className="px-2 py-1 mr-2 text-slate-200 hover:shadow-white hover:shadow-md text-md rounded-2xl bg-gradient-to-r from-sky-600 to-sky-400"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="px-2 py-1 mr-2 text-slate-200 hover:shadow-white hover:shadow-md text-md rounded-2xl bg-gradient-to-r from-gray-600 to-gray-400"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
