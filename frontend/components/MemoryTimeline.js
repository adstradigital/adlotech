'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  // Smooth out the animation for the vertical timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative" ref={containerRef}>
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
              From Learning to Placement – A Complete Python Mastery Journey
            </h2>
            
          </div>
        </AnimatedSection>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* The Central Line Background */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-slate-200/60 rounded-full" />
        
        {/* The Animated Active Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 flex justify-center">
          <motion.div 
            className="w-full absolute top-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="relative z-10 space-y-16 md:space-y-24 py-10">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Desktop Spacer */}
                <div className="hidden md:block w-5/12" />

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-6 md:mt-0">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-5 h-5 rounded-full bg-white border-[5px] border-indigo-500 shadow-lg shadow-indigo-500/40 z-20 group-hover:scale-125 group-hover:border-purple-500 transition-all duration-300"
                  />
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-5/12 pl-16 md:pl-0"
                >
                  <div className={`
                    p-6 md:p-8 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2rem] 
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] 
                    transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col
                  `}>
                     {/* Subtle inner gradient hover effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                     {/* The image */}
                     <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100 ring-1 ring-slate-900/5 shrink-0">
                       <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="absolute top-4 left-4">
                         <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-900 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                           {item.date}
                         </span>
                       </div>
                     </div>
                     <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                       {item.title}
                     </h3>
                     <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                       {item.description}
                     </p>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MemoryTimeline
