
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram, FaBriefcase, FaCertificate, FaUsers, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa'
import { SiGithub, SiMysql, SiHtml5, SiJavascript, SiBootstrap, SiDjango } from 'react-icons/si'
import AnimatedSection from '@/components/AnimatedSection'
import RoadmapTimeline from '@/components/RoadmapTimeline'
import HomeAbout from '@/components/HomeAbout'
import MemoryTimeline from '@/components/MemoryTimeline'
import CodeTypewriter from '@/components/CodeTypewriter'
import FAQ from '@/components/FAQ'
import AboutPage from './about/page'
import ServicesPage from './services/page'
import ContactPage from './contact/page'

export default function Home() {
  const [activeVideoParagraph, setActiveVideoParagraph] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const videoParagraphs = [
    'Python is the language of the future. From artificial intelligence to data science, mastering Python opens doors to limitless possibilities in the tech world.',
    'Master Python, Data Science, and Full-Stack Web Development through hands-on projects and real-world experience.',
    'Build a strong foundation in programming logic, data structures, and clean coding practices that companies value.',
    'Learn by doing: work on APIs, automation, and data workflows that mirror professional tech environments.',
    'Graduate with confidence, a portfolio of real projects, and the skills to launch or accelerate your tech career.'
  ]

  useEffect(() => {
    if (activeSection !== 'home') return
    const interval = setInterval(() => {
      setActiveVideoParagraph((prev) => (prev + 1) % videoParagraphs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeSection, videoParagraphs.length])

  useEffect(() => {
    const handleSpaNavigate = (event) => {
      const nextSection = event?.detail || 'home'
      setActiveSection(nextSection)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('spa-navigate', handleSpaNavigate)
    return () => window.removeEventListener('spa-navigate', handleSpaNavigate)
  }, [])

  const handleHeroStartLearning = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('spa-navigate', { detail: 'contact' }))
    }
  }

  const toolsCovered = [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' }
  ]

  const roadmapSteps = [
    {
      month: '1st Month',
      title: 'Python',
      description: 'Master Python fundamentals, basic to advanced data types, logic, and OOP concepts.',
      skills: ['Python Basics', 'Data Structures', 'Functions', 'OOPs'],
      color: '#f97316', // Orange
      icon: FaPython
    },
    {
      month: '2nd Month',
      title: 'MySQL',
      description: 'Learn relational database management, SQL queries, indexing, and data modeling.',
      skills: ['MySQL', 'Relational DB', 'Complex Queries', 'Normalization'],
      color: '#eab308', // Yellow
      icon: SiMysql
    },
    {
      month: '3rd Month',
      title: 'HTML, CSS, JavaScript',
      description: 'Build responsive and modern static websites using structural and styling tools.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      color: '#22c55e', // Green
      icon: SiHtml5
    },
    {
      month: '4th Month',
      title: 'Django',
      description: 'Build powerful server-side applications and secure APIs with the Django ecosystem.',
      skills: ['Django', 'MVT Architecture', 'Rest APIs', 'Authentication'],
      color: '#ef4444', // Red
      icon: SiDjango
    },
    {
      month: '5th Month',
      title: 'React',
      description: 'Create dynamic, blazingly fast user interfaces using component-driven development.',
      skills: ['React.js', 'Props & State', 'Hooks', 'Vite'],
      color: '#3b82f6', // Blue
      icon: FaReact
    },
    {
      month: '6th Month',
      title: 'Full Stack Integration',
      description: 'Combine frontend & backend to build real-world apps and deploy to the cloud.',
      skills: ['Full Stack Dev', 'Deployment', 'Git/GitHub', 'Cloud Hosting'],
      color: '#ec4899', // Pink
      icon: SiGithub
    }
  ]

  const whoCanJoin = [
    'B.Tech Students (CS/IT/ECE)',
    'BCA & MCA Students',
    'Graduates interested in IT careers',
    'Beginners in programming',
    'Career switchers to tech',
    'Aspiring Full Stack Developers'
  ]

  return (
    <>
      {activeSection === 'home' && (
        <>
          {/* Top Video Hero (covers header + hero area) */}
          <section className="relative -mt-24 h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/backgroundd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-slate-900/35" />
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl pt-16 sm:pt-20">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                Code Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
                  Future Today.
                </span>
              </h1>

              <div className="h-[120px] md:h-[100px] mt-4 flex items-center">
                <AnimatePresence mode="wait">
                <motion.p
                  key={activeVideoParagraph}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg md:text-2xl text-slate-100/95 leading-relaxed max-w-2xl"
                >
                  {videoParagraphs[activeVideoParagraph]}
                </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleHeroStartLearning}
                  className="px-7 py-3.5 rounded-full border border-white/50 bg-white/10 text-white font-semibold transition hover:bg-blue-600 hover:border-blue-500 hover:text-white active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/40"
                >
                  Start Learning
                </button>
                <Link
                  href="/syllabus"
                  className="px-7 py-3.5 rounded-full border border-white/50 bg-white/10 text-white font-semibold transition hover:bg-blue-600 hover:border-blue-500 hover:text-white active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/40"
                >
                  View Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeAbout />

      {/* Roadmap Section */}
          <section className="pt-10 pb-0 md:pt-12 md:pb-2 bg-white relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full bg-blue-50">
                Your Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                6-Month <span className="text-blue-600">Roadmap</span> to Success
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A visually guided masterclass taking you from foundation to full-stack mastery.
              </p>
            </div>
          </AnimatedSection>

          <RoadmapTimeline steps={roadmapSteps} />
        </div>
      </section>

      {/* Tools Covered Section */}
          <section className="pt-0 pb-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tools covered</h2>
              <p className="text-lg text-gray-500 italic">Tools covered in the course.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="tech-marquee relative mt-8">
              <div className="tech-marquee-track flex items-center gap-12 py-4">
                {[...toolsCovered, ...toolsCovered, ...toolsCovered].map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="flex flex-col items-center justify-center min-w-[120px] transition-all duration-300 hover:scale-110"
                  >
                    <tool.icon
                      className="text-5xl mb-3 transition-colors duration-300"
                      style={{ color: tool.color }}
                    />
                    <span className="text-xs font-medium text-gray-400 opacity-0 hover:opacity-100 transition-opacity">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MemoryTimeline />

      {/* Modernized Why Python Section */}
          <section className="pt-12 pb-12 md:pt-14 md:pb-16 relative overflow-hidden">
        {/* Blue-purple cinematic tint to match the hero style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25)_0%,_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.28)_0%,_transparent_55%)] pointer-events-none" />

        {/* Animated Background Mesh Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] animate-pulse delay-1000 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-14">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                Why ADLOTECH <br className="hidden md:block" /> Focuses Only on <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">Python</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-start">
            {/* Left Side: The Narrative Card */}
            <AnimatedSection delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                      <FaPython className="text-blue-400 text-2xl" />
                    </div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">100% Focused</span>
                  </div>

                  <p className="text-2xl md:text-3xl text-gray-50 leading-tight font-medium">
                    At ADLOTECH, we believe in <span className="text-blue-400">absolute mastery</span>. We concentrate exclusively on Python and connected technologies as the foundation of modern engineering.
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Python is no longer just a language — it’s the ecosystem powering AI, Data Science, and Automation. We ensure our students gain deep, career-ready expertise in the skill set that matters most today.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {['AI & ML Ready', 'Data Engine', 'Career Pathways', 'Stipends'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side: Floating Feature Visuals */}
            <div className="space-y-6">
              {[
                { title: 'Artificial Intelligence', desc: 'The core engine of Large Language Models and Neural Networks.', color: 'text-purple-400', icon: '⚡' },
                { title: 'Data Science', desc: 'Processing massive signals into actionable business intelligence.', color: 'text-blue-400', icon: '📊' },
                { title: 'Web Architecture', desc: 'Highly scalable backends using Django & FastAPI frameworks.', color: 'text-cyan-400', icon: '🌐' }
              ].map((f, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                  <div className="p-6 rounded-3xl bg-black/25 backdrop-blur-sm border border-white/15 hover:border-white/25 transition-all duration-300 group hover:translate-x-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xl">{f.icon}</span>
                      <h4 className={`text-lg font-black ${f.color} tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]`}>{f.title}</h4>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      {false && (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-4xl font-bold mb-6">About Adlotech</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Adlotech is a career-focused technology training initiative powered by AdstraDigital.
                  We help students and aspiring professionals build strong programming and software development
                  skills through industry-oriented training programs.
                </p>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-100 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-gray-600">Students Trained</div>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-purple-600">100%</div>
                        <div className="text-sm text-gray-600">Placement Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Who Can Join Section */}
      {false && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-12">Who Can Join?</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoCanJoin.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  >
                    <FaUsers className="text-purple-600 text-xl" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

          <FAQ />
        </>
      )}

      {activeSection === 'about' && <AboutPage />}
      {activeSection === 'services' && <ServicesPage />}
      {activeSection === 'contact' && <ContactPage />}
    </>
  )
}
