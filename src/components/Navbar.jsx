import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 200);
        }
    };

    useEffect(() => {
        // Attach event listener to the document
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='text-white bg-[radial-gradient(125%_125%_at_50%_10%,_#000000_100%,_#6363ee_100%)] fixed top-0 w-full z-50 '>
            <nav className='flex justify-between items-center py-2  '>
                <div className="logo text-xl md:text-3xl p-1 ml-10 md:ml-20 font-bold font-serif">Portfolio.</div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-14 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                 {/* Links for larger screens */}

                <ul className={`md:flex gap-4 lg:gap-6 items-center md:mr-6 lg:mr-10 hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
                   <Link to="/" onClick={() => setIsOpen(false)}>
                        <li className='text-lg font-semibold font-mono focus:text-slate-500 hover:text-violet-500 transition-all ease-out duration-200 hover:scale-105 '>
                            Home
                        </li>
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>
                        <li className='text-lg font-semibold font-mono hover:text-violet-500 transition-all ease-out duration-200 hover:scale-105 '>
                            About
                        </li>
                    </Link>
                    <Link to="/skills" onClick={() => setIsOpen(false)}>
                        <li className='text-lg font-semibold font-mono hover:text-violet-500 transition-all ease-out duration-200 hover:scale-105 '>
                            Skills
                        </li>
                    </Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>
                        <li className='text-lg font-semibold font-mono hover:text-violet-500 transition-all ease-out duration-200 hover:scale-105 '>
                            Projects
                        </li>
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <li className='text-lg font-semibold font-mono hover:text-violet-500 transition-all ease-out duration-200 hover:scale-105 '>
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav>

            {/* Dropdown for mobile devices */}
            {isOpen && (
                <div ref={menuRef} className="md:hidden absolute bg-gray-800 w-1/2 z-50 shadow-md right-0 rounded-md top-14 animate-fadeIn">
                    <ul className="flex flex-col items-center gap-4 text-white p-4  ">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <li className="hover:text-violet-500">Home</li>
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                            <li className=" hover:text-violet-500">About</li>
                        </Link>
                        <Link to="/skills" onClick={() => setIsOpen(false)}>
                            <li className="hover:text-violet-500">Skills</li>
                        </Link>
                        <Link to="/projects" onClick={() => setIsOpen(false)}>
                            <li className="hover:text-violet-500">Projects</li>
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <li className="hover:text-violet-500">Contact</li>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;