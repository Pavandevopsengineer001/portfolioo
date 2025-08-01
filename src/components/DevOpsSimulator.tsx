import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CubeTransparentIcon,
  CloudArrowUpIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';
import successSound from '../assets/success.mp3';
import kubeScreenshot from '../assets/kubernetes-dashboard.png';

const steps = [
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
    title: 'Code Checkout',
    description: 'Fetching latest code from GitHub repository...'
  },
  {
    icon: <CubeTransparentIcon className="w-8 h-8 text-purple-600" />,
    title: 'Docker Build',
    description: 'Building Docker image for the application...'
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8 text-yellow-500" />,
    title: 'Push to Registry',
    description: 'Pushing Docker image to container registry...'
  },
  {
    icon: <ServerStackIcon className="w-8 h-8 text-green-600" />,
    title: 'Deploy to K8s',
    description: 'Creating deployment on Kubernetes cluster...'
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-red-500" />,
    title: 'Security Scan',
    description: 'Running Trivy & OWASP security scans...'
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8 text-emerald-500" />,
    title: 'Monitoring',
    description: 'Prometheus + SonarQube health check...'
  }
];

const DevOpsSimulator: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [audio] = useState(() => new Audio(successSound));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && stepIndex < steps.length) {
      timer = setTimeout(() => {
        const nextStep = stepIndex + 1;
        setStepIndex(nextStep);
        if (nextStep === steps.length) {
          audio.play();
          setTimeout(() => {
            setStepIndex(0);
            setIsRunning(false);
          }, 10000); // reset after 10 seconds
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, stepIndex]);

  const startSimulation = () => {
    setStepIndex(0);
    setIsRunning(true);
  };

  const stopSimulation = () => {
    setIsRunning(false);
  };

  return (
    <section
      id="devops-simulator"
      className="py-16 px-4 dark:bg-slate-900 bg-gray-100 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 DevOps Deployment Simulator
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 justify-center">
        {steps.slice(0, stepIndex).map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white dark:bg-slate-800 border dark:border-slate-700 border-gray-200 p-4 rounded-xl text-center shadow-lg"
          >
            <div className="mb-2 flex justify-center">{step.icon}</div>
            <h4 className="text-sm font-bold">{step.title}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{step.description}</p>

            {index < stepIndex - 1 && (
              <>
                {/* Desktop arrow */}
                <svg
                  className="absolute hidden lg:block -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400 dark:text-blue-300 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 12h16m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Mobile arrow */}
                <svg
                  className="absolute block lg:hidden left-1/2 bottom-[-20px] transform -translate-x-1/2 w-6 h-6 text-blue-400 dark:text-blue-300 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4v16m0 0l4-4m-4 4l-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {stepIndex === steps.length && (
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-bold text-green-500 mb-4">✅ Deployment Completed Successfully!</p>
          <motion.img
            src={kubeScreenshot}
            alt="Kubernetes Dashboard"
            className="mx-auto rounded-lg shadow-xl max-w-md w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        {!isRunning && stepIndex === 0 && (
          <button
            onClick={startSimulation}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            ▶️ Start Deployment
          </button>
        )}

        {isRunning && (
          <button
            onClick={stopSimulation}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            ⏹ Stop Deployment
          </button>
        )}

        {!isRunning && stepIndex > 0 && stepIndex < steps.length && (
          <button
            onClick={startSimulation}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            ⏩ Resume
          </button>
        )}

        {!isRunning && stepIndex === steps.length && (
          <button
            onClick={startSimulation}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            🔁 Restart Simulation
          </button>
        )}
      </div>
    </section>
  );
};

export default DevOpsSimulator;
