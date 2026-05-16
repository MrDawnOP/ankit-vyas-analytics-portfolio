import React, { useMemo, useState } from 'react';
import {
  ExternalLink,
  Github,
  FileText,
  Filter,
  BarChart3,
  Target,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

const ZALANDO_REPO =
  'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi';

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    subtitle:
      'E-commerce marketing analytics project using SQL, Python, and BI-ready datasets.',
    category: 'Marketing Analytics',
    featured: true,
    metrics: [
      '10,000 Customers',
      '50,000 Orders',
      '120 Campaigns',
      '18 Exports',
      '10 Visuals',
    ],
    description:
      'A simulated European fashion e-commerce analytics project inspired by Zalando-style business problems. The project analyses customer behaviour, campaign ROI, ROAS, CPA, conversion rate, customer lifetime value, RFM segmentation, churn risk, and marketing budget reallocation.',
    questions: [
      'Which customer segments generate the highest revenue and profit?',
      'Which marketing channels produce the best ROI and ROAS?',
      'Which campaigns have high spend but poor conversion?',
      'Which customer groups are at risk of churn?',
      'How should marketing budget be reallocated?',
    ],
    methodology: [
      'Cleaned and structured customer, order and campaign-level datasets.',
      'Created customer segments using RFM-style logic and behavioural indicators.',
      'Calculated ROI, ROAS, CPA, conversion rate and campaign profitability.',
      'Identified underperforming channels and proposed budget reallocation actions.',
    ],
    insights: [
      'High-value customer groups should receive priority retention campaigns.',
      'Campaigns with strong reach but weak conversion need creative and landing-page review.',
      'Budget should shift from low-ROAS campaigns into stronger customer acquisition channels.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Power BI/Tableau', 'Excel', 'GA4-style metrics'],
    outputs: [
      'Customer segmentation model',
      'Marketing ROI dashboard',
      'Campaign performance analysis',
      'Churn-risk classification',
      'Budget reallocation recommendation',
      'Executive summary',
    ],
    links: {
      caseStudy: ZALANDO_REPO,
      github: ZALANDO_REPO,
      dashboard: ZALANDO_REPO,
    },
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    subtitle:
      'Executive KPI dashboard for business performance and profitability analysis.',
    category: 'Business Intelligence',
    featured: false,
    metrics: [
      'Revenue KPIs',
      'Margin Analysis',
      'Regional View',
      'Category Review',
      'Executive Summary',
    ],
    description:
      'A business intelligence project designed to help leadership understand revenue, profit margin, regional performance, product category performance, discount impact, returns, and operational bottlenecks.',
    questions: [
      'Which products and regions are driving revenue?',
      'Where is profit margin leaking?',
      'Which categories have high returns?',
      'How should leadership prioritise improvement actions?',
    ],
    methodology: [
      'Defined executive KPI requirements and dashboard structure.',
      'Created business-friendly revenue, margin, discount and returns views.',
      'Compared product and regional performance to identify commercial gaps.',
      'Translated dashboard findings into leadership recommendations.',
    ],
    insights: [
      'Margin leakage can be reduced by reviewing discount-heavy categories.',
      'Regional performance differences highlight where commercial focus is needed.',
      'Return-heavy categories require closer operational and product review.',
    ],
    tools: ['SQL', 'Power BI/Tableau', 'Excel', 'Python optional'],
    outputs: [
      'Executive dashboard',
      'KPI dictionary',
      'Regional performance analysis',
      'Product/category profitability review',
      'Business recommendation report',
    ],
    links: {
      caseStudy: '#',
      github: '#',
      dashboard: '#',
    },
  },
  {
    title: 'E-commerce Funnel A/B Testing and Experimentation Framework',
    subtitle:
      'Product analytics project focused on conversion uplift and statistical testing.',
    category: 'Product Analytics',
    featured: false,
    metrics: [
      'A/B Test',
      'Funnel Analysis',
      'Conversion Uplift',
      'p-value',
      'Recommendation',
    ],
    description:
      'An experimentation project analysing an e-commerce checkout funnel. It compares Version A and Version B of a checkout journey to measure conversion uplift, statistical significance, funnel drop-off, and revenue impact.',
    questions: [
      'Did the new checkout journey improve conversion?',
      'Was the uplift statistically significant?',
      'Which user segments responded best?',
      'Should the product team roll out the new version?',
    ],
    methodology: [
      'Defined control and variant groups for checkout funnel comparison.',
      'Calculated conversion rate, uplift, confidence interval and p-value.',
      'Analysed funnel drop-off by step and customer segment.',
      'Prepared a product recommendation based on statistical and commercial impact.',
    ],
    insights: [
      'Checkout changes should be judged by both conversion uplift and revenue impact.',
      'Segment-level results help identify where rollout is strongest.',
      'Statistical significance protects teams from acting on noisy results.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Matplotlib', 'Tableau/Looker Studio', 'Statistics'],
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
      github: '#',
      dashboard: '#',
    },
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

