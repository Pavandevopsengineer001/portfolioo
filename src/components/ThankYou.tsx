import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ThankYou: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white'
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-16 h-16 text-green-500" />
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] bg-left bg-no-repeat">
          Thank You!
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Your message has been received successfully. I'll review it and get back to you with tailored insights for your DevOps or cloud project.
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg"
        >
          Go to Home
        </a>
      </motion.div>
    </section>
  );
};

export default ThankYou;
