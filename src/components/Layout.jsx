import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Home.jsx'));
const About = lazy(() => import('./About.jsx'));
const Skills = lazy(() => import('./Skills.jsx'));
const Projects = lazy(() => import('./Projects.jsx'));
const Contact = lazy(() => import('./Contact.jsx'));
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      when: 'beforeChildren',
      duration: 0.7,
      ease: [0.4, 0.01, 0.2, 1],
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0.01, 0.2, 1],
    },
  },
};

// Enable smooth scroll when navigating to routes with hash (e.g. #about)
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // small delay to ensure rendering
      }
    }
  }, [location]);

  return null;
}

export default function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToHashElement />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-cyan-300 font-mono text-2xl">Loading...</div>}>
        <motion.main
          className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#0a1f2c] to-[#0088a9] text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.section
          id="home"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-2"
        >
          <Home />
        </motion.section>
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-2"
        >
          <About />
        </motion.section>
        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-2"
        >
          <Skills />
        </motion.section>
        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-2"
        >
          <Projects />
        </motion.section>
        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Contact />
        </motion.section>
        </motion.main>
      </Suspense>
    </>
  );
}
