'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { FaRocket, FaUsers, FaLightbulb, FaAward, FaChartLine, FaHeart } from 'react-icons/fa'

const stats = [
  { value: '500+', label: 'Students Trained', icon: FaUsers, color: 'from-blue-400 to-blue-600' },
  { value: '95%', label: 'Placement Rate', icon: FaChartLine, color: 'from-purple-400 to-purple-600' },
  { value: '6', label: 'Month Program', icon: FaRocket, color: 'from-pink-400 to-pink-600' },
  { value: '20+', label: 'Expert Mentors', icon: FaAward, color: 'from-indigo-400 to-indigo-600' },
]

const values = [
  {
    icon: FaRocket,
    title: 'Industry-First Approach',
    description: 'Our curriculum is designed alongside industry veterans to ensure you learn exactly what employers need.',
    gradient: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: FaLightbulb,
    title: 'Hands-On Learning',
    description: 'Real projects, real code, real experience. Every concept is reinforced with practical implementation.',
    gradient: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: FaHeart,
    title: 'Career-Focused Mentorship',
    description: 'Dedicated mentors guide you from beginner to job-ready developer with personalized support.',
    gradient: 'from-pink-500 to-pink-700',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
]

export default function About() {
  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-200/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-200/40 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full bg-blue-50">
              Powered by AdstraDigital
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              About Adlotech
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of developers through world-class, career-focused technology training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────── */}
      <section className="relative z-10 -mt-12 px-4 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Our Story ────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Our Journey</span>
                <h2 className="text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
                  Built With <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Purpose</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
                <p className="text-gray-500 text-lg leading-relaxed mb-5">
                  Adlotech is a career-focused technology training initiative designed to help students and aspiring professionals build strong programming and software development skills.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed mb-5">
                  Powered by AdstraDigital, we offer industry-oriented programs that bridge the gap between academic learning and real-world IT requirements.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Our Python Full Stack Training Program provides hands-on learning, practical coding experience, and mentorship that prepares you for real development roles.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-100 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-100 blur-2xl" />
                  <div className="relative space-y-6">
                    {[
                      { label: 'Python & Django', pct: 95 },
                      { label: 'React & Next.js', pct: 90 },
                      { label: 'REST APIs', pct: 88 },
                      { label: 'Deployment & DevOps', pct: 80 },
                    ].map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-700 font-medium">{skill.label}</span>
                          <span className="text-blue-600 font-semibold">{skill.pct}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.pct}%` }}
                            transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-purple-600 text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
              <h2 className="text-5xl font-extrabold text-gray-900 mt-3">
                Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Core Values</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`group relative bg-white border ${v.border} rounded-2xl p-8 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`absolute inset-0 ${v.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className={`w-14 h-14 bg-gradient-to-br ${v.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                    <v.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed relative z-10">{v.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission Banner ───────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-14 text-center overflow-hidden shadow-2xl shadow-purple-200">
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <FaRocket className="text-white/60 text-5xl mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Our Mission</h2>
                <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
                  To empower the next generation of developers by providing practical, career-oriented technology training — bridging the gap between learning and the evolving digital world.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}


