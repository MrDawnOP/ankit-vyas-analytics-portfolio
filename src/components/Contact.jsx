import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

/**
 * Contact section
 *
 * Offers ways to reach the candidate via email, LinkedIn and GitHub.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-light">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent">Let’s Connect</h2>
        <p className="mb-6">
          I’m open to Business Analyst, Data Analyst, Marketing Analyst, Product Analyst,
          BI Analyst, and Growth Analyst opportunities across the UK, Germany, and Europe.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ankitvyas6666@gmail.com"
            className="bg-accent text-primary px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80 transition"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="ADD_LINKEDIN_URL"
            className="border border-accent text-accent px-6 py-2 rounded-md flex items-center gap-2 hover:bg-accent hover:text-primary transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="ADD_GITHUB_URL"
            className="border border-accent text-accent px-6 py-2 rounded-md flex items-center gap-2 hover:bg-accent hover:text-primary transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;