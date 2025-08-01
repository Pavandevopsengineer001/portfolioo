import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

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

  return (
    <footer className="dark:bg-slate-950 bg-gray-50 border-t dark:border-slate-800 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-2xl font-extrabold mb-4
                text-transparent bg-clip-text
                bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200
                animate-pulse drop-shadow-md tracking-wide
              "
            >
              Pavan Kalyan Penchikalapati
            </h3>
            <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed max-w-md">
              DevOps Engineer focused on IaC, CI/CD, and Cloud Automation. Transforming the way software is built, deployed, and operated.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`p-2 dark:bg-slate-800 bg-white rounded-lg dark:text-gray-400 text-gray-600 ${link.color} transition hover:shadow-lg border dark:border-slate-700 border-gray-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm dark:text-gray-400 text-gray-600 hover:text-blue-500 transition"
                    whileHover={{ x: 6 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-gray-900">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Email</p>
                <a href="mailto:mr.pavan.kalyan.54@gmail.com" className="dark:text-gray-300 text-gray-700 hover:text-blue-500">
                  mr.pavan.kalyan.54@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Phone</p>
                <a href="tel:+919154658651" className="dark:text-gray-300 text-gray-700 hover:text-green-500">
                  +91 9154658651
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-300">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t dark:border-slate-800 border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="mb-4 md:mb-0">
              © {currentYear} Engineered by Pavan Kalyan Penchikalapati — DevOps | Cloud | Automation
            </span>
            <span className="text-xs text-center">
              Built with React, TypeScript, TailwindCSS, Framer Motion.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
