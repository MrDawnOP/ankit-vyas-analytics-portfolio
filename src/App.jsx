import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
  TrendingUp,
} from 'lucide-react';

const profile = {
  name: 'Ankit Vyas',
  role: 'Business, Data & Marketing Analyst',
  tagline: 'Turning customer, campaign, and business data into actionable growth insights.',
  location: 'London, United Kingdom',
  email: 'ankitvyas6666@gmail.com',
  linkedin: 'ADD_LINKEDIN_URL',
  github: 'ADD_GITHUB_URL',
  cv: '/Ankit_Vyas_CV.pdf',
};

const zalandoDashboard =
  'https://zalando-dashboard-website.vercel.app/';

const skills = [
  'SQL',
  'Python',
  'Pandas',
  'Excel',
  'Power BI',
  'Tableau',
  'Google Analytics 4',
  'Customer Segmentation',
  'KPI Reporting',
  'Marketing ROI',
  'ROAS Analysis',
  'A/B Testing',
  'Dashboard Development',
  'Executive Reporting',
];

const experience = [
  {
    role: 'Business & Performance Analyst',
    company: 'DHL',
    location: 'Derby, United Kingdom',
    period: 'Jun 2025 – Present',
    points: [
      'Analysed 7+ operational KPIs to identify performance gaps and improvement opportunities.',
      'Built automated reporting workflows, reducing manual reporting effort by 15%.',
      'Validated 1,500+ monthly records to improve data reliability for performance reporting.',
    ],
  },
  {
    role: 'Strategy & Commercial Insights Analyst',
    company: 'Sky Group',
    location: 'United Kingdom',
    period: 'Jul 2024 – Jun 2025',
    points: [
      'Analysed customer behaviour, sales trends, competitor positioning and funnel performance.',
      'Led customer segmentation across 20,000+ records to identify high-value audiences.',
      'Created weekly performance summaries for senior stakeholders.',
    ],
  },
  {
    role: 'Business Analysis Consultant Intern',
    company: 'Tata Consultancy Services',
    location: 'Remote',
    period: 'Nov 2021 – Oct 2022',
    points: [
      'Cleaned and transformed 10,000+ structured records for reporting and strategic planning.',
      'Produced KPI dashboards across 8+ business indicators.',
      'Documented requirements, transformation logic and metric definitions.',
    ],
  },
];

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    category: 'Featured Marketing Analytics Case Study',
    description:
      'A European fashion e-commerce analytics project analysing customer behaviour, campaign ROI, ROAS, CPA, conversion rate, CLV, RFM segmentation, churn risk and marketing budget reallocation.',
    tools: ['SQL', 'Python', 'Pandas', 'Power BI/Tableau', 'Excel'],
    metrics: ['10,000+ Customers', '50,000+ Orders', '120 Campaigns', 'ROI / ROAS'],
    github: 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
    dashboard: zalandoDashboard,
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    category: 'Business Intelligence',
    description:
      'An executive KPI dashboard for revenue, profit margin, regional performance, product performance, discounts, returns and recommendations.',
    tools: ['SQL', 'Power BI/Tableau', 'Excel'],
    metrics: ['Revenue KPIs', 'Margin Analysis', 'Regional View', 'Executive Dashboard'],
    github: '',
    dashboard: 'https://zalando-dashboard-website.vercel.app/',
  },
  {
    title: 'E-commerce Funnel A/B Testing Framework',
    category: 'Product Analytics',
    description:
      'A product analytics project comparing checkout journey variants to measure conversion uplift, statistical significance and funnel drop-off.',
    tools: ['SQL', 'Python', 'Pandas', 'Statistics'],
    metrics: ['A/B Testing', 'Funnel Analysis', 'CVR Uplift', 'p-value'],
    github: '',
    dashboard: 'https://zalando-dashboard-website.vercel.app/',
  },
];

const education = [
  'MSc Marketing — University of Leicester',
  'BSc Statistics & Mathematics — Gujarat University',
  'BA Economics & Public Administration — BAOU',
];

const certifications = [
  'Google Data Analytics Professional Certificate',
  'Meta Marketing Analytics Professional Certificate',
  'Google Analytics 4 Certification',
  'Advanced SQL Certification',
];

const isValidUrl = (url) => url && url.startsWith('https://');

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900 dark:text-white"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
      <Sparkles size={14} />
      {eyebrow}
    </p>
    <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">
      {title}
    </h2>
    {text && <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p>}
  </div>
);

const PrimaryButton = ({ href, children, download = false }) => (
  <a
    href={href}
    download={download}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
  >
    {children}
  </a>
);

const SecondaryButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
  >
    {children}
  </a>
);

