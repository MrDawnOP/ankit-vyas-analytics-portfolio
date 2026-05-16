import React, { useEffect, useState } from 'react';

const profile = {
  name: 'Ankit Vyas',
  role: 'Business, Data & Marketing Analyst',
  email: 'ankitvyas6666@gmail.com',
  location: 'London, United Kingdom',
  cv: '/Ankit_Vyas_CV.pdf',
  linkedin: 'ADD_LINKEDIN_URL',
  github: 'ADD_GITHUB_URL',
};

const zalandoDashboard = 'https://zalando-dashboard-website.vercel.app/';
const zalandoGithub = 'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi';

const workProof = [
  {
    value: '3+ Years',
    label: 'Analytics, operations and commercial insight experience',
  },
  {
    value: '20,000+',
    label: 'Customer records analysed for segmentation and insight',
  },
  {
    value: '1,500+',
    label: 'Monthly records validated for reliable reporting',
  },
  {
    value: '15%',
    label: 'Manual reporting effort reduced through automation',
  },
];

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

const projects = [
  {
    title: 'Zalando-Style Customer Segmentation & Marketing ROI Dashboard',
    label: 'Featured Work',
    description:
      'A European fashion e-commerce analytics dashboard covering customer segmentation, marketing ROI, ROAS, CPA, conversion rate, churn risk and budget reallocation.',
    outcomes: [
      'Built a structured dashboard around revenue, ROI, ROAS and customer segment performance.',
      'Analysed campaign efficiency across paid search, email, paid social and display.',
      'Translated customer segment behaviour into retention and budget recommendations.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Power BI/Tableau', 'Excel'],
    dashboard: zalandoDashboard,
    github: zalandoGithub,
  },
  {
    title: 'Retail Business Performance Intelligence Dashboard',
    label: 'Business Intelligence',
    description:
      'Executive KPI dashboard concept for understanding revenue, margin, regional performance, returns and product category profitability.',
    outcomes: [
      'Defined commercial KPIs for leadership reporting.',
      'Mapped revenue and margin performance across regions and categories.',
      'Created recommendations for business improvement priorities.',
    ],
    tools: ['SQL', 'Power BI/Tableau', 'Excel'],
    dashboard: '',
    github: '',
  },
  {
    title: 'E-commerce Funnel A/B Testing Framework',
    label: 'Product Analytics',
    description:
      'Experimentation framework for measuring checkout conversion uplift, statistical significance, funnel drop-off and revenue impact.',
    outcomes: [
      'Compared control and variant checkout journeys.',
      'Measured conversion uplift and segment-level response.',
      'Prepared rollout recommendation based on statistical and business impact.',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'Statistics'],
    dashboard: '',
    github: '',
  },
];

const experience = [
  {
    role: 'Business & Performance Analyst',
    company: 'DHL',
    location: 'Derby, United Kingdom',
    period: 'Jun 2025 - Present',
    points: [
      'Analysed 7+ operational KPIs to identify performance gaps and improvement opportunities.',
      'Built automated reporting workflows, reducing manual reporting effort by 15%.',
      'Validated 1,500+ monthly records to improve data reliability for business reporting.',
      'Partnered with stakeholders to define metrics, requirements and reporting outputs.',
    ],
  },
  {
    role: 'Strategy & Commercial Insights Analyst',
    company: 'Sky Group',
    location: 'United Kingdom',
    period: 'Jul 2024 - Jun 2025',
    points: [
      'Analysed customer behaviour, sales trends, competitor positioning and funnel performance.',
      'Led customer segmentation across 20,000+ records to identify high-value audiences.',
      'Created weekly performance summaries for senior stakeholders.',
      'Identified conversion gaps and proposed optimisation actions.',
    ],
  },
  {
    role: 'Business Analysis Consultant Intern',
    company: 'Tata Consultancy Services',
    location: 'Remote',
    period: 'Nov 2021 - Oct 2022',
    points: [
      'Cleaned and transformed 10,000+ structured records for reporting and strategic planning.',
      'Produced KPI dashboards across 8+ business indicators.',
      'Designed reusable analytical templates that reduced reporting effort by 20%.',
      'Documented requirements, transformation logic and metric definitions.',
    ],
  },
];

const education = [
  'MSc Marketing - University of Leicester',
  'BSc Statistics & Mathematics - Gujarat University',
  'BA Economics & Public Administration - BAOU',
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
      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-400"
    >
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  );
};

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mb-10 max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
      {title}
    </h2>
    {text && (
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    )}
  </div>
);

const PrimaryLink = ({ href, children, download = false }) => (
  <a
    href={href}
    download={download}
    className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
  >
    {children}
  </a>
);

const SecondaryLink = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
  >
    {children}
  </a>
);

const ExternalLinkButton = ({ href, children, primary = false }) => {
  if (!isValidUrl(href)) {
    return (
      <span className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400 dark:border-slate-800 dark:text-slate-600">
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
          ? 'inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200'
          : 'inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white'
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
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-bold tracking-wide">
            Ankit Vyas
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a href="#work" className="hover:text-slate-950 dark:hover:text-white">Work</a>
            <a href="#experience" className="hover:text-slate-950 dark:hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-slate-950 dark:hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-slate-950 dark:hover:text-white">Contact</a>
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Business, Data & Marketing Analyst
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-6xl">
              I build analysis, dashboards and recommendations that help teams make better decisions.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I’m Ankit Vyas, an analyst based in London. I care about doing the work properly:
              understanding the problem, cleaning the data, building the analysis, explaining the insight
              and making the output useful for real business decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryLink href="#work">View my work</PrimaryLink>
              <SecondaryLink href={profile.cv} download>Download CV</SecondaryLink>
              <SecondaryLink href={`mailto:${profile.email}`}>Contact me</SecondaryLink>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workProof.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-2xl font-bold text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeader
              eyebrow="Selected work"
              title="Work first. Everything else second."
              text="These projects are here to show how I think, how I structure analysis and how I turn data into clear business recommendations."
            />

            <div className="space-y-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {project.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <ExternalLinkButton href={project.dashboard} primary>
                          View work
                        </ExternalLinkButton>
                        <ExternalLinkButton href={project.github}>
                          GitHub
                        </ExternalLinkButton>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        What this work shows
                      </h4>

                      <ul className="mt-5 space-y-4">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Experience"
            title="Practical work across operations, commercial insight and reporting."
            text="My experience is focused on reliable reporting, stakeholder-ready outputs and turning operational or customer data into useful decisions."
          />

          <div className="space-y-6">
            {experience.map((job) => (
              <article
                key={job.role}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{job.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
                </div>

                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeader
              eyebrow="Skills"
              title="Tools I use to do the work."
              text="No unnecessary noise. These are the tools and methods I use to analyse, report and communicate clearly."
            />

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">Education</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {education.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">Certifications</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {certifications.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
                Let the work start the conversation.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                I’m open to Business Analyst, Data Analyst, Marketing Analyst, Product Analyst,
                BI Analyst and Growth Analyst opportunities across the UK, Germany and Europe.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryLink href={`mailto:${profile.email}`}>Email me</PrimaryLink>
                <ExternalLinkButton href={profile.linkedin}>LinkedIn</ExternalLinkButton>
                <ExternalLinkButton href={profile.github}>GitHub</ExternalLinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        {profile.name} © 2026 · Work first. Noise second.
      </footer>
    </div>
  );
}

export default App;
