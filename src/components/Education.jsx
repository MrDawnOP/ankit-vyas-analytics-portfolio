import React from 'react';

/**
 * Education history list
 */
const education = [
  {
    degree: 'MSc Marketing',
    university: 'University of Leicester, United Kingdom',
    dates: '2022 – 2023',
    focus:
      'Marketing analytics, consumer behaviour, market research, strategy, dissertation on macroeconomic factors and consumer behaviour.',
  },
  {
    degree: 'BSc Statistics & Mathematics',
    university: 'Gujarat University, India',
    dates: '2018 – 2021',
    focus:
      'Statistics, probability, regression, quantitative methods, mathematical reasoning.',
  },
  {
    degree: 'BA Economics & Public Administration',
    university: 'BAOU, India',
    dates: '2018 – 2021',
    focus:
      'Economics, public policy, business environment, analytical writing.',
  },
];

/**
 * Education section
 */
const Education = () => {
  return (
    <section id="education" className="py-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-accent">Education</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-accent">{edu.university}</p>
              <p className="text-sm">{edu.dates}</p>
              <p className="mt-2">{edu.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;