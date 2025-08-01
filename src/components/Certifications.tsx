import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/solid';
import MAZ104 from '../assets/MAZ104.pdf';
import MAZ400 from '../assets/MAZ400.pdf';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      code: "AZ-104",
      status: "certified",
      icon: "🏆",
      color: "from-blue-500 to-blue-600",
      description: "Expertise in implementing, managing, and monitoring Azure solutions including compute, storage, network, and security services.",
      link: MAZ104,
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      code: "AZ-400",
      status: "certified",
      icon: "🥇",
      color: "from-purple-500 to-purple-600",
      description: "Advanced skills in combining people, processes, and technologies to continuously deliver valuable products and services.",
      link: MAZ400,
    },
    {
      title: "Certified Kubernetes Administrator",
      code: "CKA",
      status: "in-progress",
      icon: "⚡",
      color: "from-orange-500 to-orange-600",
      description: "Comprehensive understanding of Kubernetes cluster architecture, networking, security, and troubleshooting.",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      code: "003",
      status: "in-progress",
      icon: "🌱",
      color: "from-green-500 to-green-600",
      description: "Validates basic infrastructure as code skills with Terraform across multiple cloud providers.",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeCertLink, setActiveCertLink] = useState<string | null>(null);

  const openModal = (link: string) => {
    setActiveCertLink(link);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCertLink(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalOpen) window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
  }, [modalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="py-20 dark:bg-slate-900 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Validated expertise in Cloud, DevOps, and Kubernetes platforms with globally recognized certifications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -6 }}
              >
                <div className="dark:bg-slate-800 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-slate-700 border-gray-200 h-full relative z-10">
                  <div className="absolute -top-3 -right-3 z-20">
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

                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} text-white text-2xl shadow-md`}>
                      {cert.icon}
                    </div>
                  </div>
                  <div className="text-center mb-3">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3 dark:text-white text-gray-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm text-center leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 text-center space-y-2">
                    {cert.status === 'certified' ? (
                      <>
                        <span className="inline-flex items-center space-x-1 text-green-500 text-sm font-medium">
                          <CheckBadgeIcon className="w-4 h-4" />
                          <span>Certified</span>
                        </span>
                        <div>
                          <button
                            onClick={() => cert.link && openModal(cert.link)}
                            className="mt-2 px-4 py-1 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full"
                          >
                            View Certificate
                          </button>
                        </div>
                      </>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-orange-500 text-sm font-medium">
                        <ClockIcon className="w-4 h-4" />
                        <span>In Progress</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">2</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Microsoft Certifications</p>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">2</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">In Progress</p>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">100%</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Commitment to Growth</p>
            </div>
          </div>
        </motion.div>
      </div>

      {modalOpen && activeCertLink && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-5xl w-full h-[90vh] relative shadow-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-50"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <iframe
              src={activeCertLink}
              className="w-full h-full rounded-lg"
              title="Certificate PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
