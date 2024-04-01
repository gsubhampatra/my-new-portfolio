import React, { useEffect } from "react";
import AOS from "aos";
import { CiHome } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { coder } from "../assets";
const Navbar = () => {
  const nav_items = [
    {
      id: 1,
      name: "Home",
      link: "#home",
      logo: <CiHome />,
    },
    {
      id: 2,
      name: "Experience",
      link: "#experience",
      logo: <LuGraduationCap />,
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
      logo: <IoSettingsOutline />,
    },
  ];
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-[#28282b59] ">
        <div className="flex overflow-hidden h-[80px] max-w-[1200px] items-center justify-between p-1 bg-transparent text-gray-400 mx-auto ">
          <div>
            <img
              data-aos="zoom-in"
              className="rounded-full h-[60px] hover:shadow-sky-400  shadow-md m-2  "
              src={coder}
              alt="gsubham"
            />
          </div>
          <div className="hidden sm:block">
            <nav>
              <ul className="flex items-center m-2 space-x-4 text-xl font-bold ">
                {nav_items.map((item, i) => (
                  <li
                    data-aos="fade-down"
                    data-aos-delay={i * 250}
                    data-duration="900"
                    key={item.id}
                  >
                    <a className="mx-2 glow" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <a href="#contact" data-aos="fade-left">
              <img
                className="p-2 transition-all drop-shadow-[0_5px_10px_#497ffc] hover:scale-110 "
                src="https://img.icons8.com/ios/50/00BFFF/whatsapp--v1.png"
                alt="whatsapp--v1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="fixed z-10 w-full bottom-2 sm:hidden">
        <nav>
          <ul className="flex items-center m-2 space-x-4 justify-evenly">
            {nav_items.map((item, i) => (
              <li
                key={item.id}
                className="hover:shadow-[2px_5px_10px]  z-50 transition-all shadow-md  text-cyan-100 text-bold text-2xl hover:text-sky-200 shadow-sky-200 border border-sky-300 rounded-full p-3"
              >
                <a href={item.link}>{item.logo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default Navbar;
