import React from 'react';

/**
 * Skill groups configuration
 */
const skillGroups = [
  {
    title: 'Technical Skills',
    skills: [
      'SQL',
      'Python',
      'Pandas',
      'NumPy',
      'Excel',
      'Power BI',
      'Tableau',
      'Looker Studio',
      'Google Analytics 4',
      'Power Query',
      'Google Sheets',
    ],
  },
  {
    title: 'Analytics Skills',
    skills: [
      'KPI Reporting',
      'Customer Segmentation',
      'RFM Analysis',
      'Marketing ROI Analysis',
      'ROAS Analysis',
      'A/B Testing',
      'Funnel Analysis',
      'Cohort Analysis',
      'Churn Risk Analysis',
      'Business Requirements',
      'Data Cleaning',
      'Dashboard Development',
      'Executive Reporting',
    ],
  },
  {
    title: 'Business & Marketing Skills',
    skills: [
      'Campaign Performance Analysis',
      'Customer Behaviour Analysis',
      'Stakeholder Management',
      'Market Research',
      'Commercial Insight',
      'Budget Reallocation',
      'Product Performance Analysis',
      'Data Storytelling',
      'Strategic Recommendations',
    ],
  },
];

/**
 * Skills section
 *
 * Groups skills into technical, analytics, and business categories and
 * displays them in responsive cards.
 */
const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-accent">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;