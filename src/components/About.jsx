import React from 'react';

/**
 * About section
 *
 * A succinct summary of the candidate's professional profile, highlighting the
 * ability to combine business analysis, data analytics and marketing analytics
 * along with soft skills such as stakeholder communication and decision-making.
 */
const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary text-light">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
        <p className="text-lg mb-4">
          I am a business, data and marketing analyst with over three years of experience
          across logistics, commercial insights, retail and consulting environments. I
          combine business analysis, data analytics and marketing analytics to deliver
          actionable insights that drive growth and customer value. My expertise spans
          customer behaviour analysis, KPI reporting, stakeholder communication and
          commercial decision-making. I thrive on translating data into stories that
          guide strategic decisions.
        </p>
      </div>
    </section>
  );
};

export default About;