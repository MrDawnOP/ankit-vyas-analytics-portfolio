import React, { useMemo, useState } from 'react';
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Github,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const ZALANDO_REPO =
  'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi';

const ZALANDO_DASHBOARD =
  'https://zalando-dashboard-website.vercel.app/';

const BOOKING_REPO =
  'https://github.com/MrDawnOP/hotel-booking-ab-dashboard';

const BOOKING_DASHBOARD =
  'https://booking-funnel-ab-testing-35gf-7yhag8u0n-mrdawnops-projects.vercel.app/';

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    subtitle:
      'E-commerce marketing analytics project using SQL, Python, and BI-ready datasets.',
    category: 'Marketing Analytics',
    featured: true,
    status: 'Featured Case Study',
    description:
      'A simulated European fashion e-commerce analytics project inspired by Zalando-style business problems. The project analyses customer behaviour, campaign ROI, ROAS, CPA, conversion rate, customer lifetime value, RFM segmentation, churn risk, and marketing budget reallocation.',
    metrics: [
      { label: 'Customers', value: '10,000+' },
      { label: 'Orders', value: '50,000+' },
      { label: 'Campaigns', value: '120' },
      { label: 'Exports', value: '18' },
      { label: 'Visuals', value: '10' },
    ],
    questions: [
      'Which customer segments generate the highest revenue and profit?',
      'Which marketing channels produce the best ROI and ROAS?',
      'Which campaigns have high spend but poor conversion?',
      'Which customer groups are at risk of churn?',
      'How should marketing budget be reallocated?',
    ],
    methodology: [
      'Structured customer, order and campaign-level data into BI-ready analytical datasets.',
      'Used RFM-style segmentation to identify high-value, repeat, inactive and churn-risk customer groups.',
      'Calculated ROI, ROAS, CPA, conversion rate, CLV and campaign-level profitability.',
      'Compared campaign performance across channels to identify underperforming spend.',
      'Converted findings into budget reallocation and customer retention recommendations.',
    ],
    outputs: [
      'Customer segmentation model',
      'Marketing ROI dashboard',
      'Campaign performance analysis',
      'Churn-risk classification',
      'Budget reallocation recommendation',
      'Executive summary',
    ],
    talkingPoints: [
      'Shows strong ability to connect marketing analytics with commercial decision-making.',
      'Demonstrates SQL, Python, segmentation, KPI reporting and executive-ready storytelling.',
      'Strong fit for Marketing Analyst, Growth Analyst, BI Analyst and Commercial Analyst roles.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Power BI/Tableau', 'Excel', 'GA4 Metrics'],
    links: {
      caseStudy: ZALANDO_DASHBOARD,
      github: ZALANDO_REPO,
      dashboard: ZALANDO_DASHBOARD,
    },
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    subtitle:
      'Executive KPI dashboard for business performance and profitability analysis.',
    category: 'Business Intelligence',
    featured: false,
    status: 'Portfolio Project',
    description:
      'A business intelligence project designed to help leadership understand revenue, profit margin, regional performance, product category performance, discount impact, returns and operational bottlenecks.',
    metrics: [
      { label: 'Focus', value: 'KPI' },
      { label: 'Audience', value: 'Exec' },
      { label: 'Analysis', value: 'Margin' },
      { label: 'Output', value: 'BI' },
    ],
    questions: [
      'Which products and regions are driving revenue?',
      'Where is profit margin leaking?',
      'Which categories have high returns?',
      'How should leadership prioritise improvement actions?',
    ],
    methodology: [
      'Defined executive-level KPIs for revenue, margin, discounting, returns and regional performance.',
      'Designed dashboard sections for leadership review and business performance monitoring.',
      'Compared product and region performance to identify profitability gaps.',
      'Translated dashboard findings into clear business recommendations.',
    ],
    outputs: [
      'Executive dashboard',
      'KPI dictionary',
      'Regional performance analysis',
      'Product/category profitability review',
      'Business recommendation report',
    ],
    talkingPoints: [
      'Shows dashboard thinking and business intelligence structure.',
      'Useful for BI Analyst, Business Analyst and Commercial Analyst interviews.',
      'Demonstrates ability to turn operational data into leadership-ready insight.',
    ],
    tools: ['SQL', 'Power BI/Tableau', 'Excel', 'Python Optional'],
    links: {
      caseStudy: 'https://booking-funnel-ab-testing-35gf-7yhag8u0n-mrdawnops-projects.vercel.app/',
      github: 'https://github.com/MrDawnOP/hotel-booking-ab-dashboard',
      dashboard: 'https://booking-funnel-ab-testing-35gf-7yhag8u0n-mrdawnops-projects.vercel.app/',
    },
  },
  {
    title: 'Hotel Booking Funnel A/B Testing & Revenue Uplift Analysis',
    subtitle:
      'Product analytics case study measuring checkout conversion uplift, funnel drop-off and revenue impact.',
    category: 'Product Analytics',
    featured: true,
    status: 'New Case Study',
    description:
      'A hotel booking platform-style experimentation project analysing whether a simplified booking checkout journey improved conversion rate, payment success, revenue per visitor and completed bookings. The dashboard compares Variant A and Variant B using funnel analysis, statistical testing, segment-level uplift and commercial impact.',
    metrics: [
      { label: 'Sessions', value: '60,000+' },
      { label: 'Events', value: '240k+' },
      { label: 'CVR Uplift', value: '+23%' },
      { label: 'p-value', value: '2.7e-9' },
      { label: 'Rev Uplift', value: '$302k' },
    ],
    questions: [
      'Did the simplified checkout journey improve booking conversion?',
      'Was the uplift statistically significant?',
      'Where did users drop off across the booking funnel?',
      'Which customer segments responded best to Variant B?',
      'Should product leadership roll out the new checkout experience?',
    ],
    methodology: [
      'Created a simulated 21-day A/B test with approximately 60,000 booking sessions split between Variant A and Variant B.',
      'Tracked funnel progression from search started through hotel view, room selection, checkout, payment success and completed booking.',
      'Calculated Variant A and Variant B conversion rates, absolute uplift, relative uplift, p-value and confidence interval.',
      'Measured revenue per visitor, average booking value and estimated incremental revenue from the winning variant.',
      'Analysed segment-level uplift across device, customer type, loyalty membership and acquisition channels.',
    ],
    outputs: [
      'Interactive A/B testing dashboard',
      'Variant A vs Variant B conversion comparison',
      'Funnel drop-off analysis',
      'Revenue uplift analysis',
      'Segment-level performance readout',
      'Product rollout recommendation',
    ],
    talkingPoints: [
      'Shows strong product analytics and experimentation thinking beyond basic dashboarding.',
      'Demonstrates ability to connect statistical testing with commercial revenue impact.',
      'Strong fit for Product Analyst, Growth Analyst, Data Analyst, BI Analyst and Commercial Analyst roles.',
    ],
    tools: [
      'SQL',
      'Python',
      'Pandas',
      'React',
      'Vite',
      'Tailwind CSS',
      'A/B Testing',
      'Funnel Analysis',
      'Statistics',
    ],
    links: {
      caseStudy: BOOKING_DASHBOARD,
      github: BOOKING_REPO,
      dashboard: BOOKING_DASHBOARD,
    },
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

const isValidLink = (href) => {
  return (
    href &&
    href !== '#' &&
    href !== 'PASTE_YOUR_LIVE_DASHBOARD_URL_HERE' &&
    href.startsWith('https://')
  );
};

const ActionButton = ({ href, children, variant = 'outline' }) => {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition duration-200';

  const styles = {
    primary:
      'bg-accent text-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20',
    outline:
      'border border-accent/60 text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-primary',
    disabled:
      'cursor-not-allowed border border-slate-700 text-slate-500 opacity-70',
  };

  if (!isValidLink(href)) {
    return (
      <span className={`${baseClass} ${styles.disabled}`} title="Live link coming soon">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} ${styles[variant]}`}
    >
      {children}
    </a>
  );
};

const DetailList = ({ title, icon: Icon, items }) => {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-primary/70 p-5">
      <h4 className="mb-4 flex items-center gap-2 font-semibold text-light">
        <Icon size={17} className="text-accent" />
        {title}
      </h4>

      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(project.featured);

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        project.featured
          ? 'border-accent/50 bg-secondary shadow-accent/10'
          : 'border-slate-700/70 bg-secondary/80'
      }`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            {project.featured ? <Sparkles size={14} /> : <BarChart3 size={14} />}
            {project.status}
          </span>

          <span className="rounded-full bg-primary/70 px-3 py-1 text-xs font-medium text-slate-300">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-light">
          {project.title}
        </h3>

        <p className="mt-3 text-sm font-semibold text-accent">
          {project.subtitle}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {project.metrics.map((metric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className="rounded-2xl border border-slate-700/70 bg-primary/70 p-4 text-center"
            >
              <p className="text-lg font-bold text-light">{metric.value}</p>
              <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-700/70 bg-primary/60 px-3 py-1 text-xs text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ActionButton href={project.links.caseStudy} variant="primary">
            <FileText size={16} />
            View Case Study
          </ActionButton>

          <ActionButton href={project.links.github}>
            <Github size={16} />
            GitHub Repo
          </ActionButton>

          <ActionButton href={project.links.dashboard}>
            <ExternalLink size={16} />
            Dashboard Preview
          </ActionButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary/70 px-4 py-2 text-sm font-semibold text-accent transition hover:translate-x-1 hover:bg-primary"
        >
          {open ? (
            <>
              Hide case study details <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show case study details <ChevronDown size={16} />
            </>
          )}
        </button>

        {open && (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <DetailList
              title="Business Questions"
              icon={Target}
              items={project.questions}
            />

            <DetailList
              title="Methodology"
              icon={BarChart3}
              items={project.methodology}
            />

            <DetailList
              title="Key Outputs"
              icon={ExternalLink}
              items={project.outputs}
            />

            <DetailList
              title="Recruiter Talking Points"
              icon={TrendingUp}
              items={project.talkingPoints}
            />
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const searchableText = [
        project.title,
        project.subtitle,
        project.category,
        project.description,
        ...project.tools,
        ...project.outputs,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="projects" className="bg-primary py-20 text-light">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent">
              <Sparkles size={14} />
              Recruiter-ready portfolio
            </p>

            <h2 className="text-3xl font-bold text-accent md:text-4xl">
              Analytics Case Studies
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Explore practical analytics projects across marketing ROI, customer
              segmentation, BI dashboards, funnel analysis and experimentation.
              Each project is framed around business questions, methodology,
              outputs and interview-ready talking points.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search projects, tools or outputs..."
                className="w-full rounded-2xl border border-slate-700 bg-secondary px-11 py-3 text-sm text-light outline-none transition placeholder:text-slate-500 focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
                    activeCategory === category
                      ? 'border-accent bg-accent text-primary shadow-lg shadow-accent/20'
                      : 'border-slate-700 text-slate-300 hover:border-accent hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-700 bg-secondary p-10 text-center">
            <p className="text-lg font-semibold text-light">
              No matching projects found.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Try searching for SQL, Power BI, marketing, funnel or segmentation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;