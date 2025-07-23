import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudIcon, 
  CogIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const devOpsPhilosophy = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Treating infrastructure with the same rigor as application code, ensuring consistency and repeatability."
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "CI/CD Automation",
      description: "Building robust pipelines that enable rapid, reliable software delivery with automated testing and deployment."
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: "Cloud-Native Practices",
      description: "Leveraging containerization, microservices, and cloud platforms for scalable, resilient applications."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Security-First Delivery",
      description: "Integrating security scanning, compliance checks, and best practices throughout the development lifecycle."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Observability & Monitoring",
      description: "Implementing comprehensive monitoring, logging, and alerting for production-grade system reliability."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 dark:bg-slate-900 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl dark:text-gray-300 text-gray-700 leading-relaxed mb-8">
              I'm a <span className="font-semibold text-blue-500">technically sharp, DevOps-first engineer</span> who 
              believes in transforming how software is built, deployed, and maintained. My approach centers on 
              automation, reliability, and security, ensuring that every system I touch becomes more efficient, 
              scalable, and resilient.
            </p>
            
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              With deep expertise in cloud platforms, containerization, and modern DevOps practices, I focus on 
              creating robust infrastructures that enable teams to deliver value faster while maintaining the 
              highest standards of quality and security.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {devOpsPhilosophy.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="dark:bg-slate-800 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-slate-700 border-gray-200"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-blue-500 mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white text-gray-900">
                  {principle.title}
                </h3>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 dark:bg-slate-800 bg-white rounded-xl shadow-lg border dark:border-slate-700 border-gray-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="dark:text-gray-300 text-gray-700 font-medium">
                Available for challenging DevOps opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;