import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
    import { useCallback } from 'react';


const Navbar = () => {
    const location = useLocation();
    const currentHash = location.hash || '#home';
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = useCallback((event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 200);
        }
    }, [isOpen]);

    useEffect(() => {
        // Attach event listener to the document
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className='text-white bg-[#0f0f0f]/50 backdrop-blur-md fixed top-0 w-full z-50'>
            <nav className='flex justify-between items-center py-4'>
                <div className="logo text-xl md:text-3xl p-1 ml-10 md:ml-20 font-bold font-serif">Portfolio.</div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-14 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Links for larger screens */}
                <ul className={`md:flex gap-4 lg:gap-6 items-center md:mr-6 lg:mr-10 hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>
                        <li className={`text-lg font-semibold font-mono focus:text-slate-500 hover:text-cyan-300 transition-all ease-out duration-200 hover:scale-105 ${currentHash === '#home' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Home</li>
                    </a>
                    <a href="#about" onClick={() => setIsOpen(false)}>
                        <li className={`text-lg font-semibold font-mono hover:text-cyan-300 transition-all ease-out duration-200 hover:scale-105 ${currentHash === '#about' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>About</li>
                    </a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>
                        <li className={`text-lg font-semibold font-mono hover:text-cyan-300 transition-all ease-out duration-200 hover:scale-105 ${currentHash === '#skills' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Skills</li>
                    </a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>
                        <li className={`text-lg font-semibold font-mono hover:text-cyan-300 transition-all ease-out duration-200 hover:scale-105 ${currentHash === '#projects' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Projects</li>
                    </a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                        <li className={`text-lg font-semibold font-mono hover:text-cyan-300 transition-all ease-out duration-200 hover:scale-105 ${currentHash === '#contact' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Contact</li>
                    </a>
                </ul>
            </nav>

            {/* Dropdown for mobile devices */}
            {isOpen && (
                <div ref={menuRef} className="md:hidden absolute bg-gray-800 w-1/2 z-50 shadow-md right-0 rounded-md top-14 animate-fadeIn">
                    <ul className="flex flex-col items-center gap-4 text-white p-4">
                        <a href="#home" onClick={() => setIsOpen(false)}>
                            <li className={`hover:text-cyan-300 ${currentHash === '#home' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Home</li>
                        </a>
                        <a href="#about" onClick={() => setIsOpen(false)}>
                            <li className={`hover:text-cyan-300 ${currentHash === '#about' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>About</li>
                        </a>
                        <a href="#skills" onClick={() => setIsOpen(false)}>
                            <li className={`hover:text-cyan-300 ${currentHash === '#skills' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Skills</li>
                        </a>
                        <a href="#projects" onClick={() => setIsOpen(false)}>
                            <li className={`hover:text-cyan-300 ${currentHash === '#projects' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Projects</li>
                        </a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>
                            <li className={`hover:text-cyan-300 ${currentHash === '#contact' ? 'border-b-2 border-cyan-300 text-cyan-300' : ''}`}>Contact</li>
                        </a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;