const ExternalButton = ({ href, children, primary = false }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-black transition';

  if (!isValidUrl(href)) {
    return (
      <span className={`${base} cursor-not-allowed border border-slate-300 text-slate-400 dark:border-white/10 dark:text-slate-500`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        primary
          ? `${base} bg-cyan-400 text-slate-950 hover:bg-cyan-300`
          : `${base} border border-slate-300 text-slate-900 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200`
      }
    >
      {children}
    </a>
  );
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute right-[-14rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-black tracking-tight text-slate-950 dark:text-white">
            Ankit Vyas
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-700 dark:hover:text-cyan-200">About</a>
            <a href="#skills" className="hover:text-cyan-700 dark:hover:text-cyan-200">Skills</a>
            <a href="#experience" className="hover:text-cyan-700 dark:hover:text-cyan-200">Experience</a>
            <a href="#projects" className="hover:text-cyan-700 dark:hover:text-cyan-200">Projects</a>
            <a href="#contact" className="hover:text-cyan-700 dark:hover:text-cyan-200">Contact</a>
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                <BarChart3 size={15} />
                {profile.role}
              </p>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Turning data into growth decisions recruiters can trust.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {profile.tagline} I combine business analysis, data analytics and marketing analytics to uncover growth opportunities, improve KPI reporting and support commercial decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href="#projects">
                  View Projects <ArrowUpRight size={17} />
                </PrimaryButton>
                <SecondaryButton href={profile.cv} download>
                  Download CV <Download size={17} />
                </SecondaryButton>
                <SecondaryButton href={`mailto:${profile.email}`}>
                  Contact Me <Mail size={17} />
                </SecondaryButton>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  '3+ Years Experience',
                  'SQL | Python | BI',
                  'MSc Marketing',
                  'Open to UK & Europe',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-cyan-950/30">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/80">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-white/10">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio Snapshot</p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{profile.name}</h2>
                  </div>
                  <div className="rounded-2xl bg-cyan-400 p-3 text-slate-950">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ['Target Roles', 'Business, Data, Marketing, Product, BI & Growth Analyst'],
                    ['Location', 'London, UK. Open to UK, Germany & Europe'],
                    ['Core Value', 'Data storytelling + commercial thinking'],
                    ['Featured Project', 'Zalando-style ROI & segmentation case study'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/70">
                      <p className="text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Profile"
              title="A commercially minded analyst with technical depth."
              text="Business, Data and Marketing Analyst with 3+ years of experience across logistics, commercial insights, retail and consulting environments. Skilled in SQL, Python, Power BI, Tableau, Excel, GA4, customer segmentation, KPI reporting and executive-ready data storytelling."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Business Analysis', 'Requirements, stakeholder communication, KPI definition and process visibility.'],
                ['Marketing Analytics', 'Campaign ROI, ROAS, segmentation, funnel analysis and budget recommendations.'],
                ['BI & Reporting', 'Executive dashboards, automated reports, data quality checks and insight storytelling.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
                  <CheckCircle2 className="text-cyan-600 dark:text-cyan-300" size={22} />
                  <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Skills"
            title="Tooling, analytics and business capability."
            text="Grouped for recruiter readability and ATS relevance."
          />

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Experience"
              title="Analytics experience across operations, commercial insight and consulting."
            />

            <div className="space-y-6">
              {experience.map((job) => (
                <article key={job.role} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <p className="text-sm font-black text-cyan-700 dark:text-cyan-200">{job.company}</p>
                      <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{job.role}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={15} />
                        {job.location}
                      </p>
                    </div>
                    <p className="h-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Projects"
            title="Portfolio case studies built for analyst interviews."
            text="Each project highlights business questions, tools, outputs and commercial recommendations."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0
                    ? 'border-cyan-400/40 bg-cyan-400/10'
                    : 'border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.035]'
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
                  {project.category}
                </p>
                <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-950/70 dark:text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-white/10 dark:text-cyan-100">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ExternalButton href={project.github} primary>
                    <ExternalLink size={16} />
                    GitHub
                  </ExternalButton>
                  <ExternalButton href={project.dashboard}>
                    <ArrowUpRight size={16} />
                    Dashboard
                  </ExternalButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader eyebrow="Credentials" title="Education and certifications." />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">Education</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {education.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">Certifications</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {certifications.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-cyan-500/10 p-8">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">Let’s connect.</h2>
            <p className="mt-4 max-w-none leading-8 text-slate-600 dark:text-slate-300 lg:whitespace-nowrap">
              I’m open to Business Analyst, Data Analyst, Marketing Analyst, Product Analyst, BI Analyst and Growth Analyst opportunities across the UK, Germany and Europe.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href={`mailto:${profile.email}`}>
                <Mail size={17} />
                Email Me
              </PrimaryButton>
              <ExternalButton href={profile.linkedin}>
                <ExternalLink size={17} />
                LinkedIn
              </ExternalButton>
              <ExternalButton href={profile.github}>
                <ExternalLink size={17} />
                GitHub
              </ExternalButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-white/10">
        {profile.name} © 2026 · {profile.role}
      </footer>
    </div>
  );
}

export default App;
