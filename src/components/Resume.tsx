import React from 'react';
import { motion } from 'framer-motion';
import {
  DocumentArrowDownIcon,
  EyeIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import BackToTopButton from './BackToTopButton';

const RESUME_URL =
  'https://raw.githubusercontent.com/Pavandevopsengineer001/portfolio/main/Pavan%20Kalyan%20Penchikalapat5%20(1).pdf';

const Resume: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const previewInline = () => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
      RESUME_URL
    )}&embedded=true`;

    const iframe = document.createElement('iframe');
    iframe.src = viewerUrl;
    iframe.width = '80%';
    iframe.height = '90%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';
    iframe.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    modal.style.zIndex = '9999';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.appendChild(iframe);
    modal.appendChild(closeBtn);

    closeBtn.onclick = () => document.body.removeChild(modal);
    modal.onclick = (e) => {
      if (e.target === modal) document.body.removeChild(modal);
    };

    document.body.appendChild(modal);
  };

  return (
    <section
      id="resume"
      className="relative py-20 dark:bg-slate-800 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
            My Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Download or preview my latest resume showcasing DevOps skills,
            certifications, and cloud expertise.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto dark:bg-slate-900 bg-gray-50 rounded-xl shadow-xl border p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div className="flex items-center space-x-4 overflow-hidden">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <DocumentArrowDownIcon className="w-6 h-6 text-white" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 truncate max-w-[180px] sm:max-w-xs">
                  Pavankalyan_resumee.pdf
                </h3>
                <p className="text-sm dark:text-gray-400 text-gray-500">
                  ~ Size based on GitHub file
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-500 text-sm font-medium">
              <CalendarIcon className="w-4 h-4" />
              <span>Updated {today}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={RESUME_URL}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>

            <motion.button
              onClick={previewInline}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 dark:bg-slate-800 bg-white dark:text-white text-gray-900 rounded-lg font-semibold border dark:border-slate-700 border-gray-200 hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <EyeIcon className="w-5 h-5" />
              <span>Preview Inline</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default Resume;
