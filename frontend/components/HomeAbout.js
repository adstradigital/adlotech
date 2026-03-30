'use client'
import { FiShield, FiAward } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const HomeAbout = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 border border-blue-100 rounded-full bg-blue-50/50">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                Delivering Specialized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Future-Ready Education
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                ADLOTECH is a proud subsidiary of <span className="text-blue-600 font-bold">Adstra Digital</span>, created with a singular mission: to deliver specialized programming education that bridges the gap between traditional learning and industry demands.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <FiShield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">ISO-IAF Certification</h4>
                    {/* <p className="text-sm text-slate-500 italic">Expected within a month - currently under process.</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Ensuring that our training standards meet the highest levels of global quality and credibility.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center p-8">
                <img
                  src="/images/imageee05.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-55"
                  loading="lazy"
                />
                {/* Visual representation of Code/Academy */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                <div className="text-center z-20">
                  <div className="mb-6 inline-flex p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                    <FiAward className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                    Global Trust & <br /> Quality Standards
                  </h3>
                  <p className="text-slate-400 font-medium max-w-sm mx-auto text-sm">
                    Ensuring excellence in every module we deliver through rigorous quality checks.
                  </p>
                </div>

                {/* Abstract Code Pattern */}
                <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-blue-400 select-none pointer-events-none p-4 overflow-hidden">
                   {"{ 'status': 'Under Certification', 'standard': 'ISO–IAF', 'org': 'Adstra Digital', 'mission': 'Specialized Education' } ".repeat(50)}
                </div>
              </div>

              {/* Floating Badge */}
              {/* <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[200px] z-30"
              > */}
                {/* <div className="flex items-center gap-3 mb-2">
                  <FiCheckCircle className="text-emerald-500 w-5 h-5 shrink-0" /> */}
                  {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Credibility</span> */}
                {/* </div> */}
                {/* <p className="text-sm font-black text-slate-800">ISO Standards Compliant</p> */}
              {/* </motion.div> */}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout





