import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Secure CI/CD Pipeline from Azure Repos to AKS",
    description:
      "End-to-end secure CI/CD pipeline integrating Azure Repos with AKS cluster deployment, following best practices for container security and infrastructure as code.",
    url: "https://github.com/Pavandevopsengineer001/Secure-CI-CD-Pipeline-from-Azure-Repos-to-AKS",
  },
  {
    title: "Observability Stack for Microservices App on Kubernetes",
    description:
      "Complete observability setup using Prometheus, Grafana, and distributed tracing to monitor microservices applications running on Kubernetes.",
    url: "https://github.com/Pavandevopsengineer001/Observability-Stack-for-Microservices-App-on-Kubernetes",
  },
  {
    title: "Kubernetes Monitoring Infrastructure with Helm",
    description:
      "Helm charts and configurations to deploy a robust Kubernetes monitoring infrastructure including metrics server, Prometheus, and Grafana dashboards.",
    url: "https://github.com/Pavandevopsengineer001/Kubernetes-Monitoring-Infrastructure-with-Helm",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(74,44,58,0.4)",
  },
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 mb-28 md:mb-36 px-4 sm:px-8"
    >
      <motion.div
        className="
          max-w-7xl mx-auto px-6 py-16 rounded-xl shadow-lg
          bg-gradient-to-r from-[#4A2C3A] to-[#6B3A4C]
          dark:from-gray-800 dark:to-gray-900
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="
            text-4xl font-extrabold mb-12 text-center
            bg-clip-text text-transparent
            bg-gradient-to-r from-pink-500 via-red-600 to-yellow-400
            dark:from-pink-400 dark:via-red-500 dark:to-yellow-300
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {projects.map(({ title, description, url }) => (
            <motion.a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block rounded-xl p-6 cursor-pointer border border-transparent
                bg-[#3F2733] text-gray-300
                hover:border-pink-500 transition-colors
                dark:bg-gray-800 dark:text-gray-300
                dark:hover:border-pink-400
              "
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold text-pink-400 dark:text-pink-300 mb-3">
                {title}
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">{description}</p>
              <span className="inline-block mt-4 font-medium underline text-pink-500 dark:text-pink-400">
                View Repository
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
