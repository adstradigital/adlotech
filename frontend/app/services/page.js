// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import AnimatedSection from '@/components/AnimatedSection'
// import {
//   FaPython, FaBriefcase, FaUserTie, FaCode, FaCertificate, FaArrowRight
// } from 'react-icons/fa'

// const services = [
//   {
//     id: 1,
//     icon: FaPython,
//     badge: 'Core Program',
//     title: 'Industry-Expert Training',
//     tagline: 'Learn directly from professionals with real-world experience',
//     gradient: 'from-blue-500 to-cyan-500',
//     glow: 'group-hover:shadow-blue-100',
//     border: 'group-hover:border-blue-200',
//     features: [
//       { label: 'Expertise', items: ['Mentorship from active developers', 'Real-world problem solving'] },
//       { label: 'Curriculum', items: ['Python & Django Mastery', 'REST API Architecture'] },
//     ],
//   },
//   {
//     id: 2,
//     icon: FaBriefcase,
//     badge: 'Earn While You Learn',
//     title: 'Internship Integration',
//     tagline: 'Connect learning with practical stipend-paid projects',
//     gradient: 'from-purple-500 to-pink-500',
//     glow: 'group-hover:shadow-purple-100',
//     border: 'group-hover:border-purple-200',
//     features: [
//       { label: 'Industry', items: ['Work on live production projects', 'Gain real industry experience'] },
//       { label: 'Rewards', items: ['Stipend-paid internship opportunities'] },
//     ],
//   },
//   {
//     id: 3,
//     icon: FaUserTie,
//     badge: 'Placement Support',
//     title: 'Career Pathway',
//     tagline: 'Direct bridge to Adstra Digital and partners',
//     gradient: 'from-emerald-500 to-teal-500',
//     glow: 'group-hover:shadow-emerald-500/25',
//     border: 'group-hover:border-emerald-500/40',
//     features: [
//       { label: 'Opportunities', items: ['Full-time job offers for top performers', 'Direct placement at Adstra Digital'] },
//       { label: 'Network', items: ['Associated partner company network'] },
//     ],
//   },
//   {
//     id: 4,
//     icon: FaCode,
//     badge: 'Hands-On',
//     title: 'Project Experience',
//     tagline: 'Code it, ship it, own it',
//     gradient: 'from-orange-500 to-amber-500',
//     glow: 'group-hover:shadow-orange-500/25',
//     border: 'group-hover:border-orange-500/40',
//     features: [
//       { label: 'Projects', items: ['Mini projects + capstone project', 'Problem-solving challenges'] },
//       { label: 'Tools', items: ['Git & GitHub usage'] },
//       { label: 'Teamwork', items: ['Team collaboration experience'] },
//     ],
//   },
//   {
//     id: 5,
//     icon: FaCertificate,
//     badge: 'Recognition',
//     title: 'Global Standards',
//     tagline: 'Quality, trust, and global recognition',
//     gradient: 'from-rose-500 to-pink-600',
//     glow: 'group-hover:shadow-rose-100',
//     border: 'group-hover:border-rose-200',
//     features: [
//       { label: 'Standards', items: ['ISO–IAF certification process underway', 'Expected within a month'] },
//       { label: 'Trust', items: ['Highest levels of global quality compliance'] },
//     ],
//   },
// ]

// const highlights = [
//   { value: '6', unit: 'Months', label: 'Intensive Training' },
//   { value: '500+', unit: '', label: 'Students Trained' },
//   { value: '95%', unit: '', label: 'Placement Rate' },
//   { value: '20+', unit: '', label: 'Expert Mentors' },
// ]

// export default function Services() {
//   return (
//     <div className="pt-16 bg-white min-h-screen">

//       {/* ─── Hero ─────────────────────────────────────── */}
//       <section className="relative overflow-hidden py-32 px-4">
//         {/* Glow orbs */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-200/40 blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-200/40 blur-[120px] pointer-events-none" />
//         {/* Grid pattern */}
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
//         />

//         <div className="relative z-10 max-w-4xl mx-auto text-center">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
//             <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full bg-blue-50">
//               What We Offer
//             </span>
//             <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
//               Our Services
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
//               Comprehensive, career-focused training programs designed to take you from beginner to job-ready developer.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ─── Quick Stats ──────────────────────────────── */}
//       <section className="px-4 pb-12">
//         <AnimatedSection>
//           <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//             {highlights.map((h, i) => (
//               <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-md">
//                 <div className="text-3xl font-extrabold text-gray-900">
//                   {h.value}<span className="text-blue-600">{h.unit}</span>
//                 </div>
//                 <div className="text-gray-500 text-sm mt-1">{h.label}</div>
//               </div>
//             ))}
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* ─── Services Grid ────────────────────────────── */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">

//           {/* Top row — 3 cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {services.slice(0, 3).map((svc, i) => (
//               <ServiceCard key={svc.id} svc={svc} delay={i * 0.1} />
//             ))}
//           </div>

//           {/* Bottom row — 2 cards centered */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {services.slice(3).map((svc, i) => (
//               <ServiceCard key={svc.id} svc={svc} delay={(i + 3) * 0.1} />
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ─── CTA ──────────────────────────────────────── */}
//       <section className="py-24 px-4 bg-gray-50">
//         <AnimatedSection>
//           <div className="max-w-4xl mx-auto relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20" />
//             <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-14 text-center overflow-hidden shadow-2xl shadow-purple-200">
//               <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
//               <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
//               <div className="relative z-10">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//                   Ready to Start Your Journey?
//                 </h2>
//                 <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
//                   Join Adlotech and transform your career with industry-leading training and mentorship.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
//                 >
//                   Enroll Now <FaArrowRight />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>
//       </section>

//     </div>
//   )
// }

// // ─── Service Card Component ────────────────────────────────────────────────────
// function ServiceCard({ svc, delay }) {
//   return (
//     <AnimatedSection delay={delay}>
//       <motion.div
//         whileHover={{ y: -8 }}
//         className={`group relative bg-white border border-gray-100 ${svc.border} rounded-2xl p-8 h-full overflow-hidden shadow-md hover:shadow-xl ${svc.glow} transition-all duration-500`}
//       >
//         {/* Top gradient accent */}
//         <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.gradient} rounded-t-2xl`} />
//         {/* Hover tint overlay */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`} />

//         {/* Badge */}
//         <span className={`inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${svc.gradient} bg-clip-text text-transparent border border-gray-200 rounded-full mb-5`}>
//           {svc.badge}
//         </span>

//         {/* Icon + Title */}
//         <div className="flex items-start gap-4 mb-4">
//           <div className={`w-12 h-12 bg-gradient-to-br ${svc.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//             <svc.icon className="text-white text-xl" />
//           </div>
//           <div>
//             <h3 className="text-xl font-extrabold text-gray-900 leading-tight">{svc.title}</h3>
//             <p className={`text-sm bg-gradient-to-r ${svc.gradient} bg-clip-text text-transparent font-medium mt-0.5`}>{svc.tagline}</p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gray-100 mb-5" />

//         {/* Feature groups */}
//         <div className="space-y-4">
//           {svc.features.map((group, gi) => (
//             <div key={gi}>
//               <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{group.label}</p>
//               <ul className="space-y-1.5">
//                 {group.items.map((item, ii) => (
//                   <li key={ii} className="flex items-center gap-2 text-gray-600 text-sm">
//                     <span className="text-green-500 text-xs font-bold flex-shrink-0">✓</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatedSection>
//   )
// }
