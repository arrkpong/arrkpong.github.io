import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100 bg-white text-dark">
      {/* Header */}
      <header className="w-100 py-3 px-3 px-md-4 bg-light d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h1 className="h4 fw-bold mb-2 mb-md-0">Arrkpong Jaroensiri</h1>
        <nav>
          <ul className="nav flex-column flex-md-row">
            <li className="nav-item"><a href="#about" className="nav-link px-2 text-dark">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link px-2 text-dark">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-dark">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3 py-5">
        <h2 className="display-5 display-md-3 fw-bold mb-3">Hello, I'm Prem</h2>
        <p className="lead text-secondary mb-4 w-100 w-md-75">
          I build scalable web applications and craft delightful user experiences.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg rounded-pill">
          View Projects
        </a>
      </section>

      {/* Footer / Contact */}
      <footer className="w-100 py-3 px-3 bg-light d-flex justify-content-center gap-4 flex-wrap">
        <a href="mailto:arrkpong1@gmail.com.com" className="text-dark" aria-label="Email">
          <Mail size={24} />
        </a>
        <a href="https://github.com/arrkpong" className="text-dark" aria-label="GitHub">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/arrkpong" className="text-dark" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
      </footer>
    </main>
  );
}
