import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Github } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let currentSection = 'home';
      for (let i = 0; i < navItems.length; i++) {
        const section = document.querySelector(navItems[i].href);
        if (section && section.getBoundingClientRect().top <= 100) {
          currentSection = navItems[i].href.replace('#', '');
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex items-center justify-between">
          <motion.button
  onClick={() => scrollToSection('#home')}
  className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-pulse tracking-wider"
  whileHover={{ scale: 1.1 }}
>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 animate-pulse bg-[length:200%_200%] bg-left bg-no-repeat transition-all duration-700 ease-in-out drop-shadow-md tracking-wide">
  Pavan Kalyan
</span>

</motion.button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-semibold tracking-wide uppercase hover:underline underline-offset-4 decoration-blue-400 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-blue-500'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.a
              href="https://github.com/Pavandevopsengineer001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>

            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              whileTap={{ scale: 0.95 }}
            >
              <Bars3Icon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                ref={mobileMenuRef}
                className={`md:hidden fixed top-20 left-4 right-4 z-50 p-6 rounded-xl shadow-xl backdrop-blur-lg ${
                  darkMode ? 'bg-slate-800/90 text-gray-100' : 'bg-white/90 text-gray-800'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-lg font-medium hover:text-blue-500 ${
                        activeSection === item.href.replace('#', '') ? 'text-blue-500 font-semibold' : ''
                      }`}
                      whileHover={{ x: 6 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  <motion.a
                    href="https://github.com/Pavandevopsengineer001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>

                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 self-center px-4 py-2 text-sm font-semibold text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close Menu
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
