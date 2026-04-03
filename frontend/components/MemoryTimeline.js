'use client'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const timelineData = [
  {
    id: 1,
    date: 'Live Training Session',
    title: 'Hands-On Python Learning',
    description: 'At Adlotech, we will provide expert instructor-led guidance to interns through real-time Python training in an interactive classroom environment.',
    image: '/images/imageee01.png',
  },
  {
    id: 2,
    date: 'Doubt Clearing Session',
    title: 'Personalized Python Guidance',
    description: 'Our instructors will offer one-on-one, real-time support, helping interns resolve doubts and build confidence through hands-on problem solving.',
    image: '/images/imageee02.png',
  },
  {
    id: 3,
    date: 'Project-Based Learning',
    title: 'Real-World Development Experience',
    description: 'Students will build real-world websites using Python while working on live projects, gaining practical and industry-ready skills.',
    image: '/images/imageee03.png',
  },
  {
    id: 4,
    date: 'Placement Opportunity',
    title: 'Performance-Based Direct Placement',
    description: 'Based on their performance, top students will get direct placement opportunities and will join our team to gain real-world experience.',
    image: '/images/imageee04.png',
  },
]

const MemoryTimeline = () => {
  return (
    <section className="pt-8 pb-16 bg-slate-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[100px]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-100/50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              From Learning to Placement - A Complete Python Mastery Journey
            </h2>
          </div>
        </AnimatedSection>
      </div>

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.25)] overflow-hidden"
            >
              <div className="relative p-4">
                <div className="relative h-[190px] rounded-[16px] bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="absolute right-6 top-6 inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                  {item.date}
                </span>
              </div>

              <div className="px-5 pb-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[10px] font-black text-slate-500">
                    0{index + 1}
                  </span>
                  Adlotech
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemoryTimeline
