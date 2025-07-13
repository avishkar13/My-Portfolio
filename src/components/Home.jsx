import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// === Animation Variants ===
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0.01, 0.2, 1] },
    },
};

const fadeDelay = (delay = 0.2) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6, ease: [0.4, 0.01, 0.2, 1] },
    },
});

// === Typewriter ===
const useTypewriterLoop = (texts, typingSpeed = 100, pauseDuration = 2000) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;
        if (isTyping) {
            if (charIndex < texts[currentTextIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setIsTyping(false), pauseDuration);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, typingSpeed / 2);
            } else {
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                setCharIndex(0);
                setIsTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [texts, charIndex, isTyping, displayedText, currentTextIndex, typingSpeed, pauseDuration]);

    return displayedText;
};

const useTypewriterOnce = (text, typingSpeed = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, text, typingSpeed]);

    return displayedText;
};

const Home = () => {
    const name = useTypewriterOnce('Avishkar Deogharia', 80);
    const jobs = useTypewriterLoop(
        ['MERN Stack Developer', 'Aspiring DevOps Engineer', 'Competitive Programmer'],
        80,
        1000
    );

    return (
        <main className="min-h-screen flex items-center justify-center px-4 md:px-10 py-20 relative overflow-hidden text-white">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative z-10 w-[90vw] max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center p-6 lg:p-10 rounded-2xl shadow-lg border-2 border-cyan-300/20 mt-10"
            >
                {/* Left Content */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-6 md:px-8 gap-6 font-mono">
                    <motion.p
                        variants={fadeDelay(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-cyan-300 text-2xl md:text-4xl xl:text-5xl font-bold drop-shadow-lg"
                    >
                        Hi! I Am
                    </motion.p>

                    <motion.p
                        variants={fadeDelay(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-white text-2xl md:text-5xl xl:text-6xl font-extrabold tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {name}
                        </span>
                    </motion.p>

                    <motion.p
                        variants={fadeDelay(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-cyan-200 text-lg md:text-2xl xl:text-3xl font-semibold min-h-[2em]"
                    >
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                            {jobs}
                        </span>
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeDelay(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center lg:justify-start"
                    >
                        <Link to="./Resume.pdf" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300 hover:from-cyan-600 hover:to-blue-600 font-semibold rounded-xl text-base md:text-lg px-6 py-3 transition-all duration-300 shadow-lg"
                            >
                                Download Resume
                            </motion.button>
                        </Link>
                        <Link to="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border border-purple-400 hover:from-purple-600 hover:to-indigo-600 font-semibold rounded-xl text-base md:text-lg px-6 py-3 transition-all duration-300 shadow-lg"
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Profile Image */}
                <motion.div
                    variants={fadeDelay(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col items-center justify-center lg:w-1/3 my-10"
                >
                    <div className="relative group">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="h-60 w-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-300 object-cover shadow-lg hover:shadow-cyan-500/50 transition-all duration-100 cursor-pointer"
                            src="/images/profile.jpeg"
                            alt="Avishkar Deogharia"
                        />
                        {/* <div className="absolute inset-0 rounded-full border-2 border-cyan-300/50 opacity-0 group-hover:opacity-100 transition duration-300  pointer-events-none" /> */}
                    </div>
                </motion.div>

            </motion.div>
        </main>
    );
};

export default Home;
