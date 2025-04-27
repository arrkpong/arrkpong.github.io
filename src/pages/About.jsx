// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Globe,
  Database,
  GitBranch,
  Zap,
  Box,
  Figma,
  Mail,
} from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5 text-blue-500" />,
      items: ['Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Layers className="h-5 w-5 text-green-500" />,
      items: [
        'Django Framework',
        'Django Rest Framework',
        'Vue.js',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
      ],
    },
    {
      category: 'Web Development',
      icon: <Globe className="h-5 w-5 text-purple-500" />,
      items: ['HTML', 'CSS (Bootstrap)'],
    },
    {
      category: 'Databases',
      icon: <Database className="h-5 w-5 text-red-500" />,
      items: ['PostgreSQL', 'MySQL', 'Firebase', 'SQLite'],
    },
    {
      category: 'Version Control',
      icon: <GitBranch className="h-5 w-5 text-gray-700" />,
      items: ['Git', 'GitHub'],
    },
    {
      category: 'API Development & Testing',
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      items: ['Postman'],
    },
    {
      category: 'Containerization & Cloud',
      icon: <Box className="h-5 w-5 text-teal-500" />,
      items: ['Docker', 'Amazon EC2'],
    },
    {
      category: 'Design Tools',
      icon: <Figma className="h-5 w-5 text-pink-500" />,
      items: ['Figma'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full bg-white rounded-2xl shadow-md p-10 space-y-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold text-gray-800 text-center"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="space-y-4 text-gray-600 text-lg leading-relaxed"
        >
          <motion.p variants={itemVariants}>
            Hello! I'm <span className="font-semibold text-blue-600">Arrkpong Jaroensiri(Prem)</span>, a passionate full-stack developer specializing in building and deploying modern web applications. I enjoy crafting efficient, scalable, and user-friendly software solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            I have strong experience with <span className="font-semibold text-blue-600">Python (Django,Django rest)</span>, <span className="font-semibold text-green-600">JavaScript (Vue.js)</span>, and frameworks like <span className="font-semibold text-purple-600">React</span> and <span className="font-semibold text-teal-600">Streamlit</span>. I'm always learning and exploring new technologies to deliver better digital experiences.
          </motion.p>
          <motion.p variants={itemVariants}>
            When I'm not coding, I enjoy reading tech blogs, and exploring innovations in AI and machine learning.
          </motion.p>
        </motion.div>

        <motion.section variants={itemVariants} className="">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Mail className="h-6 w-6 text-blue-500" />
            <span>Skills</span>
          </h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  {skill.icon}
                  <h3 className="text-lg font-medium text-gray-700">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={itemVariants}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}