import { motion } from 'framer-motion';
import Aboutinfo from './Aboutinfo';

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
};

const About = () => {
  return (
    <div className="About text-white lg:w-[97%] xl:w-[92vw] py-16 lg:py-8 mx-auto flex flex-col lg:flex-row justify-between gap-10">

      {/* Profile Image Section */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="hidden lg:flex w-[35%] xl:w-1/3 items-center justify-center my-auto"
      >
        <img
          className="rounded-2xl w-full h-[80%] object-cover border-4 border-cyan-300 shadow-lg"
          src="images/Profile pic.jpeg"
          alt="Avishkar Deogharia"
        />
      </motion.div>

      {/* Info Box Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="Info w-[90vw] mx-auto lg:w-3/4 p-2 lg:p-4 bg-[#0a1f2c]/60 backdrop-blur-lg rounded-2xl shadow-xl border border-[#0088a9]/30"
      >
        <h1 className="text-3xl font-bold text-cyan-300 mb-6 text-center">About Me</h1>
        <Aboutinfo />
      </motion.div>
    </div>
  );
};

export default About;
