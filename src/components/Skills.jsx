import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 2,
      name: "React",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
    },
    {
      id: 3,
      name: "Node",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg",
    },
    {
      id: 4,
      name: "Express",
      logo: "https://img.icons8.com/00BFFF/express-js.png",
    },
    {
      id: 5,
      name: "MongoDB",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/mongodb.svg",
    },
    {
      id: 5,
      name: "Flutter",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/flutter.svg",
    },
    {
      id: 6,
      name: "Tailwind",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg",
    },

    {
      id: 7,
      name: "JavaScript",
      logo: "https://img.icons8.com/ios-filled/50/fcfc03/javascript--v1.png",
    },
    {
      id: 2,
      name: "React",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
    },
    {
      id: 3,
      name: "Node",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg",
    },
    {
      id: 4,
      name: "Express",
      logo: "https://img.icons8.com/00BFFF/express-js.png",
    },
    {
      id: 5,
      name: "MongoDB",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/mongodb.svg",
    },
    {
      id: 5,
      name: "Flutter",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/flutter.svg",
    },
    {
      id: 6,
      name: "Tailwind",
      logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg",
    },
  ];
  return (
    <>
      <div className="absolute max-w-[100vw] overflow-hidden -bottom-12 sm:bottom-0">
        <div className="overflow-hidden fadeUp ">
          <div className="flex h-[60px]  horizontal-scrolling-items gap-10  p-2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="inline-flex text-white items-center justify-center px-4 py-0.5 border border-gray-600 bg-[#20202b]  shadow-[2px_3px_20px] hover:shadow-sky-300 shadow-gray-600  rounded-full"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} icon`}
                  width={16}
                  height={16}
                  className="w-5 h-5 mr-1"
                />
                <span className="text-lg capitalize">{skill.name}</span>
              </div>
            ))}
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="inline-flex text-white items-center justify-center px-4 py-0.5 border border-gray-600 bg-[#20202b]  shadow-[2px_3px_20px] hover:shadow-sky-300 shadow-gray-600  rounded-full"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} icon`}
                  width={16}
                  height={16}
                  className="w-5 h-5 mr-1"
                />
                <span className="text-lg capitalize">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
