
import  { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader.jsx';
const Layout = lazy(() => import('./components/Layout.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

export default function App() {
  const location = useLocation();
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

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}


