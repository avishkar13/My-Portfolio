import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const Cards = lazy(() => import('./Cards'));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0.01, 0.2, 1] },
  },
};

const Projects = () => {
  const projectData = [
    {
      title: 'StoryCrafter - AI powered Content Creator',
      img: 'images/StoryCrafter.png',
      desc: 'StoryCrafter is an AI-powered content creation platform designed for modern creators. From scriptwriting and thumbnail generation to SEO optimization and title suggestions, StoryCrafter helps you craft engaging content effortlessly.',
      link: 'https://storycrafter.onrender.com/',
      repo: 'https://github.com/avishkar13/StoryCrafter ',
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
      <Suspense
        fallback={
          <div className="min-h-[300px] bg-gray-900/60 rounded-2xl animate-pulse" />
        }
      >
        <motion.div
          className="projects-container w-[90vw] mx-auto my-24 p-2 md:p-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="py-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-cyan-300 text-3xl md:text-6xl font-extrabold font-mono p-4 pb-10 text-center drop-shadow-lg"
            >
              My Projects
            </motion.h1>

            <motion.div
              className="card-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 justify-center mb-10 md:mb-20 bg-[#0a1f2c]/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-300/30 p-6 md:p-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {projectData.map((proj, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
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
            </motion.div>
          </div>
        </motion.div>
      </Suspense>
    </main>
  );
};

export default Projects;
