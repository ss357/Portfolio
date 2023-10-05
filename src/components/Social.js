import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillFilePdf } from "react-icons/ai";

const Social = () => {
  return (
    <div className="fixed top-[35%] left-0 w-[160px]  hidden md:block">
      <ul className="flex justify-between flex-col relative">
        <li className="bg-blue-700 flex items-center justify-between h-[40px] w-full ml-[-105px] hover:ml-0 duration-300">
          <a
            href="https://www.linkedin.com/in/suman-atta/"
            target="_blank"
            className="flex w-full items-center justify-between"
          >
            Linkedin
            <AiFillLinkedin size={33} />
          </a>
        </li>
        <li className="bg-gray-700 flex items-center justify-between h-[40px] w-full ml-[-105px] hover:ml-0 duration-300 ">
          <a
            href="https://github.com/ss357"
            target="_blank"
            className="flex w-full items-center justify-between"
          >
            Github
            <AiFillGithub size={33} />
          </a>
        </li>
        <li className="bg-yellow-700 flex items-center justify-between h-[40px] w-full ml-[-105px] hover:ml-0 duration-300 ">
          <a
            href="mailto:sumanatta634@gmail.com"
            target="_blank"
            className="flex w-full items-center justify-between"
          >
            Email
            <AiFillMail size={33} />
          </a>
        </li>

        <li className="bg-red-800 flex items-center justify-between h-[40px] w-full ml-[-105px] hover:ml-0 duration-300 ">
          <a
            href="https://drive.google.com/file/d/1Yxtjh8s5WOwupD_EpVLEoP76DjT_Wz63/view?usp=sharing"
            target="_blank"
            className="flex w-full items-center justify-between"
          >
            My Resume
            <AiFillFilePdf size={33} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
