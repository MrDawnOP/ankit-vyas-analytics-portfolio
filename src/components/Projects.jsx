import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Database,
  ExternalLink,
  FileText,
  Github,
  Layers,
  LineChart,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const ZALANDO_REPO =
  'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi';

const ZALANDO_DASHBOARD =
  'https://zalando-style-customer-segmentation-roi-voxh-ntbpsdy74.vercel.app/';

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    subtitle:
      'E-commerce marketing analytics project using SQL, Python, and BI-ready datasets.',
    category: 'Marketing Analytics',
    featured: true,
    status: 'Featured Case Study',
    maturity: 95,
    impactScore: 92,
    complexityScore: 88,
    businessFit: 'Marketing Analyst · Data Analyst · Business Analyst',
    description:
      'A simulated European fashion e-commerce analytics project inspired by Zalando-style business problems. The project analyses customer behaviour, campaign ROI, ROAS, CPA, conversion rate, customer lifetime value, RFM segmentation, churn risk, and marketing budget reallocation.',
    metrics: [
      { label: 'Customers', value: '10,000+', icon: Users },
      { label: 'Orders', value: '50,000+', icon: Database },
      { label: 'Campaigns', value: '120', icon: Target },
      { label: 'Exports', value: '18', icon: Layers },
      { label: 'Visuals', value: '10', icon: BarChart3 },
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
      caseStudy: ZALANDO_REPO,
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
    maturity: 72,
    impactScore: 78,
    complexityScore: 70,
    businessFit: 'BI Analyst · Commercial Analyst · Business Analyst',
    description:
      'A business intelligence project designed to help leadership understand revenue, profit margin, regional performance, product category performance, discount impact, returns and operational bottlenecks.',
    metrics: [
      { label: 'Focus', value: 'KPI', icon: Target },
      { label: 'Audience', value: 'Exec', icon: Users },
      { label: 'Analysis', value: 'Margin', icon: TrendingUp },
      { label: 'Output', value: 'BI', icon: BarChart3 },
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
    status: 'Portfolio Project',
    maturity: 68,
    impactScore: 74,
    complexityScore: 82,
    businessFit: 'Product Analyst · Growth Analyst · Marketing Analyst',
    description:
      'An experimentation project analysing an e-commerce checkout funnel. It compares Version A and Version B of a checkout journey to measure conversion uplift, statistical significance, funnel drop-off and revenue impact.',
    metrics: [
      { label: 'Method', value: 'A/B', icon: LineChart },
      { label: 'Focus', value: 'Funnel', icon: Layers },
      { label: 'Metric', value: 'CVR', icon: TrendingUp },
      { label: 'Output', value: 'Rollout', icon: CheckCircle2 },
    ],
    questions: [
      'Did the new checkout journey improve conversion?',
      'Was the uplift statistically significant?',
      'Which user segments responded best?',
      'Should the product team roll out the new version?',
    ],
    methodology: [
      'Compared control and variant groups across the checkout journey.',
      'Calculated conversion rate, uplift, p-value and confidence interval.',
      'Reviewed funnel drop-off by stage and customer segment.',
      'Prepared a product recommendation based on statistical and commercial impact.',
    ],
    outputs: [
      'Funnel analysis',
      'A/B test readout',
      'p-value and confidence interval calculation',
      'Conversion uplift analysis',
      'Segment-level performance',
      'Product recommendation',
    ],
    talkingPoints: [
      'Shows product analytics and experimentation understanding.',
      'Demonstrates statistical thinking beyond basic dashboarding.',
      'Strong fit for Product Analyst and Growth Analyst roles.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Matplotlib', 'Looker/Tableau', 'Statistics'],
    links: {
      caseStudy: '#',
      github: '#',
      dashboard: '#',
    },
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

const isValidLink = (href) => {
  return href && href !== '#' && href.startsWith('https://');
};

const ProgressBar = ({ label, value }) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-300">{label}</span>
        <span className="font-bold text-cyan-300">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-950/90 ring-1 ring-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-lime-300 shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

const ActionButton = ({ href, children, variant = 'outline' }) => {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition duration-200';

  const styles = {
    primary:
      'bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/20',
    outline:
      'border border-cyan-300/50 text-cyan-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-slate-950',
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
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-inner shadow-cyan-950/30">
      <h4 className="mb-4 flex items-center gap-2 font-semibold text-slate-50">
        <Icon size={17} className="text-cyan-300" />
        {title}
      </h4>

      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
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
          ? 'border-cyan-300/40 bg-slate-900/90 shadow-[0_0_45px_rgba(34,211,238,0.12)]'
          : 'border-slate-800 bg-slate-900/70'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)]" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200">
            {project.featured ? <Sparkles size={14} /> : <BarChart3 size={14} />}
            {project.status}
          </span>

          <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
            {project.category}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <h3 className="text-2xl font-bold leading-tight text-slate-50 md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm font-semibold text-cyan-300">
              {project.subtitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-300">
              <Target size={14} className="text-cyan-300" />
              {project.businessFit}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-inner shadow-cyan-950/40">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-50">
              <TrendingUp size={17} className="text-cyan-300" />
              Project Strength Scorecard
            </h4>
            <div className="space-y-4">
              <ProgressBar label="Recruiter Readiness" value={project.maturity} />
              <ProgressBar label="Business Impact" value={project.impactScore} />
              <ProgressBar label="Technical Depth" value={project.complexityScore} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {project.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={`${metric.label}-${metric.value}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-950/40"
              >
                <Icon size={18} className="mx-auto mb-2 text-cyan-300" />
                <p className="text-lg font-bold text-slate-50">{metric.value}</p>
                <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300/70 hover:text-cyan-200"
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
            Live Dashboard
          </ActionButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:translate-x-1 hover:border-cyan-300/60"
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
        project.businessFit,
        ...project.tools,
        ...project.outputs,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const portfolioStats = useMemo(() => {
    return [
      { label: 'Case Studies', value: projects.length, icon: FileText },
      { label: 'Featured Project', value: '1', icon: Sparkles },
      { label: 'Core Tools', value: '8+', icon: Database },
      { label: 'Live Dashboards', value: '1', icon: ExternalLink },
    ];
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 text-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-200">
              <Sparkles size={14} />
              Recruiter-ready portfolio
            </p>

            <h2 className="bg-gradient-to-r from-slate-50 via-cyan-200 to-emerald-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Interactive Analytics Case Studies
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Explore practical analytics projects across marketing ROI, customer
              segmentation, BI dashboards, funnel analysis and experimentation.
              Each project is structured around business questions, methods,
              outputs, tools and interview-ready talking points.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {portfolioStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/40"
                >
                  <Icon size={18} className="mb-2 text-cyan-300" />
                  <p className="text-2xl font-bold text-slate-50">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/40">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
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
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-11 py-3 text-sm text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
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
                      ? 'border-cyan-300 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20'
                      : 'border-slate-800 text-slate-300 hover:border-cyan-300 hover:text-cyan-200'
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
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-center">
            <p className="text-lg font-semibold text-slate-50">
              No matching projects found.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Try searching for SQL, Power BI, marketing, funnel or segmentation.
            </p>
          </div>
        )}

        <div className="mt-10 rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-50">
                Want to review the strongest proof first?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Start with the Zalando-style project. It includes a live dashboard,
                GitHub repository, SQL scripts, Python pipeline, processed datasets,
                executive summary and business recommendations.
              </p>
            </div>

            <a
              href={ZALANDO_DASHBOARD}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Open Featured Dashboard
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
