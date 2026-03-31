'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    id: 1,
    question: 'What is the duration of the Python Full Stack course at Adlotech?',
    answer:
      'Our Python Full Stack Engineering program is a comprehensive 6-month course. It is structured month-by-month to take you from Python fundamentals all the way through React and full-stack deployment — giving you enough depth to be job-ready by the end.',
  },
  {
    id: 2,
    question: 'Do I need prior programming experience to enroll?',
    answer:
      'No prior experience is required. Our curriculum is designed for complete beginners as well as those with some exposure to programming. We start from the very basics of Python and gradually advance to real-world, full-stack projects.',
  },
  {
    id: 3,
    question: 'What tools and technologies will I learn?',
    answer:
      'You will master Python, MySQL, HTML5, CSS3, JavaScript, Bootstrap, Django (REST APIs, Authentication), React.js, and Git/GitHub. By the end of the program you will be proficient in both front-end and back-end development.',
  },
  {
    id: 4,
    question: 'Will I receive a certificate after completing the course?',
    answer:
      'Yes. Upon successful completion you will receive an Adlotech course completion certificate recognized by our ISO 9001:2015 and IAF-accredited quality framework. The certificate can be added to your LinkedIn profile and shared with employers.',
  },
  {
    id: 5,
    question: 'Does Adlotech offer placement assistance?',
    answer:
      'Absolutely. We provide end-to-end placement support including resume preparation, mock interviews, LinkedIn profile optimization, and direct referrals through our industry network. Our goal is to get you placed, not just trained.',
  },
  {
    id: 6,
    question: 'What is the batch schedule and mode of training?',
    answer:
      'We offer both weekday and weekend batches to suit different schedules. Training is conducted in a hybrid model — you get in-person, hands-on lab sessions at our Kozhikode center combined with access to recorded sessions you can revisit anytime.',
  },
  {
    id: 7,
    question: 'Are there any real-world projects included in the curriculum?',
    answer:
      'Yes. Each phase of the course includes hands-on mini-projects, and the final month is dedicated to building and deploying a complete full-stack application. These projects form your portfolio and are a key talking point in interviews.',
  },
]

const INITIAL_VISIBLE = 3

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE)

  return (
    <section className="bg-white py-16 md:py-20">
      {/* Outer container — matches the rest of the site width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold text-gray-900 mb-8 tracking-tight">
          Frequently asked questions
        </h2>

        {/* ── Card box pulled in from both edges ── */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">

          {/* Accordion rows */}
          <AnimatePresence initial={false}>
            {visibleFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id
              const isLast = idx === visibleFaqs.length - 1

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white ${!isLast ? 'border-b border-gray-200' : ''}`}
                >
                  {/* Question button */}
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left group transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                  >
                    {/* Rotating chevron */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-gray-500 group-hover:text-blue-600"
                    >
                      <FiChevronDown className="w-5 h-5" />
                    </motion.span>

                    {/* Question text */}
                    <span
                      className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-16 text-sm md:text-[0.9375rem] text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* ── Show all / Show less toggle row ── */}
          <div className="border-t border-gray-200 flex items-center justify-center py-4">
            <button
              onClick={() => {
                setShowAll((prev) => {
                  // collapse any open item when hiding
                  if (prev) setOpenId(null)
                  return !prev
                })
              }}
              className={`flex items-center gap-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full ${
                showAll
                  ? 'text-sm font-semibold text-gray-700 hover:text-blue-600'
                  : 'text-sm font-semibold text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-5 py-2 rounded-full'
              }`}
            >
              {showAll ? (
                <>
                  Show less
                  <motion.span
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.span>
                </>
              ) : (
                <>
                  Show all {faqs.length} frequently asked questions
                  <motion.span
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CTA line below card */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          Still have questions?{' '}
          <a
            href="/contact"
            className="text-blue-600 font-semibold hover:underline transition-colors"
          >
            Contact us
          </a>{' '}
          and we&apos;ll be happy to help.
        </p>
      </div>
    </section>
  )
}
