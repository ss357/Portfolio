import React from "react";
import portfolio from "../assests/works/portfolio.png";
import admin from "../assests/works/admin.png";
import contact from "../assests/works/contact.png";
import superhero from "../assests/works/superhero.png";
import calculator from "../assests/works/calculator.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-6"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${portfolio})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transition: "filter 0.3s ease",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[195px]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 bg-[#010e2b] h-full w-full">
              <span className="text-2xl font-bold text-cyan-500 tracking-wider flex justify-center pt-3">
                React JS Application
              </span>
              <div className="pt-8 text-center" >
                <a href="https://portfolio-ivory-ten-46.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ss357/Portfolio" target= "_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${admin})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[195px]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 bg-[#010e2b] h-full w-full">
              <span className="text-2xl font-bold text-cyan-500 tracking-wider flex justify-center pt-3 items-center">
                React Admin Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-admin-dashboard-k4r4-kvm9369pw-ss357.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ss357/React-Admin-Dashboard" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${contact})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[195px]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 bg-[#010e2b] h-full w-full">
              <span className="text-2xl font-bold text-cyan-500 tracking-wider flex justify-center pt-3">
                PhoneBook App
              </span>
              <div className="pt-8 text-center">
                <a href="https://address-book-o8riw7rof-ss357.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ss357/address-book-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${superhero})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[195px]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 bg-[#010e2b] h-full w-full">
              <span className="text-2xl font-bold text-cyan-500 tracking-wider flex justify-center pt-3">
                SuperHero Hunter JS
              </span>
              <div className="pt-8 text-center">
                <a href="https://ss357.github.io/SuperHero-Hunter-Js/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ss357/SuperHero-Hunter-Js" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${calculator})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[195px]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 bg-[#010e2b] h-full w-full">
              <span className="text-2xl font-bold text-cyan-500 tracking-wider flex justify-center pt-3">
                Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://calculator-3miwexz9j-ss357.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ss357/Calculator-React-JS" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-cyan-400  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
