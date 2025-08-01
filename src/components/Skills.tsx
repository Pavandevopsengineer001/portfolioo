import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "Microsoft Azure", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Amazon Web Services", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Google Cloud Platform", level: 80, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: "⚙️",
      skills: [
        { name: "Azure DevOps", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "GitHub Actions", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "GitLab CI", level: 85, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      title: "Containers & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Docker", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", level: 90, color: "from-blue-400 to-purple-600" },
        { name: "Helm Charts", level: 85, color: "from-teal-400 to-teal-600" },
        { name: "Istio Service Mesh", level: 80, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: [
        { name: "Terraform", level: 95, color: "from-purple-400 to-purple-600" },
        { name: "Terragrunt", level: 85, color: "from-purple-300 to-purple-500" },
        { name: "Ansible", level: 90, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: "📊",
      skills: [
        { name: "Prometheus", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Grafana", level: 90, color: "from-orange-300 to-orange-500" },
        { name: "Splunk", level: 85, color: "from-green-400 to-green-600" },
        { name: "AppDynamics", level: 80, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "Security & Development",
      icon: "🔒",
      skills: [
        { name: "Trivy Security Scanner", level: 85, color: "from-red-400 to-red-600" },
        { name: "SonarQube", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Python Scripting", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Git & ArgoCD", level: 95, color: "from-green-400 to-green-600" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 dark:bg-slate-800 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-pulse">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the modern DevOps toolchain, focusing on automation, 
            scalability, and security-first approaches.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="dark:bg-slate-900 bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-slate-700 border-gray-200"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold dark:text-white text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm dark:text-gray-400 text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 dark:bg-slate-900 bg-gray-50 rounded-xl shadow-lg border dark:border-slate-700 border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm dark:text-gray-300 text-gray-600">Production Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm dark:text-gray-300 text-gray-600">Cloud Native</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm dark:text-gray-300 text-gray-600">Security First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
