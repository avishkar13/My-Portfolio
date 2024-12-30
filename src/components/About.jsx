import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Aboutinfo from './Aboutinfo';

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Navbar />
      <div className="About text-white lg:w-[97%] xl:w-[92vw] min-h-[92vh] py-16 lg:py-8 mx-auto flex flex-col lg:flex-row justify-between gap-6">
        <div className="hidden lg:flex w-[35%] xl:w-1/3 h-[90vh] items-center">
          <img
            className="rounded-[60px] w-full h-[80%] object-cover"
            src="images/Profile pic.jpeg"
            alt="Avishkar Deogharia"
          />
        </div>

        <div className="Info w-full lg:w-3/4 p-4">
          {/* Toggle section buttons */}
          <div className="sections w-[65%] md:w-[40%] xl:w-[30%] mx-auto flex justify-around p-4 text-gray-400 rounded-full">
            <span
              onClick={() => setActiveSection("about")}
              className={`font-mono font-semibold w-full text-center text-xl cursor-pointer ${activeSection === "about" ? "text-white" : "text-gray-400"}`}
            >
              About
            </span>
            <span
              onClick={() => setActiveSection("social")}
              className={`font-mono font-semibold w-full text-center text-xl cursor-pointer ${activeSection === "social" ? "text-white" : "text-gray-400"}`}
            >
              Social
            </span>
          </div>
          <div className="h-[2px] w-[65%] md:w-[40%] xl:w-[30%] mx-auto bg-gray-700 mt-[-10px]"></div>

          {/* Display content based on active section */}
          {activeSection === "about" && <Aboutinfo />}
          {activeSection === "social" && (
            <div className="social-info w-[90%] md:w-[50%] mx-auto my-6 p-6 flex flex-col gap-6">
              <Link
                to="https://www.linkedin.com/in/avishkar-deogharia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
              >
                <img src="images/linkedin.svg" alt="LinkedIn Icon" className="w-10 h-10 invert" />
                <p className="text-gray-300 text-xl">Connect with me on LinkedIn!</p>
              </Link>
              <Link
                to="https://github.com/avishkar13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
              >
                <img src="images/github.svg" alt="GitHub Icon" className="w-10 h-10 invert" />
                <p className="text-gray-300 text-xl">Check out my GitHub!</p>
              </Link>
              <Link
                to="https://www.instagram.com/_avishkar__13/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
              >
                <img src="images/instagram.svg" alt="Instagram Icon" className="w-10 h-10 invert" />
                <p className="text-gray-300 text-xl">Follow me on Instagram!</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
