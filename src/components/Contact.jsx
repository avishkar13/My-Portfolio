import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      emailjs
        .sendForm('service_u9fj7m9', 'template_yvlprv9', form.current, 'sCR55zdmdvxewod9s')
        .then(() => {
          toast.success('Form Submitted Successfully!', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
        })
        .catch(() => {
          toast.error('Form Submission Failed!', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
        })
        .finally(() => setIsSubmitting(false));
    } else {
      setErrors(formErrors);
    }
  };

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.4, 0.01, 0.2, 1],
      },
    }),
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 pb-12">
      <ToastContainer theme="dark" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full max-w-7xl mx-auto p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row gap-8 bg-[#0a1f2c]/80 backdrop-blur-lg shadow-2xl border border-cyan-300/20"
      >
        {/* Form Section */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col gap-6 bg-[#0f0f0f]/60 rounded-2xl p-6 md:p-8 shadow-lg border border-cyan-300/20"
        >
          <motion.h1
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center font-bold font-mono text-3xl md:text-4xl lg:text-5xl text-cyan-300 drop-shadow-lg mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {['firstName', 'lastName'].map((field, index) => (
                <motion.div
                  key={field}
                  variants={fadeInUp}
                  custom={index + 1}
                  className="relative"
                >
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 bg-[#0f0f0f]/80 text-white border border-cyan-300/30 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300"
                    placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                  />
                  {errors[field] && (
                    <span className="text-red-500 text-sm mt-1">{errors[field]}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {['email', 'phone'].map((field, i) => (
              <motion.div
                key={field}
                variants={fadeInUp}
                custom={i + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="relative"
              >
                <input
                  type={field === 'email' ? 'email' : 'tel'}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 bg-[#0f0f0f]/80 text-white border border-cyan-300/30 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300"
                  placeholder={field === 'email' ? 'Email Address' : 'Phone Number'}
                />
                {errors[field] && (
                  <span className="text-red-500 text-sm mt-1">{errors[field]}</span>
                )}
              </motion.div>
            ))}

            <motion.div
              variants={fadeInUp}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="relative"
            >
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 text-base text-white bg-[#0f0f0f]/80 border border-cyan-300/30 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300"
                placeholder="Your Message"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={fadeInUp}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="w-full sm:w-fit mx-auto px-8 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:scale-105 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="w-full lg:w-1/3 flex flex-col justify-start gap-6 bg-[#0f0f0f]/60 rounded-2xl p-6 md:p-8 shadow-lg border border-cyan-300/20"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-3xl font-bold text-cyan-300 font-mono text-center"
          >
            Connect with Me
          </motion.h2>

          <div className="flex flex-col gap-4">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/avishkar-deogharia', icon: 'images/linkedin.svg' },
              { name: 'GitHub', href: 'https://github.com/avishkar13', icon: 'images/github.svg' },
              { name: 'Instagram', href: 'https://www.instagram.com/_avishkar__13/', icon: 'images/instagram.svg' },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ scale: 1.05 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0f0f0f]/80 rounded-xl border border-cyan-300/30 shadow-md hover:scale-105 hover:bg-[#0f0f0f]/90 transition-all duration-300 backdrop-blur-lg group"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="w-10 h-10 invert group-hover:invert-0 group-hover:bg-cyan-300/20 rounded-md p-1 transition-all duration-300"
                />
                <span className="text-lg text-gray-200 font-mono group-hover:text-cyan-300">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
