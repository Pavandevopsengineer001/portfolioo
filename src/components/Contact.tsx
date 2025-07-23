import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { Github } from 'lucide-react';
import toast from 'react-hot-toast';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactRef = collection(db, 'contacts');
      await addDoc(contactRef, {
        ...formData,
        timestamp: Timestamp.now(),
      });

      toast.success("Message sent successfully! I'll get back to you soon.");

      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      value: 'mr.pavan.kalyan.54@gmail.com',
      href: 'mailto:mr.pavan.kalyan.54@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9154658651',
      href: 'tel:+919154658651',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'Pavandevopsengineer001',
      href: 'https://github.com/Pavandevopsengineer001',
      color: 'from-gray-500 to-gray-600',
    },
  ];

  const subjects = [
    'DevOps Consultation',
    'Job Opportunity',
    'Project Collaboration',
    'Technical Discussion',
    'Other',
  ];
  return (
    <section id="contact" className="py-20 dark:bg-slate-900 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Ready to discuss DevOps opportunities, collaborate on projects, or explore how I can
            help transform your infrastructure? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-gray-900">
                Let's Start a Conversation
              </h3>
              <p className="dark:text-gray-300 text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a DevOps engineer to join your team, need consultation
                on your infrastructure, or want to discuss the latest in cloud-native technologies,
                I'm always excited to connect with fellow professionals and innovators.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 dark:bg-slate-800 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-slate-700 border-gray-200 group"
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white text-gray-900 group-hover:text-blue-500 transition-colors">
                      {info.title}
                    </h4>
                    <p className="dark:text-gray-300 text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 dark:bg-slate-800 bg-white rounded-xl shadow-lg border dark:border-slate-700 border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold dark:text-white text-gray-900">Currently Available</span>
              </div>
              <p className="dark:text-gray-300 text-gray-600 text-sm">
                Open to new opportunities and consulting projects. Typical response time: 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="dark:bg-slate-800 bg-white p-8 rounded-xl shadow-lg border dark:border-slate-700 border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-900 bg-gray-50 border dark:border-slate-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-gray-900 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-900 bg-gray-50 border dark:border-slate-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-gray-900 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 dark:bg-slate-900 bg-gray-50 border dark:border-slate-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-gray-900 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-900 bg-gray-50 border dark:border-slate-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-gray-900 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 dark:bg-slate-900 bg-gray-50 border dark:border-slate-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-gray-900 transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-xs dark:text-gray-400 text-gray-500 text-center">
                * Required fields. Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
