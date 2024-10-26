import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className='w-[100vw] lg:w-[90vw] mx-auto py-20 xl:py-10 text-white flex flex-col lg:flex-row'>
                <div className="profile py-8 lg:py-20 xl:py-40 w-2/3 md:w-1/2 mx-auto flex justify-center items-center">
                    <img
                        className='w-2/3 lg:w-3/4 2xl:w-1/2 rounded-full border border-gray-600'
                        src="./src/assets/profile.jpeg"
                        alt="Profile picture of Avishkar Deogharia"
                    />
                </div>
                <div className="info-me w-[100vw] lg:w-2/3 flex flex-col justify-center text-center items-center lg:text-left lg:items-start p-6 gap-2 lg:gap-3 font-mono">
                    <p className='text-gray-400 w-full px-2 text-[25px] md:text-[30px] xl:text-[50px]'>Hi!! I Am</p>
                    <p className='text-gray-400 w-full px-2 text-[28px] md:text-[40px] xl:text-[60px] font-semibold'>Avishkar Deogharia</p>
                    <p className='text-gray-400 w-full px-2 text-[25px] xl:text-[40px]'>Full Stack Web Developer</p>
                    <div className="buttons flex flex-col md:flex-row gap-2 md:gap-4 pt-4 px-3">
                        <Link target='_blank' to="./Resume.pdf">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5"
                            >
                                Download Resume
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5"
                            >
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
