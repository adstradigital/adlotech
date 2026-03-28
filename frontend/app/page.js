
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram, FaBriefcase, FaCertificate, FaUsers, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa'
import { SiGithub, SiMysql, SiHtml5, SiJavascript, SiBootstrap, SiDjango } from 'react-icons/si'
import AnimatedSection from '@/components/AnimatedSection'
import RoadmapTimeline from '@/components/RoadmapTimeline'
import HomeAbout from '@/components/HomeAbout'
import Gallery from '@/components/Gallery'
import CodeTypewriter from '@/components/CodeTypewriter'

const SyntaxHighlightedCode = () => (
  <div className="text-slate-600/90 font-medium pb-6">
    <span className="text-pink-600 font-bold">def</span> <span className="text-blue-600 font-semibold">build_ai_model</span>(data):{'\n'}
    {'    '}model = <span className="text-teal-600 font-semibold">NeuralNetwork</span>(){'\n'}
    {'    '}<span className="text-pink-600 font-bold">for</span> epoch <span className="text-pink-600 font-bold">in</span> <span className="text-cyan-600 font-semibold">range</span>(<span className="text-orange-500">100</span>):{'\n'}
    {'        '}pred = model.forward(data.x){'\n'}
    {'        '}loss = compute_loss(pred){'\n'}
    {'        '}model.optimize(loss){'\n'}
    {'        '}<span className="text-pink-600 font-bold">if</span> epoch % <span className="text-orange-500">10</span> == <span className="text-orange-500">0</span>:{'\n'}
    {'            '}<span className="text-cyan-600 font-semibold">print</span>(<span className="text-green-600">f"Loss: {'{'}loss:.4f{'}'}"</span>){'\n'}
    {'    '}<span className="text-pink-600 font-bold">return</span> model{'\n'}
    {'\n'}
    <span className="text-amber-500">@app.get</span>(<span className="text-green-600">"/api/predict"</span>){'\n'}
    <span className="text-pink-600 font-bold">async</span> <span className="text-pink-600 font-bold">def</span> <span className="text-blue-600 font-semibold">predict</span>(input: <span className="text-teal-600 font-semibold">Data</span>):{'\n'}
    {'    '}features = preprocess(input){'\n'}
    {'    '}res = model.predict(features){'\n'}
    {'    '}<span className="text-pink-600 font-bold">return</span> {'{'}<span className="text-green-600">"prediction"</span>: res{'}'}{'\n'}
    {'\n'}
    <span className="text-pink-600 font-bold">class</span> <span className="text-teal-600 font-semibold">NeuralNetwork</span>:{'\n'}
    {'    '}<span className="text-pink-600 font-bold">def</span> <span className="text-blue-600 font-semibold">__init__</span>(<span className="text-indigo-500">self</span>):{'\n'}
    {'        '}<span className="text-indigo-500">self</span>.encoder = <span className="text-teal-600 font-semibold">Transformer</span>(){'\n'}
    {'        '}<span className="text-indigo-500">self</span>.decoder = <span className="text-teal-600 font-semibold">Linear</span>(<span className="text-orange-500">512</span>, <span className="text-orange-500">10</span>){'\n'}
    {'\n'}
    {'    '}<span className="text-pink-600 font-bold">def</span> <span className="text-blue-600 font-semibold">forward</span>(<span className="text-indigo-500">self</span>, x):{'\n'}
    {'        '}features = <span className="text-indigo-500">self</span>.encoder(x){'\n'}
    {'        '}<span className="text-pink-600 font-bold">return</span> <span className="text-indigo-500">self</span>.decoder(features){'\n'}
    {'\n'}
    <span className="text-slate-400 italic"># Deploying to production...</span>{'\n'}
    <span className="text-pink-600 font-bold">async</span> <span className="text-pink-600 font-bold">def</span> <span className="text-blue-600 font-semibold">main</span>():{'\n'}
    {'    '}<span className="text-pink-600 font-bold">await</span> server.start(){'\n'}
  </div>
);

