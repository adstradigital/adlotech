'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiClock, FiCreditCard, FiAward, FiCheckCircle, FiMail, FiPhone, FiUser } from 'react-icons/fi'

const placementReviews = [
  {
    name: 'Arjun Kumar',
    role: 'Software Engineer',
    title: 'Career Transformation',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The curriculum is highly industry-focused. I started as a total beginner and within 6 months, I was confident enough to build complex full-stack applications. The transition to a full-time role was seamless.',
    stars: 5,
  },
  {
    name: 'Sneha Rao',
    role: 'Junior Full Stack Developer',
    title: 'Exceptional Mentorship',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "The mentors at Adlotech are exceptional. They don't just teach you how to code; they teach you how to think like a problem solver. The interview preparation was the turning point for my career.",
    stars: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Python Developer',
    title: 'Valuable Internship',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    text: 'Best decision I made for my career. The stipend-paid internship helped me gain real-world experience while I was still learning. It gave me a huge advantage during job placements.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Web Application Developer',
    title: 'Industry Credibility',
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
    text: 'The ISO–IAF certification added so much credibility to my profile. I received multiple offers after finishing the course, and I owe it all to the intensive project-based learning here.',
    stars: 5,
  },
  {
    name: 'Rahul Nair',
    role: 'Backend Engineer',
    title: 'Outstanding Structure',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'Outstanding program structure. The progression from Python basics to building production-level Django REST APIs in just months is incredible. The faculty genuinely cares about your growth.',
    stars: 5,
  },
]

const syllabusSections = [
  {
    id: 1,
    title: 'Courses',
    courses: true,
    programName: 'Python Full Stack Development',
    subtitle: 'Python and Django Mastery Program',
    duration: '6 Months ',
    fees: 'Flexible Fee Structure',
    curriculumFilename: 'Python Training Program (1).pdf',
    months: [
      { id: 1, title: 'Python Programming', desc: 'Core Python, OOPs, Data Structures' },
      { id: 2, title: 'Frontend Development', desc: 'HTML5, CSS3, Modern JS, Bootstrap' },
      { id: 3, title: 'React Development', desc: 'Hooks, State Management, Vite, SPA' },
      { id: 4, title: 'Backend Development', desc: 'Django, REST APIs, MySQL, Auth' },
      { id: 5, title: 'Final Project I', desc: 'Full Stack Web Application' },
      { id: 6, title: 'Final Project II', desc: 'Industry Level Scalable System' },
    ],
  },
  { id: 2, title: 'Placements', reviews: true },
  {
    id: 3,
    title: 'Faculty',
    faculty: true,
    instructor: {
      name: 'Harshwardhan Singh',
      role: 'Lead Python Full Stack Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'Harshwardhan is a veteran software engineer with over 10 years of experience in Python and Django. He has mentored hundreds of students and professionals, helping them transition into full-stack development roles. His teaching philosophy focuses on project-based learning and industry best practices.',
      experience: '10+ Years',
      students: '500+',
      specialization: ['Python', 'Django', 'React', 'Architecting Scalable Systems'],
    },
  },
  {
    id: 4,
    title: 'Admissions',
    content:
      'Admission journey:\n1) Friendly telephonic interview with trainer to understand your goals.\n2) Short written aptitue test with basic questions to check fundamentals.\n3) Direct admission and onboarding.',
  },
  { id: 5, title: 'Student Life', studentLife: true },
  { id: 6, title: 'Contact', contact: true },
]

