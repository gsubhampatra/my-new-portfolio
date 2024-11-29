import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="grid  max-w-[1200px] h-[70vh] md:mt-20 mt-16 grid-cols-1 py-8 gap-8 mx-auto place-items-center sm:grid-cols-3 "
      >
        <div className="col-span-1 mx-auto my-auto">
          <img
            data-aos="zoom-in"
            className=" rounded-md tiltImage hover:shadow-[2px_4px_50px] shadow-[2px_3px_20px] transition-all hover:shadow-sky-400 h-[250px] w-[250px] lg:h-[400px] object-cover"
            src="https://i.ibb.co/1nSd2k3/IMG-20231128-162627.jpg"
            alt=""
          />
        </div>

        <div className="col-span-2 px-5 space-y-4">
          <h1
            data-aos="fade-up"
            className="text-4xl font-semibold text-transparent lg:text-6xl bg-gradient-to-r bg-clip-text from-pink-400 to-violet-400 sm:text-5xl"
          >
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-sky-400 to-teal-700">
              I'm a
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Backend Dev",
                1000,
                "Mobile App Dev",
                1000,
                "AI Enthusiast",
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <p className="text-md my-6  text-gray-200 md:text-xl drop-shadow-[0_5px_30px_#33C2FF]">
            <span data-aos="fade-left" data-aos-delay="100">
              My name is Subham Patra a passionate Full Stack Developer building
              web apps using MERN Stack technology.
            </span>
          </p>
          <div className="my-8 font-extralight ">
            <a
              target="_blank"
            href="https://drive.google.com/file/d/1pgCkOF9ay4y6b8YuulXSKMwAjpK_ROA6/view?usp=sharing"
              data-aos="zoom-in"
              className="px-6 py-3 mr-4 transition-all rounded-full shadow-[0_5px_20px] shadow-sky-700 hover:bg-gradient-to-tl text-sky-50 bg-gradient-to-br hover:from-sky-600 hover:to-violet-500 from-sky-400 to-violet-700"
            >
              Download CV
            </a>
            <a
              href="mailto:gsubhampatra@gmail.com"
              data-aos="zoom-in"
              className="px-6 py-3 mr-4 transition-all rounded-full text-sky-50 bg-gradient-to-br hover:bg-gradient-to-tl shadow-[0_5px_20px] shadow-sky-700 from-sky-400 hover:from-sky-600 hover:to-violet-500 to-violet-700"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
