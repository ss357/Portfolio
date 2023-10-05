import React, { useState } from "react";
import Logo from "../assests/S.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import Social from "./Social";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineLink,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggled, isToggled] = useState(false);

  return (
    <div className="fixed w-full h-[80px ] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30">
      <div>
        <img src={Logo} alt="ICon" width={60} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-cyan-400">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-cyan-400 ">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-cyan-400 ">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="hover:text-cyan-400 ">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="hover:text-cyan-400">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}

      <div onClick={() => isToggled(!toggled)} className="md:hidden z-10">
        {toggled ? <FaTimes color="tomato" size={30} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          toggled
            ? "absolute top-0 left-0 h-screen bg-[#0a192f] w-full flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-5 text-3xl ">
          <Link onClick={() => isToggled(!toggled)} to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={() => isToggled(!toggled)} to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={() => isToggled(!toggled)} to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={() => isToggled(!toggled)} to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={() => isToggled(!toggled)} 
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <div className="flex items-center justify-between py-10">
          <li>
            <a
              href="https://www.linkedin.com/in/suman-atta/"
              target="_blank"
              className="flex w-full h-full items-center justify-between text-blue-500"
            >
              <AiFillLinkedin size={35} />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/ss357"
              target="_blank"
              className="flex w-full items-center justify-between"
            >
              <AiFillGithub size={35} />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="mailto:sumanatta634@gmail.com"
              target="_blank"
              className="flex w-full  items-center justify-between text-green-700"
            >
              <AiFillMail size={35} />
            </a>
          </li>
        </div>
        <li className="flex items-center justify-between font-extralight text-cyan-300">
          {" "}
          <a
            href="https://drive.google.com/file/d/1Yxtjh8s5WOwupD_EpVLEoP76DjT_Wz63/view?usp=sharing"
            target="_blank"
          >
            Click to Download My resume ⬇️
          </a>
        </li>
      </ul>
      {/* Social icons */}
      <Social />
    </div>
  );
};

export default Navbar;