// ── Auto-scrolling Testimonial Carousel ──────────────────────────────────────
function PlacementsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const timerRef = useRef(null)
  const total = placementReviews.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsToShow = isMobile ? 1 : 3

  const restart = (fn) => {
    clearInterval(timerRef.current)
    fn()
    startTimer()
  }

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % total)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [total])

  const go = (idx, dir) => {
    setDirection(dir)
    setCurrent((idx + total) % total)
  }

  const prev = () => go(current - 1, -1)
  const next = () => go(current + 1, 1)

  const variants = {
    enter: (d) => ({ x: d > 0 ? '20%' : '-20%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? '-20%' : '20%', opacity: 0 }),
  }

  const getVisibleReviews = () => {
    const reviews = []
    for (let i = 0; i < cardsToShow; i++) {
      reviews.push(placementReviews[(current + i) % total])
    }
    return reviews
  }

  return (
    <div className="relative w-full group py-8">
      {/* Navigation Arrows - Absolute Positioned */}
      <button
        onClick={() => restart(prev)}
        className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Previous testimonials"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => restart(next)}
        className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Next testimonials"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>

      {/* Cards Container */}
      <div className="overflow-visible px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {getVisibleReviews().map((review, idx) => (
              <motion.div
                key={`${current}-${idx}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col items-center text-center relative hover:shadow-md transition-shadow"
              >
                {/* Top Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-16 mb-6 relative">
                  <Image 
                    src={review.image} 
                    alt={review.name} 
                    fill
                    className="object-cover" 
                  />
                </div>

                {/* Review Title */}
                <h3 className="text-lg font-black text-slate-800 mb-3 tracking-tight">
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  {review.text}
                </p>

                {/* Name */}
                <p className="text-sm font-black text-gray-900 mb-1">{review.name}</p>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < review.stars ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.97z" />
                    </svg>
                  ))}
                </div>

                {/* Role */}
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-500">
                  {review.role}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => restart(() => go(i, i > current ? 1 : -1))}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial group ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Course Details Component ──────────────────────────────────────────────────
function CourseDetails({ section }) {
  return (
    <div className="w-full space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-4 hover:shadow-sm transition-all">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
            <FiAward className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Program</p>
            <p className="text-sm font-black text-gray-900">{section.programName}</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-4 hover:shadow-sm transition-all">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white shrink-0">
            <FiClock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Duration</p>
            <p className="text-sm font-black text-gray-900">{section.duration}</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-4 hover:shadow-sm transition-all">
          <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
            <FiCreditCard className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Fees</p>
            <p className="text-sm font-black text-gray-900">{section.fees}</p>
          </div>
        </div>
      </div>

      {/* 6-Month Roadmap Mini-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {section.months.map((m) => (
          <div key={m.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all group">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black text-blue-600 px-1.5 py-0.5 bg-blue-100 rounded uppercase">Month {m.id}</span>
            </div>
            <h4 className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">{m.title}</h4>
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      
    </div>
  )
}

// ── Request Callback Form ───────────────────────────────────────────────────
function RequestCallbackForm() {
  return (
    <form
      className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
      action="mailto:info.adlotech@gmail.com"
      method="post"
      encType="text/plain"
    >
      <div className="relative bg-amber-400 px-6 py-4 text-center text-white">
        <h3 className="text-lg font-bold">Course Enquiry Form</h3>
        <button
          type="button"
          aria-label="Close form"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white"
        >
          ?
        </button>
      </div>

      <div className="space-y-5 px-6 py-6">
        <div className="h-px w-full bg-amber-100" />

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <FiUser className="text-base" />
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="w-full rounded-xl border border-dashed border-amber-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <FiPhone className="text-base" />
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
            className="w-full rounded-xl border border-dashed border-amber-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <FiMail className="text-base" />
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-full rounded-xl border border-dashed border-amber-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <FiAward className="text-base" />
            Highest Qualification
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="qualification"
              defaultValue=""
              required
              className="w-full appearance-none rounded-xl border border-dashed border-amber-300 bg-white px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:border-amber-500"
            >
              <option value="" disabled>
                Highest Qualification
              </option>
              <option value="12">12</option>
              <option value="Degree">Degree</option>
              <option value="Freshers">Freshers</option>
              <option value="Diploma">Diploma</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-amber-400 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

function FacultyDetails({ section }) {
  const { instructor } = section

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
          {/* Instructor Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0 border-4 border-gray-50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 relative">
            <Image 
              src={`${instructor.image.split('?')[0]}?auto=format&fit=crop&q=75&w=600`}
              alt={instructor.name} 
              fill
              className="object-cover"
            />
          </div>

          {/* Instructor Bio & Details */}
          <div className="flex-1 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-black uppercase rounded tracking-wider">Lead Instructor</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{instructor.name}</h3>
              <p className="text-blue-600 font-bold text-sm tracking-wide">{instructor.role}</p>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              {instructor.bio}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <FiClock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Experience</p>
                  <p className="text-xs font-black text-gray-900">{instructor.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <FiAward className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Students</p>
                  <p className="text-xs font-black text-gray-900">{instructor.students}</p>
                </div>
              </div>
            </div>

            {/* Specialization Tags */}
            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Key Expertise</p>
              <div className="flex flex-wrap gap-2">
                {instructor.specialization.map((skill, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 cursor-default">
                    <FiCheckCircle className="text-blue-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Contact Details Component ─────────────────────────────────────────────────
function ContactDetails() {
  const address =
    'Husna Complex, 65/2244, Kannur Rd, near English Church, opp. SL Towers, West Nadakkave, West, Nadakkave, Kozhikode, Kerala 673011'
  const phoneLinks = [
    { label: '956 756 8185', href: 'tel:+919567568185' },
    { label: '9744 77 9574', href: 'tel:+919744779574' },
  ]
  const whatsappLinks = [
    { label: '956 756 8185', href: 'https://wa.me/919567568185' },
    { label: '9744 77 9574', href: 'https://wa.me/919744779574' },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 space-y-5">
        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Address</p>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">{address}</p>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Call</p>
          <div className="flex flex-wrap gap-2">
            {phoneLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">WhatsApp</p>
          <div className="flex flex-wrap gap-2">
            {whatsappLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-bold text-emerald-700 hover:border-emerald-300 hover:text-emerald-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Email</p>
          <a
            href="mailto:info.adlotech@gmail.com"
            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            info.adlotech@gmail.com
          </a>
        </div>
      </div>

      <RequestCallbackForm />
    </div>
  )
}

// ── Student Life Section ─────────────────────────────────────────────────────
function StudentLife() {
  const highlights = [
    {
      title: '1:1 Doubt Clearing',
    },
    {
      title: 'One-to-One Learning',
    },
    {
      title: 'Peer Learning Pods',
    },
    {
      title: 'Group Discussions',
    },
  ]

  const gallery = [
    {
      title: 'Doubt-Clearing Session',
      tag: '1:1 Guidance',
      // desc: 'An Indian teacher clearing doubts with a 20-year-old student.',
      src: '/images/image003.png',
      alt: 'Indian teacher explaining a doubt to a college student in a one-to-one learning session',
      span: true,
    },
    {
      title: 'One-to-One Learning',
      tag: 'Mentorship',
      // desc: 'Focused attention to speed up concept mastery.',
      src: '/images/image001.png',
      alt: 'Mentor guiding a learner during a one-to-one study session',
    },
    {
      title: 'Group Discussion',
      tag: 'Collaborate',
      // desc: 'Students learning together through peer discussion.',
      src: '/images/image004.png',
      alt: 'Students collaborating in a group discussion session',
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-full">
          Student Life
        </span>
        <h3 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 leading-tight">
          Learning that feels personal, supportive, and modern.
        </h3>
        <p className="mt-3 text-sm md:text-base text-gray-600 font-medium leading-relaxed">
          We blend one-to-one mentorship with collaborative learning so every learner gets
          the confidence to ask questions, practice in groups, and build real project skills.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-gray-50/70 p-4 hover:bg-white hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gallery.map((item) => (
          <figure
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm ${
              item.span ? 'sm:col-span-2 h-56 sm:h-60' : 'h-48'
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
                {item.tag}
              </span>
              <h4 className="text-lg font-black text-white">{item.title}</h4>
              <p className="text-xs text-white/90 font-medium">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SyllabusPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="bg-white min-h-screen pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 md:mb-14 flex items-start gap-4">
          <Link
            href="/"
            aria-label="Back to home"
            className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.5 4.5L7 10l5.5 5.5" />
            </svg>
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Adlotech– Advancing opportunities through logic and technology
          </h1>
        </div>

        {/* Sections — shifted right */}
        <div className="md:pl-16 lg:pl-24">
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            {syllabusSections.map((item, index) => {
              const isOpen = openId === item.id
              const isLast = index === syllabusSections.length - 1

              return (
                <div
                  key={item.id}
                  className={`bg-white ${!isLast ? 'border-b border-gray-200' : ''}`}
                >
                  {/* Title row */}
                  <div className="flex items-center gap-4 px-6 pt-6 pb-1">
                    <span className="text-xs font-bold text-gray-400 tabular-nums w-5 shrink-0">
                      0{item.id}
                    </span>
                    <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Toggle button */}
                  <div className="px-6 pb-5 pl-16">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`syllabus-panel-${item.id}`}
                      className="group flex items-center transition-all duration-200"
                    >
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 ${
                          isOpen
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-gray-300 text-gray-600 group-hover:border-blue-500 group-hover:text-blue-600'
                        }`}
                      >
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </span>
                    </button>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`syllabus-panel-${item.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 pl-16">
                          {item.reviews ? (
                            <PlacementsCarousel />
                          ) : item.courses ? (
                            <CourseDetails section={item} />
                          ) : item.studentLife ? (
                            <StudentLife />
                          ) : item.faculty ? (
                            <FacultyDetails section={item} />
                          ) : item.contact ? (
                            <ContactDetails />
                          ) : (
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

