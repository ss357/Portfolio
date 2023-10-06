import React from "react";
import Navbar from "./Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import pic from '../assests/IMG_20200830_162755~3.jpg'

const Home = ({id}) => {
  return (
    <div name='home' className="h-screen w-full px-8 text-white flex flex-col justify-center  mx-auto md:px-20">
    <div className="hidden md:block xl:block absolute right-20 top-42 border-cyan-700 md:w-52 xl:w-80 border-2 md:shadow-md xl:shadow-2xl rounded-lg overflow-hidden aspect-w-2 aspect-h-1 shadow-slate-50 border-r-8 border-b-8 z-0">
  <img
    src={pic}
    alt=""
    className="h-full w-full object-conatain shadow-md"
  />
</div>

      <p className="text-cyan-400 font-mono text-xl">Hi my name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
        Suman Atta
      </h1>
      <h2 className="text-4xl sm:tex t-7xl font-bold text-[#8892b0] py-1">
        I'm a React JS Developer
      </h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">
     Enthusiastic React lover transitioning to full-stack development with Next.js. Eager to contribute and grow as a Next.js apprentice in a collaborative team. Check out my diverse project portfolio!
      </p>
      <div className=''>
        <button className="border-2 group px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
          View Work
          <span className=" group-hover:rotate-90 duration-300"> <AiOutlineArrowRight className="ml-3"/></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
