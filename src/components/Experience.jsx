import React from 'react';

/**
 * Structured list of professional experiences ordered chronologically.
 */
const experiences = [
  {
    title: 'Business & Performance Analyst',
    company: 'DHL',
    location: 'Derby, United Kingdom',
    dates: 'Jun 2025 – Present',
    bullets: [
      'Analysed 7+ operational KPIs to identify performance gaps, recurring anomalies, and improvement opportunities for senior stakeholders.',
      'Built automated reporting workflows and dashboard-ready outputs, reducing manual reporting effort by 15%.',
      'Validated and quality-assured 1,500+ monthly records to improve data reliability for performance reviews and business-critical reporting.',
      'Partnered with cross-functional stakeholders to define metrics, gather requirements, and align reporting outputs with operational objectives.',
      'Delivered actionable recommendations based on root-cause analysis, helping improve process visibility and decision-making.',
    ],
  },
  {
    title: 'Strategy & Commercial Insights Analyst',
    company: 'Sky Group',
    location: 'United Kingdom',
    dates: 'Jul 2024 – Jun 2025',
    bullets: [
      'Analysed customer behaviour, sales trends, competitor positioning, and funnel performance to support commercial strategy and product decisions.',
      'Led customer segmentation across 20,000+ records, identifying audience insights that improved targeted engagement and customer satisfaction by 15%.',
      'Created weekly performance summaries for senior stakeholders, translating revenue trends and customer feedback into clear recommendations.',
      'Identified conversion gaps and proposed optimisation actions adopted by the sales team.',
      'Communicated complex analysis to non-technical stakeholders in a clear and decision-focused way.',
    ],
  },
  {
    title: 'Business Analysis Consultant Intern',
    company: 'Tata Consultancy Services',
    location: 'Remote',
    dates: 'Nov 2021 – Oct 2022',
    bullets: [
      'Supported client-facing analytics projects by cleaning and transforming 10,000+ structured records for performance reporting and strategic planning.',
      'Produced monthly KPI dashboards across 8+ business indicators to help leadership monitor performance and identify risks.',
      'Designed reusable analytical templates that reduced reporting effort by 20%.',
      'Documented business requirements, transformation logic, and metric definitions to improve consistency and reproducibility.',
    ],
  },
];

/**
 * Experience section
 *
 * Renders professional experiences using cards to summarise role, company,
 * location, dates and bullet points.
 */
const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-secondary text-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-accent">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-primary p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-accent">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-sm">{exp.dates}</div>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;