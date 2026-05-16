cat > src/App.jsx <<'EOF'
import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Target,
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

const skills = {
  Technical: [
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
  ],
  Analytics: [
    'KPI Reporting',
    'Customer Segmentation',
    'RFM Analysis',
    'Marketing ROI',
    'ROAS Analysis',
    'A/B Testing',
    'Funnel Analysis',
    'Cohort Analysis',
    'Dashboard Development',
    'Executive Reporting',
  ],
  Business: [
    'Campaign Performance',
    'Customer Behaviour',
    'Stakeholder Management',
    'Commercial Insight',
    'Budget Reallocation',
    'Market Research',
    'Product Performance',
    'Data Storytelling',
    'Strategic Recommendations',
  ],
};

const experience = [
  {
    role: 'Business & Performance Analyst',
    company: 'DHL',
    location: 'Derby, United Kingdom',
    period: 'Jun 2025 - Present',
    points: [
      'Analysed 7+ operational KPIs to identify performance gaps, anomalies and improvement opportunities.',
      'Built automated reporting workflows and dashboard-ready outputs, reducing manual reporting effort by 15%.',
      'Validated and quality-assured 1,500+ monthly records to improve data reliability for business-critical reporting.',
      'Partnered with cross-functional stakeholders to define metrics, gather requirements and align reporting outputs.',
    ],
  },
  {
    role: 'Strategy & Commercial Insights Analyst',
    company: 'Sky Group',
    location: 'United Kingdom',
    period: 'Jul 2024 - Jun 2025',
    points: [
      'Analysed customer behaviour, sales trends, competitor positioning and funnel performance.',
      'Led customer segmentation across 20,000+ records to identify audience insights and high-value customer groups.',
      'Created weekly performance summaries for senior stakeholders with clear commercial recommendations.',
      'Identified conversion gaps and proposed optimisation actions adopted by the sales team.',
    ],
  },
  {
    role: 'Business Analysis Consultant Intern',
    company: 'Tata Consultancy Services',
    location: 'Remote',
    period: 'Nov 2021 - Oct 2022',
    points: [
      'Cleaned and transformed 10,000+ structured records for performance reporting and strategic planning.',
      'Produced monthly KPI dashboards across 8+ business indicators.',
      'Designed reusable analytical templates that reduced reporting effort by 20%.',
      'Documented requirements, transformation logic and metric definitions to improve reporting consistency.',
    ],
  },
];

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
    category: 'Featured Marketing Analytics Project',
    description:
      'A simulated European fashion e-commerce analytics project analysing customer behaviour, campaign ROI, ROAS, CPA, conversion rate, CLV, RFM segmentation, churn risk and marketing budget reallocation.',
    metrics: ['10,000+ Customers', '50,000+ Orders', '120 Campaigns', 'ROI / ROAS', 'RFM Segmentation'],
    tools: ['SQL', 'Python', 'Pandas', 'Power BI/Tableau', 'Excel', 'GA4-style Metrics'],
    github: 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
    dashboard: '',
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    category: 'Business Intelligence',
    description:
      'An executive KPI dashboard designed to help leadership understand revenue, profit margin, regional performance, product category performance, discount impact, returns and operational bottlenecks.',
    metrics: ['Revenue KPIs', 'Margin Analysis', 'Regional View', 'Category Review'],
    tools: ['SQL', 'Power BI/Tableau', 'Excel', 'Python'],
    github: '',
    dashboard: '',
  },
  {
    title: 'E-commerce Funnel A/B Testing and Experimentation Framework',
    category: 'Product Analytics',
    description:
      'An experimentation project comparing checkout journey variants to measure conversion uplift, statistical significance, funnel drop-off and revenue impact.',
    metrics: ['A/B Test', 'Funnel Analysis', 'CVR Uplift', 'p-value'],
    tools: ['SQL', 'Python', 'Pandas', 'Matplotlib', 'Statistics'],
    github: '',
    dashboard: '',
  },
];

const education = [
  {
    title: 'MSc Marketing',
    place: 'University of Leicester, United Kingdom',
    detail: 'Marketing analytics, consumer behaviour, market research and strategy.',
  },
  {
    title: 'BSc Statistics & Mathematics',
    place: 'Gujarat University, India',
    detail: 'Statistics, probability, regression, quantitative methods and mathematical reasoning.',
  },
  {
    title: 'BA Economics & Public Administration',
    place: 'BAOU, India',
    detail: 'Economics, public policy, business environment and analytical writing.',
  },
];

const certifications = [
  'Google Data Analytics Professional Certificate',
  'Meta Marketing Analytics Professional Certificate',
  'Google Analytics 4 Certification',
  'Advanced SQL Certification',
];

const isValidLink = (link) => link && link !== '#' && link.startsWith('https://');

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
      <Sparkles size={14} />
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
    {text && <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>}
  </div>
);

