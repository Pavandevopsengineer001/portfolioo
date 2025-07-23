import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, ClockIcon } from '@heroicons/react/24/solid';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      code: "AZ-104",
      status: "certified",
      icon: "🏆",
      color: "from-blue-500 to-blue-600",
      description: "Expertise in implementing, managing, and monitoring Azure solutions including compute, storage, network, and security services."
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      code: "AZ-400",
      status: "certified",
      icon: "🥇",
      color: "from-purple-500 to-purple-600",
      description: "Advanced skills in combining people, processes, and technologies to continuously deliver valuable products and services."
    },
    {
      title: "Certified Kubernetes Administrator",
      code: "CKA",
      status: "in-progress",
      icon: "⚡",
      color: "from-orange-500 to-orange-600",
      description: "Comprehensive understanding of Kubernetes cluster architecture, networking, security, and troubleshooting."
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certifications" className="py-20 dark:bg-slate-900 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
            Professional <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud technologies, 
            DevOps practices, and container orchestration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -8 }}
              >
                <div className="dark:bg-slate-800 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border dark:border-slate-700 border-gray-200 h-full">
                  {/* Status Badge */}
                  <div className="absolute -top-3 -right-3">
                    {cert.status === 'certified' ? (
                      <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                        <CheckBadgeIcon className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg">
                        <ClockIcon className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Certification Icon */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} text-white text-2xl shadow-lg`}>
                      {cert.icon}
                    </div>
                  </div>

                  {/* Certification Code */}
                  <div className="text-center mb-4">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-center mb-4 dark:text-white text-gray-900 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed text-center">
                    {cert.description}
                  </p>

                  {/* Status */}
                  <div className="mt-4 text-center">
                    {cert.status === 'certified' ? (
                      <span className="inline-flex items-center space-x-1 text-green-500 text-sm font-medium">
                        <CheckBadgeIcon className="w-4 h-4" />
                        <span>Certified</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-orange-500 text-sm font-medium">
                        <ClockIcon className="w-4 h-4" />
                        <span>In Progress</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">2</div>
              <div className="text-sm dark:text-gray-400 text-gray-500">Microsoft Certifications</div>
            </div>
            <div className="w-px h-12 dark:bg-slate-700 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">1</div>
              <div className="text-sm dark:text-gray-400 text-gray-500">In Progress</div>
            </div>
            <div className="w-px h-12 dark:bg-slate-700 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">100%</div>
              <div className="text-sm dark:text-gray-400 text-gray-500">Commitment to Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;