import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const transitionProps = {
    initial: currentPath !== location.pathname ? { opacity: 0, scale: 0.9 } : {},
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 1, ease: 'easeInOut' },
  };

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Home />
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <About />
          </motion.div>
        }
      />
      <Route
        path="/skills"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Skills />
          </motion.div>
        }
      />
      <Route
        path="/projects"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Projects />
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Contact />
          </motion.div>
        }
      />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
