'use client'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    lines: ['Near English Church,', 'Calicut - 673008, Kerala, India'],
    gradient: 'from-blue-500 to-cyan-500',
    href: 'https://www.google.com/maps/search/?api=1&query=Near+English+Church,+Nadakkavu,+Kozhikode,+Kerala,+India'
  },
  {
    icon: FaEnvelope,
    label: 'Email Us',
    lines: ['info@adlotech.com', 'training@adlotech.com'],
    gradient: 'from-purple-500 to-pink-500',
    href: 'mailto:info@adlotech.com'
  },
  {
    icon: FaPhone,
    label: 'Call Us',
    lines: ['+91 12345 67890', '+91 98765 43210'],
    gradient: 'from-emerald-500 to-teal-500',
    href: 'tel:+911234567890'
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', qualification: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:8000/api/contact/', formData)
      setStatus('success')
      setFormData({ name: '', email: '', qualification: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 px-4">
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-200/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-purple-200/40 blur-[120px] pointer-events-none" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg,rgba(0,0,0,0.07) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full bg-blue-50">
              Let's Talk
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
              Have a question or ready to start your journey? We're just a message away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─────────────────────────────── */}
      <section className="pb-28 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Form ── */}
          <AnimatedSection>
            <div className="relative">
              {/* Glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 transition" />
              <div className="relative bg-white border border-gray-100 rounded-3xl p-10 shadow-2xl">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-500 mb-8">Fill out the form and we'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">Your Name</label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">Email Address</label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Qualification Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">Qualification</label>
                    <div className="relative">
                      <select
                        name="qualification" value={formData.qualification}
                        onChange={handleChange} required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your qualification</option>
                        <option value="Btech">Btech</option>
                        <option value="BCA">BCA</option>
                        <option value="Any Degree">Any Degree</option>
                        <option value="Freshers">Freshers</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">Your Message</label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} required rows="6"
                      placeholder="Tell us about yourself or ask anything…"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit" disabled={loading}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><FaPaperPlane className="text-sm" /> Send Message</>
                    )}
                  </motion.button>

                  {/* Status */}
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl"
                    >
                      <FaCheckCircle className="flex-shrink-0 text-xl" />
                      <span>Message sent! We'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl"
                    >
                      <FaExclamationCircle className="flex-shrink-0 text-xl" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Info Cards ── */}
          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.a
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -4 }}
                  className="block group bg-gray-900 border border-white/8 hover:border-white/15 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${info.gradient}`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm tracking-widest uppercase bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent mb-2`}>{info.label}</h3>
                      {info.lines.map((line, li) => (
                        <p key={li} className="text-gray-300 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}

            {/* WhatsApp Integration Card */}
            <AnimatedSection delay={0.45}>
              <motion.a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="block relative group overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-emerald-600 border border-emerald-500 rounded-2xl p-6 text-white flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                      <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.171.694 1.488 1.026 2.75.762 1.512-.316 1.432-.234 3.913-.235 5.561 0 10.086-4.525 10.088-10.087 0-2.699-1.051-5.236-2.961-7.146s-4.447-2.961-7.146-2.961c-5.563 0-10.088 4.524-10.09 10.088 0 2.126.659 4.154 1.905 5.865l-.427 1.56.406.406.812-.212 1.56-.406-.406-.406zm10.613-7.508c-.279-.14-1.652-.816-1.907-.908-.255-.093-.441-.14-.627.14-.186.279-.721.908-.884 1.093-.163.186-.326.209-.605.07-.279-.14-1.18-.435-2.246-1.385-.828-.738-1.387-1.65-1.55-1.93-.163-.279-.018-.431.122-.57.126-.126.279-.326.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488s-.627-1.512-.86-2.07c-.227-.544-.455-.47-.627-.47h-.535c-.186 0-.488.07-.744.349-.256.279-.977.953-.977 2.326s1.023 2.697 1.163 2.883c.14.186 2.013 3.074 4.877 4.314.681.295 1.213.471 1.627.603.683.221 1.305.19 1.796.117.547-.082 1.652-.674 1.884-1.326.233-.651.233-1.209.163-1.326-.07-.116-.256-.186-.535-.326z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-100/70">Instant Support</p>
                      <h4 className="text-xl font-black">Chat on WhatsApp</h4>
                    </div>
                  </div>
                  <FaPaperPlane className="text-white/40 transform -rotate-12 group-hover:rotate-0 transition-transform" />
                </div>
              </motion.a>
            </AnimatedSection>

            {/* Office hours card */}
            <AnimatedSection delay={0.6}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20" />
                <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Office Hours</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Monday – Friday</span>
                      <span className="text-white font-semibold">9 AM – 6 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Saturday</span>
                      <span className="text-white font-semibold">10 AM – 4 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span className="text-gray-500 font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

    </div>
  )
}
