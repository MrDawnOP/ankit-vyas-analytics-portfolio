import React from 'react';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-cyan-300">
          Business, Data & Marketing Analyst
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight">
          Ankit Vyas
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Turning customer, campaign, and business data into actionable growth insights.
          Skilled in SQL, Python, Power BI, Tableau, Excel, GA4, customer segmentation,
          KPI reporting and marketing analytics.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200"
          >
            View Projects
          </a>

          <a
            href="/Ankit_Vyas_CV.pdf"
            download
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-white hover:border-cyan-300"
          >
            Download CV
          </a>

          <a
            href="mailto:ankitvyas6666@gmail.com"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-white hover:border-cyan-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black">About</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Business, Data and Marketing Analyst with 3+ years of experience across
            logistics, commercial insights, retail and consulting environments. I combine
            business analysis, data analytics and marketing analytics to produce clear,
            commercial, recruiter-ready insights.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            'SQL',
            'Python',
            'Pandas',
            'Excel',
            'Power BI',
            'Tableau',
            'GA4',
            'KPI Reporting',
            'Customer Segmentation',
            'Marketing ROI',
            'A/B Testing',
            'Dashboard Development',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black">Experience</h2>

          <div className="mt-8 space-y-6">
            {[
              {
                role: 'Business & Performance Analyst',
                company: 'DHL',
                period: 'Jun 2025 – Present',
                points: [
                  'Analysed 7+ operational KPIs to identify performance gaps and improvement opportunities.',
                  'Built automated reporting workflows, reducing manual reporting effort by 15%.',
                  'Validated 1,500+ monthly records to improve data reliability.',
                ],
              },
              {
                role: 'Strategy & Commercial Insights Analyst',
                company: 'Sky Group',
                period: 'Jul 2024 – Jun 2025',
                points: [
                  'Analysed customer behaviour, sales trends and funnel performance.',
                  'Led customer segmentation across 20,000+ records.',
                  'Created weekly performance summaries for senior stakeholders.',
                ],
              },
              {
                role: 'Business Analysis Consultant Intern',
                company: 'Tata Consultancy Services',
                period: 'Nov 2021 – Oct 2022',
                points: [
                  'Cleaned and transformed 10,000+ structured records.',
                  'Produced KPI dashboards across 8+ business indicators.',
                  'Documented requirements and metric definitions.',
                ],
              },
            ].map((job) => (
              <article
                key={job.role}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-cyan-300">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{job.period}</p>
                </div>

                <ul className="mt-4 space-y-2 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">Projects</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Zalando-Style Customer Segmentation and Marketing ROI Analysis',
              description:
                'Marketing analytics project covering customer behaviour, ROI, ROAS, CPA, conversion rate, RFM segmentation and churn risk.',
              tools: 'SQL, Python, Pandas, Power BI/Tableau, Excel',
              github:
                'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi',
              dashboard: '',
            },
            {
              title: 'Retail Business Performance Intelligence Dashboard',
              description:
                'Executive KPI dashboard for revenue, profit margin, regional performance and business recommendations.',
              tools: 'SQL, Power BI/Tableau, Excel',
              github: '',
              dashboard: '',
            },
            {
              title: 'E-commerce Funnel A/B Testing Framework',
              description:
                'Product analytics project measuring conversion uplift, statistical significance and funnel drop-off.',
              tools: 'SQL, Python, Pandas, Statistics',
              github: '',
              dashboard: '',
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">
                {project.tools}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-200"
                  >
                    GitHub Repo
                  </a>
                ) : (
                  <span className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-500">
                    GitHub Coming Soon
                  </span>
                )}

                {project.dashboard ? (
                  <a
                    href={project.dashboard}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-cyan-300 px-4 py-2 text-sm font-bold text-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
                  >
                    Dashboard
                  </a>
                ) : (
                  <span className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-500">
                    Dashboard Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black">Education & Certifications</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-bold">Education</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>MSc Marketing — University of Leicester</li>
                <li>BSc Statistics & Mathematics — Gujarat University</li>
                <li>BA Economics & Public Administration — BAOU</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-bold">Certifications</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Google Data Analytics Professional Certificate</li>
                <li>Meta Marketing Analytics Professional Certificate</li>
                <li>Google Analytics 4 Certification</li>
                <li>Advanced SQL Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">Let’s Connect</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I’m open to Business Analyst, Data Analyst, Marketing Analyst, Product Analyst,
          BI Analyst and Growth Analyst opportunities across the UK, Germany and Europe.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="mailto:ankitvyas6666@gmail.com"
            className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        Ankit Vyas © 2026 — Business, Data & Marketing Analyst
      </footer>
    </main>
  );
}

export default App;
