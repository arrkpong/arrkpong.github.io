import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  // Animation variants
  const headerVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const heroVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } }
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3, yoyo: Infinity } }
  };

  const iconVariant = {
    hover: { scale: 1.2, color: '#2563EB', transition: { duration: 0.2 } }
  };

  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <motion.header
        className="w-full py-3 px-4 bg-gray-100 flex flex-col md:flex-row justify-between items-center"
        variants={headerVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-xl font-bold mb-2 md:mb-0">Arrkpong Jaroensiri</h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 text-gray-800">
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline"
                  whileHover={{ scale: 1.1, color: '#1E40AF' }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
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
          href="#projects"
          className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-full"
          variants={buttonVariant}
          whileHover="hover"
        >
          View Projects
        </motion.a>
      </motion.section>

      {/* Footer / Contact */}
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
    </main>
  );
}
