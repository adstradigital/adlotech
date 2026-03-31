import OpenContactMenuButton from '@/components/OpenContactMenuButton'

const trainingCurriculum = [
  {
    month: 'Month 1 - Python Programming',
    topics: [
      'Introduction to Programming',
      'Python Installation and Setup',
      'Variables and Data Types',
      'Operators',
      'Conditional Statements',
      'Loops',
      'Functions',
      'Modules and Packages',
      'Object-Oriented Programming (OOP)',
      'File Handling',
      'Exception Handling',
      'Virtual Environment',
      'Mini Project: Student Management System (Console Application)',
    ],
  },
  {
    month: 'Month 2 - Frontend Development',
    topics: [
      'HTML5 Structure',
      'Semantic HTML',
      'Forms and Input Fields',
      'CSS3 Styling',
      'Flexbox and Grid',
      'Responsive Design',
      'JavaScript Basics',
      'DOM Manipulation',
      'ES6 Concepts',
      'Fetch API',
      'Form Validation',
      'Project: Responsive Business Website',
    ],
  },
  {
    month: 'Month 3 - React Development',
    topics: [
      'Introduction to ReactJS',
      'React Environment Setup',
      'Components and Props',
      'State Management',
      'React Hooks',
      'Event Handling',
      'React Router',
      'API Integration',
      'CRUD Operations',
      'Project: React CRUD Application',
    ],
  },
  {
    month: 'Month 4 - Backend Development',
    topics: [
      'Introduction to Django',
      'Django Project Structure',
      'Models and Migrations',
      'Django Admin Panel',
      'Templates and Forms',
      'Authentication Basics',
      'Introduction to NextJS',
      'File Routing',
      'Server-Side Rendering (SSR)',
      'API Routes',
    ],
  },
]

const finalProjectOne = {
  title: 'Final Project 1 - Full Stack Web Application',
  summary: 'Students will build a complete full stack system.',
  examples: ['Inventory Management System', 'Blog Platform', 'Task Management System'],
  technologies: ['ReactJS / NextJS', 'Django Backend', 'MySQL Database'],
  features: ['Authentication', 'CRUD Operations', 'API Integration', 'Dashboard UI'],
}

const finalProjectTwo = {
  title: 'Final Project 2 - Industry Level Application',
  summary: 'Students will develop a production-style application.',
  examples: ['Mini E-commerce Website', 'Real Estate Property Portal', 'CRM System'],
  features: ['Product/Property Listings', 'User Login and Registration', 'API-based Backend', 'Admin Panel', 'Responsive UI'],
}

const internshipActivities = [
  'Working on live client projects',
  'Understanding client requirements and face-to-face meetings',
  'Feature development',
  'Bug fixing',
  'API integration',
  'Database management',
  'Git and GitHub collaboration',
  'Deployment on live servers',
]

const internshipProjectTypes = [
  'CRM Systems',
  'E-commerce Platforms',
  'Real Estate Portals',
  'Inventory Management Systems',
]

const outcomes = [
  '3-4 Demo Projects',
  '2 Training Final Projects',
  'Real Client Project Experience (Internship)',
  'GitHub Portfolio',
  'Internship Experience Certificate',
  'Resume and LinkedIn Preparation Guidance',
  'Python Full Stack Development Certificate',
]

export default function SyllabusPage() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12)_0%,_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10)_0%,_transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="rounded-[2.2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest uppercase text-blue-700 border border-blue-100 rounded-full bg-blue-50">
            Python and Django Mastery Program
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.02] mb-5">
            Python Full Stack Development Curriculum
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 font-semibold">
            <p>Total Duration: 8 Months</p>
            <p>Training: 4 Months + Internship with Stipend</p>
            <p className="md:col-span-2">
              Technologies: Python, HTML, CSS, JavaScript, ReactJS, NextJS, Django, MySQL and other real-world tools
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">Training Curriculum (4 Months)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingCurriculum.map((month) => (
              <article key={month.month} className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{month.month}</h3>
                <ul className="space-y-2.5">
                  {month.topics.map((topic) => (
                    <li key={topic} className="text-sm md:text-base text-slate-600 font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{finalProjectOne.title}</h2>
            <p className="text-slate-600 font-medium mb-4">{finalProjectOne.summary}</p>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Examples</p>
            <ul className="space-y-1.5 mb-4">
              {finalProjectOne.examples.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Technologies</p>
            <ul className="space-y-1.5 mb-4">
              {finalProjectOne.technologies.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Features</p>
            <ul className="space-y-1.5">
              {finalProjectOne.features.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{finalProjectTwo.title}</h2>
            <p className="text-slate-600 font-medium mb-4">{finalProjectTwo.summary}</p>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Examples</p>
            <ul className="space-y-1.5 mb-4">
              {finalProjectTwo.examples.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Features</p>
            <ul className="space-y-1.5">
              {finalProjectTwo.features.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">Internship Curriculum (4 Months)</h3>
            <p className="text-slate-600 font-medium mb-4">
              During internship, students will work on real client projects handled by the company.
            </p>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Internship Activities</p>
            <ul className="space-y-1.5 mb-4">
              {internshipActivities.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Project Types</p>
            <ul className="space-y-1.5">
              {internshipProjectTypes.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">Program Outcome</h3>
            <ul className="space-y-2 mb-4">
              {outcomes.map((item) => (
                <li key={item} className="text-slate-700 font-semibold flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-200">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700 mb-2">Enquire Now</p>
              <a href="tel:+919567568185" className="block text-slate-700 font-semibold hover:text-blue-700 transition-colors">
                +91 956 756 8185
              </a>
              <a href="mailto:info@adlotech.com" className="block text-slate-700 font-semibold hover:text-blue-700 transition-colors">
                info@adlotech.com
              </a>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <OpenContactMenuButton
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-slate-900 text-white font-black hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Apply for This Program
          </OpenContactMenuButton>
          <a
            href="/images/Python%20Training%20Program%20(1).pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-slate-300 text-slate-700 font-black hover:bg-slate-50 transition-colors"
          >
            View Original PDF
          </a>
        </div>
      </div>
    </section>
  )
}
