import React from 'react';
import { Download } from 'lucide-react';

/**
 * CV download section
 *
 * Prompts visitors to download the candidate's CV. A placeholder file
 * exists in the public folder and should be replaced with the actual CV.
 */
const CVDownload = () => {
  return (
    <section id="cvdownload" className="py-16 bg-secondary text-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent">Download My CV</h2>
        <p className="mb-6">
          Looking for a data-driven analyst who can combine technical analysis with
          commercial thinking? Download my latest CV below.
        </p>
        <a
          href="/Ankit_Vyas_CV.pdf"
          download
          className="bg-accent text-primary px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-opacity-80 transition"
        >
          <Download size={18} /> Download CV
        </a>
      </div>
    </section>
  );
};

export default CVDownload;