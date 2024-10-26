import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Aboutinfo from './Aboutinfo';

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Navbar />
      <div className="About text-white  lg:w-[97%] xl:w-[92vw] min-h-[92vh] py-16 md:py-20 lg:py-16 mx-auto flex justify-between gap-2  ">
        <div className="px-2 w-[35%] xl:w-1/4 lg:flex items-center hidden ">
          <img
            className="rounded-[60px] w-[100%] h-[80%]  "
            src="./src/assets/Profile pic.jpeg"
            alt="About Pic"
          />
        </div>

        <div className="Info w-full lg:w-3/4 p-4 ">
          {/* Toggle section buttons */}
          <div className="sections w-[65%] md:w-[40%] xl:w-[30%] mx-auto flex justify-around p-4 text-gray-400 rounded-full ">
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
          {activeSection === "about" && (
            <Aboutinfo />
          )}
          
          {activeSection === "social" && (
            <div className="social-info w-[90%] md:w-[50%] h-[50%] mx-auto my-6 p-6 flex flex-col gap-4 ">
              <Link to="https://www.linkedin.com/in/avishkar-deogharia" target='_blank' className='flex gap-4 items-center'>
                <img src="./src/assets/linkedin.svg" alt="LinkedIn" className="w-10 h-10 invert" />
                <p className="text-gray-300 text-xl">Connect with me on LinkedIn!</p>
              </Link>
              <Link to="https://github.com/avishkar13" target='_blank' className='flex gap-4 items-center'>
                <img src="./src/assets/github.svg" alt="GitHub" className="w-10 h-10 invert" />
                <p className="text-gray-300 text-xl">Check out my GitHub!</p>
              </Link>
              <Link to="https://www.instagram.com/_avishkar__13/" target='_blank' className='flex gap-4 items-center'>
                <img src="./src/assets/instagram.svg" alt="Instagram" className="w-10 h-10 invert" />
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