const ButtonLink = ({ href, children, primary = false, download = false }) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200';

  const style = primary
    ? 'bg-cyan-300 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20'
    : 'border border-slate-700 bg-slate-900/70 text-slate-100 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200';

  return (
    <a href={href} download={download} target={download ? undefined : '_self'} className={`${base} ${style}`}>
      {children}
    </a>
  );
};

const ExternalButton = ({ href, children, primary = false }) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition duration-200';

  const style = primary
    ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200'
    : 'border border-slate-700 text-slate-200 hover:border-cyan-300 hover:text-cyan-200';

  if (!isValidLink(href)) {
    return (
      <span className={`${base} cursor-not-allowed border border-slate-800 text-slate-500`}>
        {children}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${style}`}>
      {children}
    </a>
  );
};

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-cyan-300 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[20rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[20%] h-[30rem] w-[30rem] rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-black tracking-tight text-white">
            Ankit Vyas
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-200">About</a>
            <a href="#skills" className="hover:text-cyan-200">Skills</a>
            <a href="#experience" className="hover:text-cyan-200">Experience</a>
            <a href="#projects" className="hover:text-cyan-200">Projects</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
          >
            Hire / Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <BarChart3 size={15} />
                {profile.role}
              </p>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
                Turning data into commercial decisions that recruiters can trust.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {profile.tagline} I combine business analysis, data analytics and marketing analytics to uncover growth opportunities, improve reporting clarity and support stakeholder decision-making.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="#projects" primary>
                  View Projects <ArrowUpRight size={17} />
                </ButtonLink>
                <ButtonLink href={profile.cv} download>
                  Download CV <Download size={17} />
                </ButtonLink>
                <ButtonLink href={`mailto:${profile.email}`}>
                  Contact Me <Mail size={17} />
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {['3+ Years Experience', 'SQL | Python | BI', 'MSc Marketing', 'Open to UK & Europe'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Snapshot</p>
                    <h2 className="mt-1 text-2xl font-black text-white">{profile.name}</h2>
                  </div>
                  <div className="rounded-2xl bg-cyan-300 p-3 text-slate-950">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ['Target Roles', 'Business, Data, Marketing, Product, BI & Growth Analyst'],
                    ['Location', 'London, UK - open to UK, Germany & Europe'],
                    ['Core Value', 'Data storytelling + commercial thinking'],
                    ['Best Project', 'Zalando-style ROI & segmentation case study'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-xs uppercase tracking-wide text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Profile"
              title="A commercially minded analyst with technical depth."
              text="Business, Data and Marketing Analyst with 3+ years of experience across logistics, commercial insights, retail and consulting environments. Skilled in SQL, Python, Power BI, Tableau, Excel, GA4, customer segmentation, KPI reporting, campaign performance analysis and executive-ready data storytelling."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Business Analysis', 'Requirements, stakeholder communication, KPI definition and process visibility.'],
                ['Marketing Analytics', 'Campaign ROI, ROAS, customer segmentation, funnel analysis and budget recommendations.'],
                ['BI & Reporting', 'Executive dashboards, automated reports, data quality checks and insight storytelling.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <CheckCircle2 className="text-cyan-300" size={22} />
                  <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
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

          <div className="grid gap-5 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-black text-white">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Experience"
              title="Analytics experience across operations, commercial insight and consulting."
            />

            <div className="space-y-6">
              {experience.map((job) => (
                <article key={job.role} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <p className="text-sm font-bold text-cyan-200">{job.company}</p>
                      <h3 className="mt-1 text-2xl font-black text-white">{job.role}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                        <MapPin size={15} />
                        {job.location}
                      </p>
                    </div>
                    <p className="h-fit rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-300">
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
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
                className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0
                    ? 'border-cyan-300/40 bg-cyan-300/10 shadow-cyan-950/30'
                    : 'border-white/10 bg-white/[0.035]'
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{project.category}</p>
                <h3 className="mt-4 text-xl font-black leading-tight text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-100">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ExternalButton href={project.github} primary>
                    <Github size={16} />
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

        <section id="education" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader eyebrow="Credentials" title="Education and certifications." />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-xl font-black text-white">Education</h3>
                <div className="mt-6 space-y-5">
                  {education.map((item) => (
                    <div key={item.title} className="border-l border-cyan-300/40 pl-5">
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-cyan-200">{item.place}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-xl font-black text-white">Certifications</h3>
                <ul className="mt-6 space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Contact</p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Let&apos;s connect.</h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  I&apos;m open to Business Analyst, Data Analyst, Marketing Analyst, Product Analyst, BI Analyst and Growth Analyst opportunities across the UK, Germany and Europe.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href={`mailto:${profile.email}`} primary>
                  <Mail size={17} />
                  Email Me
                </ButtonLink>
                <ExternalButton href={profile.linkedin}>
                  <Linkedin size={17} />
                  LinkedIn
                </ExternalButton>
                <ExternalButton href={profile.github}>
                  <Github size={17} />
                  GitHub
                </ExternalButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        {profile.name} © 2026 · {profile.role}
      </footer>
    </div>
  );
}

export default App;
EOF