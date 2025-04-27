// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
export default function Contact() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 space-y-8"
      >
        {/* Header */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-extrabold text-gray-800 text-center"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Info */}
        <motion.div variants={containerVariants} className="flex flex-col space-y-4">
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-2 text-blue-500" />
            <a href="mailto:arrkpong1@gmail.com" className="hover:underline">
              arrkpong1@gmail.com
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-2 text-green-500" />
            <a href="tel:+6626103571" className="hover:underline">
              +66 62-610-3571
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-red-500" />
            <span>Bangkok, Thailand</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4 justify-center pt-4">
            <motion.a
              variants={itemVariants}
              href="https://github.com/arrkpong"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="h-6 w-6 text-gray-700 hover:text-gray-900 transition" />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://linkedin.com/in/arrkpong"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="h-6 w-6 text-blue-700 hover:text-blue-900 transition" />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://line.me/R/ti/p/arrkpong"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle className="h-6 w-6 text-green-500 hover:text-green-700 transition" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={containerVariants}
          action="https://formspree.io/f/mjkwkpwk"
          method="POST"
          className="space-y-4"
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </motion.div>

          <motion.input type="hidden" name="_next" value="/thank-you" />

          <motion.button
            variants={itemVariants}
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
