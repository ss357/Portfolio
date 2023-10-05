import React from "react";

import HTML from "../assests/images/html.png";
import CSS from "../assests/images/css.png";
import TailWind from "../assests/images/tailwind.png";
import JavaScript from "../assests/images/javascript.png";
import ReactImg from "../assests/images/react.png";
import JAVA from "../assests/images/java.png";
import MySQL from "../assests/images/mySQL.png";
import NextJS from "../assests/images/NextJS.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-2">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400 ">
            Skills
          </p>
         
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md  hover:scale-110 duration-500 flex flex-col justify-between  rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={TailWind} alt="tailwind icon" />
            <p className="my-4">TailWind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={JAVA} alt="java icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={NextJS} alt="Next JS icon" />
            <p className="my-4">NextJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between rounded bg-[#0e2444] p-2 shadow-[hsl(187,42%,39%)]">
            <img className="w-20 mx-auto" src={MySQL} alt="HTML icon" />
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
