import { motion } from 'framer-motion';
import Cards from './Cards';

const Projects = () => {
  const projectData = [
    {
      title: 'StoryCrafter - AI powered Content Creator',
      img: 'images/StoryCrafter.png',
      desc: 'StoryCrafter is an AI-powered content creation platform designed for modern creators. From scriptwriting and thumbnail generation to SEO optimization and title suggestions, StoryCrafter helps you craft engaging content effortlessly.',
      link: 'https://storycrafter.onrender.com/',
      repo: 'https://github.com/avishkar13/StoryCrafter',
    },
    {
      title: 'Noggle - A Real Time Chat Application',
      img: 'images/Noggle.png',
      desc: 'Noggle is a modern, secure chat app that supports real-time messaging, file sharing, and user authentication with a user-friendly responsive design.',
      link: 'https://noggle.onrender.com/',
      repo: 'https://github.com/avishkar13/Noggle',
    },
    {
      title: 'NexCart - An Online Shopping Platform',
      img: 'images/NC.png',
      desc: 'NexCart is a simple e-commerce platform designed for learning, featuring a user-friendly interface for browsing products, managing a cart, and user auth.',
      link: 'https://nex-cart.vercel.app/',
      repo: 'https://github.com/avishkar13/NexCart-frontend',
    },
    {
      title: 'VaultKey - A Password Manager',
      img: 'images/V.png',
      desc: 'VaultKey is a simple password manager built with React and Tailwind CSS, allowing users to securely store and manage passwords locally.',
      link: 'https://avishkar13.github.io/VaultKey-A-Password-Manager/',
      repo: 'https://github.com/avishkar13/VaultKey-A-Password-Manager',
    },
    {
      title: 'TaskFlow - Task Manager Website',
      img: 'images/TF.png',
      desc: 'TaskFlow is a task management app using React and Redux. Users can manage tasks, with features like filtering, reordering, and status tracking.',
      link: 'https://task-flow-task-manager.vercel.app/',
      repo: 'https://github.com/avishkar13/TaskFlow',
    },
    {
      title: 'Todo-List',
      img: 'images/TD.png',
      desc: 'This To-Do List app, built with HTML, CSS, and JS, helps users manage tasks with features like adding, editing, and deleting in a clean UI.',
      link: 'https://avishkar13.github.io/Todo-list/',
      repo: 'https://github.com/avishkar13/Todo-list',
    },
  ];

  return (
    <main>
      <motion.div
          className="projects-container w-[90vw] mx-auto my-24 p-2 md:p-4 min-h-screen"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0.01, 0.2, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-cyan-300 text-3xl md:text-6xl font-extrabold font-mono p-4 pb-10 text-center drop-shadow-lg"
          >
            My Projects
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 justify-center mb-10 md:mb-20 bg-[#0a1f2c]/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-300/30 p-6 md:p-8">
            {projectData.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-full h-auto min-h-[320px] max-w-[400px] mx-auto hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out"
              >
                <Cards
                  title={proj.title}
                  img={proj.img}
                  desc={proj.desc}
                  link={proj.link}
                  repo={proj.repo}
                  cardClass="w-full h-auto min-h-[320px] max-w-[400px] mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
    </main>
  );
};

export default Projects;
