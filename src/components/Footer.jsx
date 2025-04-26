// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const iconVariant = {
  hover: { scale: 1.2, color: '#2563EB', transition: { duration: 0.2 } }
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-4 px-4 bg-gray-100 flex justify-center items-center gap-6 flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.6 } }}
    >
      <motion.a
        href="mailto:arrkpong1@gmail.com"
        aria-label="Email"
        variants={iconVariant}
        whileHover="hover"
        className="text-gray-800"
      >
        <Mail size={24} />
      </motion.a>
      <motion.a
        href="https://github.com/arrkpong"
        aria-label="GitHub"
        variants={iconVariant}
        whileHover="hover"
        className="text-gray-800"
      >
        <Github size={24} />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/arrkpong"
        aria-label="LinkedIn"
        variants={iconVariant}
        whileHover="hover"
        className="text-gray-800"
      >
        <Linkedin size={24} />
      </motion.a>
    </motion.footer>
  );
}
