import React from 'react';
import { Download } from 'lucide-react';

/**
 * Hero section
 *
 * Displays the hero area with name, role, tagline, badges and actions. This
 * section forms the first impression and uses accent colours and buttons
 * linking to projects, CV download and contact information.
 */
const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ankit Vyas</h1>
        <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
          Business, Data &amp; Marketing Analyst
        </h2>
        <p className="max-w-2xl mb-8">
          Turning customer, campaign, and business data into actionable growth insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-secondary px-3 py-1 rounded-full text-sm">
            3+ Years Analytics Experience
          </span>
          <span className="bg-secondary px-3 py-1 rounded-full text-sm">
            SQL | Python | Power BI | Tableau
          </span>
          <span className="bg-secondary px-3 py-1 rounded-full text-sm">
            MSc Marketing + BSc Statistics
          </span>
          <span className="bg-secondary px-3 py-1 rounded-full text-sm">
            Open to UK &amp; Germany Roles
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-accent text-primary px-6 py-2 rounded-md hover:bg-opacity-80 transition"
          >
            View Projects
          </a>
          <a
            href="/Ankit_Vyas_CV.pdf"
            download
            className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-primary transition flex items-center gap-2"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-primary transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;