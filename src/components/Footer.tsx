import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/Pavandevopsengineer001',
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:mr.pavan.kalyan.54@gmail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Phone',
      icon: <Phone size={20} />,
      href: 'tel:+919154658651',
      color: 'hover:text-green-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark:bg-slate-900 bg-gray-50 border-t dark:border-slate-800 border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Pavan Kalyan Penchikalapati
            </motion.h3>
            <p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed max-w-md">
              DevOps Engineer passionate about Infrastructure as Code, CI/CD Automation, 
              and Cloud-Native Solutions. Transforming how software is built, deployed, and maintained.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-2 dark:bg-slate-800 bg-white rounded-lg dark:text-gray-400 text-gray-600 ${link.color} transition-colors shadow-sm hover:shadow-md border dark:border-slate-700 border-gray-200`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="dark:text-gray-400 text-gray-600 hover:text-blue-500 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-gray-900">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm dark:text-gray-400 text-gray-500 mb-1">Email</p>
                <a 
                  href="mailto:mr.pavan.kalyan.54@gmail.com"
                  className="dark:text-gray-300 text-gray-700 hover:text-blue-500 transition-colors text-sm"
                >
                  mr.pavan.kalyan.54@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm dark:text-gray-400 text-gray-500 mb-1">Phone</p>
                <a 
                  href="tel:+919154658651"
                  className="dark:text-gray-300 text-gray-700 hover:text-green-500 transition-colors text-sm"
                >
                  +91 9154658651
                </a>
              </div>
              <div>
                <p className="text-sm dark:text-gray-400 text-gray-500 mb-1">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm dark:text-gray-300 text-gray-700">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t dark:border-slate-800 border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="dark:text-gray-400 text-gray-600 text-sm">
                © {currentYear} Engineered by Pavan Kalyan Penchikalapati — DevOps | Cloud | Automation
              </span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 dark:bg-slate-800 bg-white dark:text-gray-300 text-gray-700 rounded-lg hover:text-blue-500 transition-colors shadow-sm hover:shadow-md border dark:border-slate-700 border-gray-200"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-sm">Back to Top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-6 text-center">
            <p className="text-xs dark:text-gray-500 text-gray-400">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion. 
              Optimized for performance and accessibility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
