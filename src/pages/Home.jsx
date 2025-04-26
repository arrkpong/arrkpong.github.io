// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } }
};

const buttonVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3, yoyo: Infinity } }
};

export default function Home() {
  return (
    <motion.section
      className="flex-grow flex flex-col justify-center items-center text-center px-4 py-12"
      variants={heroVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        Hello, I'm Prem
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
      >
        I build scalable web applications and craft delightful user experiences.
      </motion.p>
      <motion.a
        href="/projects"
        className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-full"
        variants={buttonVariant}
        whileHover="hover"
      >
        View Projects
      </motion.a>
    </motion.section>
  );
}
