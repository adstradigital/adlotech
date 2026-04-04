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
    <section className="bg-white pt-10 pb-8 md:pt-12 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold text-gray-900 mb-8 tracking-tight">
          Frequently asked questions
        </h2>

        {/* Individual FAQ Cards Stack */}
        <div className="space-y-4 max-w-4xl">
          <AnimatePresence initial={false}>
            {visibleFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden"
                >
                  {/* Question button */}
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group transition-all duration-300 hover:bg-gray-100/50 outline-none"
                  >
                    {/* Question text with index */}
                    <div className="flex items-center gap-4">
                      {/* Left circular arrow icon */}
                      <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-500 ${
                        isOpen ? 'bg-red-600 border-red-600' : 'bg-red-50 border-red-100 group-hover:border-red-200'
                      }`}>
                        <motion.div
                          animate={{ rotate: isOpen ? 0 : -90 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <FiChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                            isOpen ? 'text-white' : 'text-red-500'
                          }`} />
                        </motion.div>
                      </div>
                      
                      <span
                        className={`text-base md:text-[1.0625rem] font-medium leading-tight transition-colors duration-300 ${
                          isOpen ? 'text-red-600' : 'text-gray-800'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                  </button>

                  {/* Answer panel with adjusted layout */}
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
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-gray-100/50">
                          <p className="pl-12 md:pl-[3.75rem] text-[0.875rem] md:text-[1rem] text-gray-500 font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button Container */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              setShowAll((prev) => {
                if (prev) setOpenId(null)
                return !prev
              })
            }}
            className={`flex items-center gap-2 transition-all duration-200 focus:outline-none rounded-full ${
              showAll
                ? 'text-sm font-semibold text-gray-500 hover:text-red-600'
                : 'text-sm font-semibold text-gray-700 border border-gray-200 hover:border-red-500 hover:text-red-600 px-6 py-2.5 rounded-full shadow-sm bg-gray-50'
            }`}
          >
            {showAll ? (
              <>
                Show less
                <motion.span animate={{ rotate: 180 }} transition={{ duration: 0.25 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.span>
              </>
            ) : (
              <>
                Show all frequently asked questions
                <motion.span animate={{ rotate: 0 }} transition={{ duration: 0.25 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.span>
              </>
            )}
          </button>
        </div>

        {/* CTA line below cards */}
        <p className="mt-12 text-sm text-gray-400 text-center">
          Still have questions?{' '}
          <a href="/contact" className="text-red-600 font-semibold hover:underline transition-colors">
            Contact us
          </a>{' '}
          and we'll be happy to help.
        </p>
      </div>
    </section>
  )
}
