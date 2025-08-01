import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
        bg-gray-50
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      {/* Decorative Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.03,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              <span className="text-gray-600 dark:text-gray-300 text-base block mb-1">
                Hi, I’m a Certified and Qualified DevOps Specialist
              </span>

              {/* Gold animated name */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 animate-pulse bg-[length:200%_200%] bg-left bg-no-repeat transition-all duration-700 ease-in-out drop-shadow-md tracking-wide select-text">
                Pavan Kalyan Penchikalapati
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white font-medium animate-pulse shadow">
                Empowering Delivery, Automating Everything ⚙️🔥
              </span>
            </p>

            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Passionate about <strong>Cloud Automation</strong>, <strong>CI/CD pipelines</strong>, <strong>Monitoring & Observability</strong>, <strong>GitOps</strong>, and <strong>Infrastructure as Code (IaC)</strong>.<br />
              Delivering secure, scalable, and production-ready platforms across multi-cloud environments with proven expertise and hands-on experience.
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to Contact Section"
          >
            Get In Touch
          </motion.button>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600 dark:text-gray-400 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div>📧 <a href="mailto:mr.pavan.kalyan.54@gmail.com" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">mr.pavan.kalyan.54@gmail.com</a></div>
            <div className="hidden sm:block">📱 <a href="tel:+919154658651" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 9154658651</a></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About Section"
      >
        <ChevronDownIcon className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