const isRealLink = (url) => url && url !== '#';

const ProjectLink = ({ href, children, variant = 'outline' }) => {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition duration-200';

  const variants = {
    primary:
      'bg-accent text-primary hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg',
    outline:
      'border border-accent text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-primary hover:shadow-lg',
    disabled:
      'cursor-not-allowed border border-slate-600 text-slate-500 opacity-70',
  };

  if (!isRealLink(href)) {
    return (
      <span className={`${baseClass} ${variants.disabled}`} title="Link coming soon">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(project.featured);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        project.featured
          ? 'border-accent/50 bg-secondary'
          : 'border-slate-700/60 bg-secondary/70'
      }`}
    >
      {project.featured && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          <Sparkles size={14} />
          Featured Case Study
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-2 inline-flex rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">
            {project.category}
          </p>

          <h3 className="text-2xl font-bold leading-tight text-light">
            {project.title}
          </h3>

          <p className="mt-3 text-sm font-medium text-accent">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-xl border border-slate-700/70 bg-primary/60 p-3 text-center"
            >
              <p className="text-xs font-semibold text-slate-300">{metric}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-primary/70 px-3 py-1 text-xs text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <ProjectLink href={project.links.caseStudy} variant="primary">
            <FileText size={16} />
            View Case Study
          </ProjectLink>

          <ProjectLink href={project.links.github}>
            <Github size={16} />
            GitHub Repo
          </ProjectLink>

          <ProjectLink href={project.links.dashboard}>
            <ExternalLink size={16} />
            Dashboard Preview
          </ProjectLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition hover:translate-x-1"
        >
          {open ? (
            <>
              Hide Case Study Details <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show Case Study Details <ChevronDown size={16} />
            </>
          )}
        </button>

        {open && (
          <div className="mt-4 grid gap-5 rounded-2xl border border-slate-700/70 bg-primary/70 p-5 md:grid-cols-2">
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-light">
                <Target size={16} className="text-accent" />
                Business Questions
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.questions.map((question) => (
                  <li key={question} className="flex gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-light">
                <BarChart3 size={16} className="text-accent" />
                Key Outputs
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.outputs.map((output) => (
                  <li key={output} className="flex gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-light">Methodology</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.methodology.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-light">Recruiter Talking Points</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.insights.map((insight) => (
                  <li key={insight} className="flex gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="bg-primary py-20 text-light">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <Filter size={14} />
              Portfolio Projects
            </p>

            <h2 className="text-3xl font-bold text-accent md:text-4xl">
              Analytics Case Studies
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Explore practical analytics projects covering marketing ROI,
              customer segmentation, executive dashboards, funnel analysis and
              experimentation. Each project is structured around business
              questions, methodology, outputs and recruiter-ready talking points.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                  activeCategory === category
                    ? 'border-accent bg-accent text-primary shadow-lg'
                    : 'border-slate-700 text-slate-300 hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;