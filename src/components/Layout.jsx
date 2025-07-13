import Navbar from './Navbar';
import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const sectionTransition = {
    duration: 0.6,
    ease: [0.4, 0.01, 0.2, 1],
  };

  return (
    <>
      <Navbar />
      <ScrollToHashElement />
      <motion.main
        className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#0a1f2c] to-[#0088a9] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0.01, 0.2, 1] }}
      >
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
          className="mb-2"
        >
          <Home />
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
          className="mb-2"
        >
          <About />
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
          className="mb-2"
        >
          <Skills />
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
          className="mb-2"
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
        >
          <Contact />
        </motion.section>
      </motion.main>
    </>
  );
}
