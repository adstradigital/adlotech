'use client'

import { FiUsers, FiTarget, FiZap, FiCpu, FiStar, FiFileText } from 'react-icons/fi'

const journeySteps = [
  {
    step: '01',
    title: 'ENROLL',
    description: 'Choose your program and start your learning journey today.',
    icon: FiUsers,
  },
  {
    step: '02',
    title: 'START ORIENTATION',
    description: 'Understand the course structure and set expectations.',
    icon: FiTarget,
  },
  {
    step: '03',
    title: 'LEARN',
    description: 'Experience immersive learning and build in-demand skills.',
    icon: FiZap,
  },
  {
    step: '04',
    title: 'PRACTICE',
    description: 'Apply your learning through assignments and real projects.',
    icon: FiCpu,
  },
  {
    step: '05',
    title: ' HIRED AS INTERN ',
    description: 'Secure an Internship and Gain Real Industry Experience. T&C apply.',
    icon: FiStar,
  },
]

export default function Services() {
  return (
    <div className="bg-white pt-16 sm:pt-20">
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/services.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/80 via-[#0c2445]/65 to-[#061326]/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl translate-y-24 sm:translate-y-28">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">Services</h1>
            <p className="mt-6 text-2xl font-medium text-white/90">
              Adlotech <span className="mx-2 text-white/40">{'>'}</span>{' '}
              <span className="text-blue-200">Services</span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8ff] via-[#f7fbff] to-[#edf3fc] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[96rem] px-6 sm:px-10 lg:px-12">
          <div className="text-center">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-700">
              HOW IT WORKS
            </p>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1a3d] sm:text-5xl lg:text-6xl">
              YOUR LEARNING JOURNEY
            </h2>
            <p className="mt-4 text-base font-medium text-slate-500 sm:text-lg">Every step brings you closer to your future.</p>
          </div>

          {/* Mobile Journey Steps */}
          <div className="mx-auto mt-16 grid max-w-2xl gap-8 xl:hidden">
            {journeySteps.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="relative min-h-[300px] rounded-[32px] border border-[#dce4f5] bg-white p-8 shadow-[0_18px_34px_-22px_rgba(24,48,92,0.5)]"
                >
                  <span className="absolute right-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-xl font-black text-[#0b1a3d]">
                    {item.step}
                  </span>
                  <Icon className="h-10 w-10 text-blue-600" />
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#0b1a3d] leading-tight break-words">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Desktop Journey Steps */}
          <div className="relative mt-20 hidden xl:block">
            <div className="absolute left-8 right-8 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-200/10 via-blue-300 to-blue-200/10" />

            <div className="grid grid-cols-5 gap-5">
              {journeySteps.map((item, index) => {
                const Icon = item.icon
                const isTopCard = index % 2 === 0

                return (
                  <div key={item.step} className={`relative ${isTopCard ? 'pb-24' : 'pt-24'}`}>
                    <div className="relative min-h-[360px] rounded-[32px] border border-[#dce4f5] bg-white p-9 shadow-[0_24px_44px_-26px_rgba(24,48,92,0.58)]">
                      <Icon className="h-11 w-11 text-blue-600" />
                      <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0b1a3d] leading-tight break-words">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{item.description}</p>
                    </div>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${
                        isTopCard ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'
                      }`}
                    >
                      <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-500 bg-white text-2xl font-black text-[#0b1a3d] shadow-[0_10px_20px_-10px_rgba(24,48,92,0.5)]">
                        {item.step}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* View Curriculum Button at the bottom of the section */}
          <div className="mt-20 flex justify-center">
            <a 
              href="/images/Python Training Program .pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 active:scale-95"
            >
              <FiFileText className="text-xl transition-transform group-hover:scale-110" />
              <span className="tracking-wide">View Curriculum</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
