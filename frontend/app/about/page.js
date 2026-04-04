'use client'

import { FaGlobe, FaHandshake, FaLaptopCode, FaUserTie, FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white pt-16 sm:pt-20">
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/about.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/80 via-[#0c2445]/65 to-[#061326]/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl translate-y-24 sm:translate-y-28">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">About Us</h1>
            <p className="mt-6 text-2xl font-medium text-white/90">
              Adlotech <span className="mx-2 text-white/40">{'>'}</span>{' '}
              <span className="text-blue-200">About Us</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          {/* <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            About Us - Python Training Institute in Calicut
          </h2> */}

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              ADLOTECH is a purely curated training platform, created with one clear mission - Python mastery for
              perfection. Designed to meet the growing demand from our trusted friends and partners, ADLOTECH focuses
              exclusively on Python, ensuring learners achieve clarity, confidence, and career-ready expertise.
            </p>
            <p>
              Every program is led by seasoned professionals and industry experts, blending practical knowledge with
              guaranteed outcomes. Managed by Adstra Digital, an ISO-IAF certified company, ADLOTECH stands as a trusted
              gateway to learning and growth. With sureshot training and internship pathways, we do not just teach
              Python - we shape futures.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-16">
          <div className="grid items-center gap-10 lg:grid-cols-[380px,1fr]">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <img
                  src="/images/Binocular.png"
                  alt="Our Vision binoculars"
                  className="w-full max-w-[260px] drop-shadow-lg"
                />
                <img
                  src="/images/ourvision.png"
                  alt="Our Vision label"
                  className="w-full max-w-[240px] drop-shadow-lg"
                />
              </div>
            </div>
            <div className="text-lg leading-relaxed text-slate-700 text-right">
              <p>
                To build a future where <span className="font-semibold text-slate-900">every learner masters Python</span><br/> and steps
                into <span className="font-semibold text-slate-900">meaningful tech careers</span> with confidence.<br/> We aim to be the
                most trusted Python-only institute in <br/>Calicut, known for{' '}
                <span className="font-semibold text-slate-900">clarity, outcomes, and growth</span>.
              </p>
            </div>
          </div>

          <div className="flex justify-start -mr-[55vw]">
            <svg className="h-8 w-[430%] max-w-none" viewBox="0 0 6400 80" fill="none" aria-hidden="true">
              <path
                d="M0 40 q 20 -16 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0"
                stroke="#3b82f6"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr,380px]">
            <div className="text-lg leading-relaxed text-slate-700">
              <p>
                We are on a mission to <span className="font-semibold text-slate-900">transform learning</span> with{' '}
                <span className="font-semibold text-slate-900">expert <br/> mentors</span>,{' '}
                <span className="font-semibold text-slate-900">hands-on projects</span>, and{' '}
                <span className="font-semibold text-slate-900">career-ready training</span> <br/>. Through sureshot learning and
                internships, we help <br/>learners gain{' '}
                <span className="font-semibold text-slate-900">skills, confidence, and real outcomes</span>.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <img
                  src="/images/rocket.png"
                  alt="Our Mission rocket"
                  className="w-full max-w-[260px] drop-shadow-lg"
                />
                <img
                  src="/images/ourmission.png"
                  alt="Our Mission label"
                  className="w-full max-w-[240px] drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl sm:text-4xl font-black text-slate-900">Why learn with Adlotech:</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
              <FaUserTie className="text-2xl" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Industry-Expert Training</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learn directly from professionals with real-world experience.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
              <FaHandshake className="text-2xl" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Internship Integration</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Stipend-paid internships that connect learning with practical projects.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
              <FaLaptopCode className="text-2xl" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Career Pathway</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Top-performing candidates are offered full-time jobs with Adstra Digital and its partner companies.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
              <FaGlobe className="text-2xl" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Global Standards</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              ISO-IAF certification ensures quality, trust, and recognition.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-6 w-full max-w-lg py-5 bg-[#0080c1] hover:bg-[#0077b3] text-white font-black uppercase tracking-widest text-lg rounded-full transition-all shadow-[0_15px_35px_rgba(0,128,193,0.35)] hover:shadow-[0_20px_45px_rgba(0,128,193,0.45)] hover:-translate-y-1 active:scale-95"
          >
            <span className="tracking-[0.2em] ml-2">Start Your Journey</span>
            <FaTelegramPlane className="text-2xl text-white transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

