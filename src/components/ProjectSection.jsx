import React from "react";
import { aiformbuilder, ccc, imagegen, snackgame } from "../assets";

const ProjectSection = () => {
  const projects = [
    {
      title: "Cloud Computing Club Website",
      description: "AI Form Builder is an innovative tool designed to revolutionize the way we create forms. Leveraging the power of AI, this tool generates forms based on simple user prompts, making the process fast and hassle-free.",
      image: ccc,
      tags: ["Next.js", "MongoDB", "Prisma"],
      link: "https://cloudcomputingclub.co.in/",
      github: "https://github.com/",
    },
    {
      title: "AI Form Builder",
      description: "AI Form Builder is an innovative tool designed to revolutionize the way we create forms. Leveraging the power of AI, this tool generates forms based on simple user prompts, making the process fast and hassle-free.",
      image: aiformbuilder,
      tags: ["React", "mongo", "express"],
      link: "https://ai-form-builder-byg.vercel.app/",
      github: "https://github.com/gsubhampatra/ai-form-builder",
    },
    {
      title: "AI Image Generator",
      description: "Ai image generator is an image generation tool that uses the power of AI to generate images. The tool allows you to upload a prompt and the tool will generate an image based on that prompt.",
      image: imagegen,
      tags: ["js", "mongo", "express"],
      link: "https://imagen-byg.vercel.app/",
      github: "https://github.com/gsubhampatra/imagen.ai",
    },
    {
      title: "Snake Game",
      description: "Snake Game is a classic game where the player controls a snake and tries to eat food to grow larger. The game is played on a grid and the player can move the snake using the arrow keys.",
      image: snackgame,
      tags: ["js", "HTML", "CSS"],
      link: "https://gsubhampatra.github.io/gsnakegame/",
      github: "https://github.com/gsubhampatra/gsnakegame/",
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
                src={project.image}
                className="rounded-md h-[200px] w-full object-cover"
                alt="project image"
              />
              <h1 className="my-2 text-2xl font-semibold text-sky-50">{project.title}</h1>
              <p className="text-gray-200">{project.description}</p>
              <div className="flex justify-between mt-4">
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
