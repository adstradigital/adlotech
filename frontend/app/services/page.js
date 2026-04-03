'use client'

import { FiUsers, FiTarget, FiZap, FiCpu, FiStar } from 'react-icons/fi'

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
    title: 'GET HIRED*',
    description: 'Be interview-ready and unlock opportunities. *T&C apply.',
    icon: FiStar,
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_top_10%]"
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

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="text-center">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-700">
              HOW IT WORKS
            </p>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1a3d] sm:text-5xl lg:text-6xl">
              YOUR LEARNING JOURNEY
            </h2>
            <p className="mt-4 text-base font-medium text-slate-500 sm:text-lg">Every step brings you closer to your future.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-xl gap-6 lg:hidden">
            {journeySteps.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="relative rounded-[28px] border border-[#dce4f5] bg-white p-6 shadow-[0_16px_30px_-22px_rgba(24,48,92,0.48)]"
                >
                  <span className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-lg font-black text-[#0b1a3d]">
                    {item.step}
                  </span>
                  <Icon className="h-9 w-9 text-blue-600" />
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0b1a3d]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-8 right-8 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-200/10 via-blue-300 to-blue-200/10" />

            <div className="grid grid-cols-5 gap-6">
              {journeySteps.map((item, index) => {
                const Icon = item.icon
                const isTopCard = index % 2 === 0

                return (
                  <div key={item.step} className={`relative ${isTopCard ? 'pb-20' : 'pt-20'}`}>
                    <div className="relative rounded-[28px] border border-[#dce4f5] bg-white p-7 shadow-[0_20px_38px_-25px_rgba(24,48,92,0.55)]">
                      <Icon className="h-11 w-11 text-blue-600" />
                      <h3 className="mt-5 text-3xl font-extrabold leading-none tracking-tight text-[#0b1a3d]">{item.title}</h3>
                      <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{item.description}</p>
                    </div>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${
                        isTopCard ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'
                      }`}
                    >
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-2xl font-black text-[#0b1a3d] shadow-[0_8px_18px_-10px_rgba(24,48,92,0.48)]">
                        {item.step}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
