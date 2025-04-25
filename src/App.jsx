import React from 'react';
import { Mail, GitHub, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8 bg-gray-100 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hello, I'm Your Name</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          I build scalable web applications and craft delightful user experiences.
        </p>
        <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          View Projects
        </a>
      </section>

      {/* Footer / Contact */}
      <footer className="w-full py-6 px-8 bg-gray-100 flex justify-center space-x-6">
        <a href="mailto:youremail@example.com" className="hover:text-indigo-600"><Mail size={20} /></a>
        <a href="https://github.com/username" className="hover:text-indigo-600"><GitHub size={20} /></a>
        <a href="https://linkedin.com/in/username" className="hover:text-indigo-600"><Linkedin size={20} /></a>
      </footer>
    </main>
  );
}
