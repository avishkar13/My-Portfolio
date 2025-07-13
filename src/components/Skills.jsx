import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [progress, setProgress] = useState({
    HTML: 0,
    CSS: 0,
    JavaScript: 0,
    React: 0,
    NextJS: 0,
    NodeJS: 0,
    ExpressJS: 0,
    MongoDB: 0,
    Mongoose: 0,
    NextAuth: 0,
    LocalStorage: 0,
    JsonWebToken: 0,
  });

  useEffect(() => {
    const targetProgress = {
      HTML: 98,
      CSS: 94,
      JavaScript: 95,
      React: 90,
      NextJS: 65,
      NodeJS: 92,
      ExpressJS: 94,
      MongoDB: 85,
      Mongoose: 94,
      NextAuth: 80,
      LocalStorage: 92,
      JsonWebToken: 90,
    };

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = { ...prev };
        let allFilled = true;
        Object.keys(targetProgress).forEach((key) => {
          if (newProgress[key] < targetProgress[key]) {
            newProgress[key] += 2;
            allFilled = false;
          }
        });
        if (allFilled) clearInterval(interval);
        return newProgress;
      });
    }, 70);
  }, []);

  const renderSkill = (name, width, description, image, color) => (
    <motion.div
      key={name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="technology mb-4 flex items-center justify-center"
    >
      <img src={image} alt={name} className="w-6 h-6 mr-2 bg-white rounded-sm" />
      <div className="flex-grow">
        <div className="flex justify-between">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 w-3/4 text-[12px] md:text-sm text-right truncate">{description}</p>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ width: `${progress[name]}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="skill-container text-white w-[95vw] sm:w-[90vw] mx-auto my-24 p-2 md:p-4"
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
        className="text-3xl font-bold text-cyan-300 mb-10 text-center"
      >
        Skills
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            title: 'Frontend Tech Stack',
            skills: [
              ['HTML', 98, 'Markup language for structuring pages', 'images/html.png', '#e34c26'],
              ['CSS', 94, 'For styling; using Tailwind for responsive design', 'images/css.png', '#264de4'],
              ['JavaScript', 90, 'Core scripting for interactivity', 'images/js.png', '#f7df1e'],
              ['React', 85, 'Library for building UIs', 'images/react.png', '#61dafb'],
              ['NextJS', 65, 'Framework for server-rendered React', 'images/next.png', '#752768'],
            ],
          },
          {
            title: 'Backend Tech Stack',
            skills: [
              ['NodeJS', 92, 'JavaScript runtime for server-side', 'images/node.png', '#43853d'],
              ['ExpressJS', 94, 'Minimalist web framework for Node.js', 'images/express.png', '#787878'],
              ['JsonWebToken', 90, 'Authentication for Node.js applications', 'images/jwt.png', '#795479'],
            ],
          },
          {
            title: 'Database Tech Stack',
            skills: [
              ['MongoDB', 82, 'NoSQL database for data storage', 'images/mongodb.png', '#47a248'],
              ['Mongoose', 94, 'ODM for MongoDB and Node.js', 'images/mongoose.png', '#880000'],
            ],
          },
          {
            title: 'Other Tech Tools',
            skills: [
              ['NextAuth', 80, 'Authentication for Next.js applications', 'images/auth.jpg', '#ff6b6b'],
              ['LocalStorage', 82, 'Client-side storage for web applications', 'images/LS.jpg', '#ff8c00'],
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card w-full bg-[#0a1f2c]/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-300/30 p-5 md:p-6 text-white mx-auto hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out cursor-pointer text-sm"
          >
            <h2 className="text-2xl font-bold mb-4 md:mb-6 text-center text-cyan-300 drop-shadow-lg">
              {section.title}
            </h2>
            {section.skills.map(([name, width, desc, img, color]) =>
              renderSkill(name, width, desc, img, color)
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
