import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';
import Loader from './components/Loader.jsx';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Dynamic page titles
    const routeTitles = {
      '/': 'Home | Avishkar Deogharia',
      '/about': 'About | Avishkar Deogharia',
      '/skills': 'Skills | Avishkar Deogharia',
      '/projects': 'Projects | Avishkar Deogharia',
      '/contact': 'Contact | Avishkar Deogharia',
    };
    document.title = routeTitles[location.pathname] || '404 | Avishkar Deogharia';
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


