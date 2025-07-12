import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: '0 0 40px 0 rgba(0,212,255,0.18)',
    transition: {
      duration: 0.7,
      ease: [0.4, 0.01, 0.2, 1],
    },
  },
};

const Cards = ({ img, title, desc, link, repo, cardClass }) => {
  return (
    <motion.div
  className={`card h-full flex flex-col justify-between bg-[#0a1f2c]/70 backdrop-blur-lg shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 p-5 rounded-2xl text-white cursor-pointer transition-all duration-300 ease-in-out border border-[#0088a9]/30 ${cardClass || 'w-full min-h-[460px]'}`}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  whileHover={{ scale: 1.04, rotate: -1, boxShadow: '0 0 60px 0 rgba(0,212,255,0.25)' }}
  whileTap={{ scale: 0.97, rotate: 1, boxShadow: '0 0 30px 0 rgba(139,92,246,0.25)' }}
>

      <img
        className="w-[95%] h-[150px] object-cover rounded-xl shadow-lg border-2 border-[#0088a9]/40 mb-2"
        src={img}
        alt={title || 'Project image'}
        onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
      />

      <div className="Info w-[95%] flex flex-col gap-4 flex-1 min-h-0">
        <h1 className="text-base md:text-xl font-bold font-mono text-cyan-300 drop-shadow-lg">{title}</h1>
        <p className="w-full text-sm font-mono max-h-[150px] text-gray-200 overflow-auto pr-2 no-scrollbar flex-1">
          {desc}
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-2 w-full px-2 mt-auto">
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label="View Live Project">
            <motion.button
              type="button"
              whileHover={{ scale: 1.07, boxShadow: '0 0 20px 0 rgba(6,182,212,0.5)' }}
              whileTap={{ scale: 0.97, boxShadow: '0 0 10px 0 rgba(6,182,212,0.7)' }}
              className="bg-[#0088a9]/80 backdrop-blur-md text-white border border-cyan-300 hover:bg-cyan-300 hover:text-[#0a1f2c] font-semibold rounded-xl text-base px-4 py-2 transition-all duration-300 ease-in-out shadow-md hover:scale-105 w-full"
            >
              Live Link
            </motion.button>
          </a>

          <a href={repo} target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
            <motion.button
              type="button"
              whileHover={{ scale: 1.07, boxShadow: '0 0 20px 0 rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.97, boxShadow: '0 0 10px 0 rgba(139,92,246,0.7)' }}
              className="bg-[#0088a9]/80 backdrop-blur-md text-white border border-purple-400 hover:bg-purple-400 hover:text-[#0a1f2c] font-semibold rounded-xl text-base px-4 py-2 transition-all duration-300 ease-in-out shadow-md hover:scale-105 w-full"
            >
              GitHub Repo
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

Cards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  cardClass: PropTypes.string,
};

export default Cards;
