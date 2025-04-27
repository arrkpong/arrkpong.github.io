// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Calendar, Building2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Image Classification CNN App using CIFAR-10 Dataset',
      technologies: ['Python', 'TensorFlow', 'Streamlit'],
      year: 2023,
      description:
        'Built an image classification app leveraging a Convolutional Neural Network (CNN) model trained on the CIFAR-10 dataset. Deployed the app using Streamlit for easy and interactive user experience. Achieved [X]% accuracy in image classification tasks.',
    },
    {
      title: 'Web-based Top-up Card System',
      technologies: ['Python (Django Framework)', 'Stripe Payment'],
      year: 2023,
      description:
        'Developed a web-based top-up card system to handle card purchases and payments. Integrated Stripe API for secure online payment processing. Ensured high availability and scalability for handling multiple transactions.',
    },
    {
      title: 'Web-based ERP Hotel System',
      technologies: ['Python (Django Framework)'],
      year: 2024,
      description:
        'Designed and implemented a comprehensive ERP system for hotel management, including features for booking, inventory, and guest management. Used Django to build RESTful APIs for seamless front-end integration. Increased operational efficiency by streamlining hotel management processes.',
    },
    {
      title: 'Incident & Blacklist Feature (Central Retail)',
      technologies: ['Python (Django Framework)', 'Vue.js'],
      year: 2025,
      company: 'Contracted by Accord Innovations Co., Ltd (3-month urgent project)',
      description:
        'Implemented an incident reporting and blacklist management module for a Top Market system under a fast-paced 3-month contract. Used Django to create secure and scalable RESTful APIs for managing incidents, user reports, and blacklist logic.',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col space-y-4 p-6 rounded-2xl shadow-md bg-white transform transition duration-300 ease-in-out hover:shadow-xl"
          >
            {/* Title with Icon */}
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-700">{project.title}</h2>
            </div>

            {/* Technologies */}
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-green-500" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-5 w-5 text-purple-500" />
              <span><strong>Year:</strong> {project.year}</span>
            </div>

            {/* Company (optional) */}
            {project.company && (
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Building2 className="h-5 w-5 text-yellow-500" />
                <span><strong>Company:</strong> {project.company}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
