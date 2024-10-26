import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/skills",
    element:<Skills/>,
  },
  {
    path: "/projects",
    element:<Projects/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
