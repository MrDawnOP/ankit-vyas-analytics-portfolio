import React from 'react';

/**
 * List of professional certifications
 */
const certifications = [
  'Google Data Analytics Professional Certificate',
  'Meta Marketing Analytics Professional Certificate',
  'Google Analytics 4 Certification',
  'Advanced SQL Certification',
];

/**
 * Certifications section
 */
const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-secondary text-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-accent">Certifications</h2>
        <ul className="space-y-4">
          {certifications.map((cert, idx) => (
            <li key={idx} className="bg-primary p-4 rounded-md">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;