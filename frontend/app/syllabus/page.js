'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const syllabusSections = [
  {
    id: 1,
    title: 'Courses',
    content:
      'Program: Python Full Stack Development (Python and Django Mastery Program)\nDuration: 6 months total\nSyllabus: Month 1 - Python Programming, Month 2 - Frontend Development, Month 3 - React Development, Month 4 - Backend Development, Month 5 - Final Project 1 - Full Stack Web Application, Month 6 - Final Project 2 - Industry Level Application\nFees: Contact admissions team for the current fee structure.',
  },
  {
    id: 2,
    title: 'Placements',
    content: 'Logos of partner companies, alumni success stories.',
  },
  {
    id: 3,
    title: 'Faculty',
    content: 'Instructor bios with photos.',
  },
  {
    id: 4,
    title: 'Admissions',
    content: 'Step-by-step guide, eligibility, scholarships.',
  },
  {
    id: 5,
    title: 'Student Life',
    content: 'Labs, events, mentorship programs.',
  },
  {
    id: 6,
    title: 'Testimonials',
    content: 'Quotes/videos from students and parents.',
  },
  {
    id: 7,
    title: 'Contact',
    content: 'Address, phone, WhatsApp, inquiry form.',
  },
]

export default function SyllabusPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Adstra Digital Academy – Future-Ready Skills for Students
          </h1>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          <AnimatePresence initial={false}>
            {syllabusSections.map((item, index) => {
              const isOpen = openId === item.id
              const isLast = index === syllabusSections.length - 1

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white ${!isLast ? 'border-b border-gray-200' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`syllabus-panel-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <span className="text-lg md:text-xl font-bold text-gray-900">{item.title}</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-xl font-semibold text-gray-700">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`syllabus-panel-${item.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
