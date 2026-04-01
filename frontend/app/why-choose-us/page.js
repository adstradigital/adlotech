import Link from 'next/link'

const reasons = [
  {
    title: 'Industry-Ready Curriculum',
    desc: 'A practical roadmap focused on Python full-stack skills, real projects, and portfolio outcomes.',
  },
  {
    title: 'Mentorship That Cares',
    desc: 'Dedicated faculty support for one-to-one doubt clearing, guided practice, and interview preparation.',
  },
  {
    title: 'Project-Driven Learning',
    desc: 'Hands-on labs and production-style assignments that build confidence beyond theory.',
  },
  {
    title: 'Career Guidance',
    desc: 'Structured placement support, resume polishing, and mock interview practice for job readiness.',
  },
  {
    title: 'Modern Tech Stack',
    desc: 'Learn the tools companies expect: Python, frontend development, React, backend engineering, and deployment.',
  },
  {
    title: 'Strong Learning Community',
    desc: 'Peer discussions, collaboration, and accountability that keep your momentum high every week.',
  },
]

export default function WhyChooseUsPage() {
  return (
    <section className="min-h-screen bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-600">
            Why Choose Us
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Why Students Choose Adstra Digital Academy
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg font-medium leading-relaxed text-slate-600">
            We combine strong fundamentals, real-world project practice, and consistent mentorship to help students become confident professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-black text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-slate-800"
          >
            Back to Home
          </Link>
          <Link
            href="/syllabus"
            className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-colors hover:bg-gray-50"
          >
            View Syllabus
          </Link>
        </div>
      </div>
    </section>
  )
}

