// src/components/Nav.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const headerVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Nav() {
  return (
    <motion.header
      className="w-full py-3 px-4 bg-gray-100 flex flex-col md:flex-row justify-between items-center"
      variants={headerVariant}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-xl font-bold mb-2 md:mb-0">Arrkpong Jaroensiri</h1>
      <nav>
        <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 text-gray-800">
          {[
            { name: 'About', to: '/about' },
            { name: 'Projects', to: '/projects' },
            { name: 'Contact', to: '/contact' }
          ].map((item) => (
            <li key={item.name}>
              <motion.div whileHover={{ scale: 1.1, color: '#1E40AF' }}>
                <Link to={item.to} className="hover:underline">
                  {item.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
