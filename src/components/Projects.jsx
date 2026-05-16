import React, { useState } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

/**
 * Project data defining the portfolio projects.
 * Placeholders are used for links; replace them with actual URLs as needed.
 */
const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    subtitle:
      'E-commerce marketing analytics project using SQL, Python, and BI-ready datasets.',
    description:
      'A simulated European fashion e-commerce analytics project inspired by Zalando-style business problems. The project analyses customer behaviour, campaign ROI, ROAS, CPA, conversion rate, customer lifetime value, RFM segmentation, churn risk, and marketing budget reallocation.',
    questions: [
      'Which customer segments generate the highest revenue and profit?',
      'Which marketing channels produce the best ROI and ROAS?',
      'Which campaigns have high spend but poor conversion?',
      'Which customer groups are at risk of churn?',
      'How should marketing budget be reallocated?',
    ],
    tools: 'SQL, Python, Pandas, Power BI/Tableau, Excel, GA4-style metrics',
    outputs: [
      'Customer segmentation model',
      'Marketing ROI dashboard',
      'Campaign performance analysis',
      'Churn-risk classification',
      'Budget reallocation recommendation',
      'Executive summary',
    ],
    links: {
     caseStudy: '#',
     github: 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
     dashboard: '#',
    },
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    subtitle:
      'Executive KPI dashboard for business performance and profitability analysis.',
    description:
      'A business intelligence project designed to help leadership understand revenue, profit margin, regional performance, product category performance, discount impact, returns, and operational bottlenecks.',
    questions: [
      'Which products and regions are driving revenue?',
      'Where is profit margin leaking?',
      'Which categories have high returns?',
      'How should leadership prioritise improvement actions?',
    ],
    tools: 'SQL, Power BI/Tableau, Excel, Python optional',
    outputs: [
      'Executive dashboard',
      'KPI dictionary',
      'Regional performance analysis',
      'Product/category profitability review',
      'Business recommendation report',
    ],
    links: {
     caseStudy: '#',
     github: 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
     dashboard: '#',
    },
  },
  {
    title: 'E-commerce Funnel A/B Testing and Experimentation Framework',
    subtitle:
      'Product analytics project focused on conversion uplift and statistical testing.',
    description:
      'An experimentation project analysing an e-commerce checkout funnel. It compares Version A and Version B of a checkout journey to measure conversion uplift, statistical significance, funnel drop-off, and revenue impact.',
    questions: [
      'Did the new checkout journey improve conversion?',
      'Was the uplift statistically significant?',
      'Which user segments responded best?',
      'Should the product team roll out the new version?',
    ],
    tools: 'SQL, Python, Pandas, Matplotlib, Tableau/Looker Studio, Statistics',
    outputs: [
      'Funnel analysis',
      'A/B test readout',
      'p-value and confidence interval calculation',
      'Conversion uplift analysis',
      'Segment-level performance',
      'Product recommendation',
    ],
    links: {
     caseStudy: '#',
     github: 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
     dashboard: '#',
    },
  },
];

/**
 * ProjectCard component
 *
 * Each card displays a project summary with actions and supports toggling
 * additional details about the project's methodology and outputs.
 */
const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-accent mb-4">{project.subtitle}</p>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-4 mb-4">
        <a
          href={project.links.caseStudy}
          className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-opacity-80 transition flex items-center gap-2"
        >
          <FileText size={16} /> View Case Study
        </a>
        <a
          href={project.links.github}
          className="border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent hover:text-primary transition flex items-center gap-2"
        >
          <Github size={16} /> GitHub Repo
        </a>
        <a
          href={project.links.dashboard}
          className="border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent hover:text-primary transition flex items-center gap-2"
        >
          <ExternalLink size={16} /> Dashboard Preview
        </a>
      </div>
      {open && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Key Questions</h4>
          <ul className="list-disc list-inside mb-2">
            {project.questions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
          <h4 className="font-semibold mb-2">Tools Used</h4>
          <p className="mb-2">{project.tools}</p>
          <h4 className="font-semibold mb-2">Key Outputs</h4>
          <ul className="list-disc list-inside">
            {project.outputs.map((o, idx) => (
              <li key={idx}>{o}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="text-accent mt-4 underline"
      >
        {open ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

/**
 * Projects section
 */
const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-accent">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;