export default function Home() {

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

  // Hero section video loop implementation
  const [growth, setGrowth] = useState(854);
  const [recentGain, setRecentGain] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      const added = Math.floor(Math.random() * 8) + 1;
      setRecentGain(added);
      setGrowth(prev => prev + added);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content Area */}
            <AnimatedSection>
              <div className="max-w-2xl relative z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Adlotech Masterclass</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Code Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Future Today.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  Master Python, Data Science, and Full-Stack Web Development through hands-on projects, industry mentorship, and cutting-edge curriculum.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-slate-900/20"
                  >
                    Start Learning
                  </Link>
                  <button className="px-8 py-4 bg-white text-slate-700 rounded-full font-bold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                    View Syllabus
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Video Area */}
            <AnimatedSection delay={0.2}>
              <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center z-20">

                {/* Floating Scrolling Python Code Decoration - Placed purely on top to ensure complete visibility */}
                <div
                  className="absolute top-4 -left-10 md:-left-8 w-[24rem] h-[18rem] overflow-hidden pointer-events-none z-30"
                  style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}
                >
                  <motion.div
                    className="font-mono text-[11px] sm:text-xs leading-[1.8] whitespace-pre tracking-wider drop-shadow-sm"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                  >
                    <SyntaxHighlightedCode />
                    <SyntaxHighlightedCode />
                  </motion.div>
                </div>

                {/* Floating Growth Chart Card - Positioned at the absolute top right */}
                <motion.div 
                  className="absolute -top-28 -right-4 md:-right-12 z-40 w-44 transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, type: 'spring', damping: 20 }}
                >
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1 opacity-80">Skill Growth</p>
                  <div className="flex items-end gap-2 mb-3">
                     <span className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{growth}%</span>
                     <motion.span 
                       key={growth}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="text-xs font-bold text-blue-600 mb-1 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100/50 shadow-sm"
                     >
                       +{recentGain}%
                     </motion.span>
                  </div>
                  <div className="h-16 w-full relative mt-2">
                    <motion.svg 
                      viewBox="0 0 100 40" 
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path 
                        d="M0,40 L15,35 L30,38 L45,20 L60,25 L75,10 L90,15 L100,2 L100,40 L0,40 Z"
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.2, 0.8, 1] }}
                      />
                      <motion.path 
                        d="M0,40 L15,35 L30,38 L45,20 L60,25 L75,10 L90,15 L100,2"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", times: [0, 0.6, 0.9, 1] }}
                      />
                      <motion.circle 
                        cx="100" cy="2" r="4" 
                        fill="#ffffff" 
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 0, 1, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.5, 0.6, 0.9, 1] }}
                        className="drop-shadow-md"
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Seamless Video Container */}
                <div className="relative w-full h-full group flex items-center justify-center scale-105">
                  {/* Subtle gradient mask to ensure the bottom edge fades out smoothly */}
                  <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none" />

                  <video
                    className="w-[110%] h-[110%] max-w-none object-contain transform transition-transform duration-700 group-hover:scale-[1.02] mix-blend-multiply"
                    style={{ filter: 'contrast(1.08) brightness(1.1)' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos/Comp.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <HomeAbout />

      {/* Roadmap Section */}
      <section className="pt-16 pb-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full bg-blue-50">
                Your Journey
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                6-Month <span className="text-blue-600">Roadmap</span> to Success
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A visually guided masterclass taking you from foundation to full-stack mastery.
              </p>
            </div>
          </AnimatedSection>

          <RoadmapTimeline steps={roadmapSteps} />
        </div>
      </section>

      {/* Tools Covered Section */}
      <section className="pt-8 pb-16 bg-white overflow-hidden">
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

      <Gallery />

      {/* Modernized Why Python Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Blue-purple cinematic tint to match the hero style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25)_0%,_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.28)_0%,_transparent_55%)] pointer-events-none" />

        {/* Animated Background Mesh Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] animate-pulse delay-1000 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <AnimatedSection>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Why ADLOTECH <br className="hidden md:block" /> Focuses Only on <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">Python</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
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
    </>
  )
}
