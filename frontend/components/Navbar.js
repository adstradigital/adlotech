
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDown, FiBookOpen, FiBriefcase, FiTrendingUp, FiGlobe } from 'react-icons/fi'
import BrandLogo from './BrandLogo'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const menuContent = {
  '/about': {
    title: 'About Us',
    description: 'ADLOTECH is a proud subsidiary of Adstra Digital, created with a singular mission: to deliver specialized, future-ready programming education. We are currently under the ISO–IAF certification process, expected to be received within a month, ensuring that our training standards meet the highest levels of global quality and credibility.',
    links: [],
    image: '/images/contact-bg.jpg'
  },
  '/services': {
    title: 'What do we do',
    items: [
      { 
        title: 'Industry-Expert Training', 
        desc: 'Learn directly from professionals with real-world experience.',
        icon: FiBookOpen 
      },
      { 
        title: 'Internship Integration', 
        desc: 'Stipend-paid internships that connect learning with practical projects.',
        icon: FiBriefcase 
      },
      { 
        title: 'Career Pathway', 
        desc: 'Top-performing candidates are offered full-time jobs with Adstra Digital.',
        icon: FiTrendingUp 
      },
      { 
        title: 'Global Standards', 
        desc: 'ISO–IAF certification ensures quality, trust, and recognition.',
        icon: FiGlobe 
      }
    ],
    image: '/images/services-bg.jpg'
  },
  '/contact': {
    title: 'Get in Touch',
    description: 'Ready to take the next step? Our admissions team is here to answer all your questions and help you start your journey.',
    links: [
      { label: 'info@adlotech.com', href: 'mailto:info@adlotech.com' },
      { label: 'Support Center', href: '#' },
      { label: 'Visit our Campus', href: '#' }
    ],
    image: '/images/about-bg.png'
  }
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState('/about')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    qualification: '',
    message: ''
  })
  const [isSendingContact, setIsSendingContact] = useState(false)
  const [contactStatus, setContactStatus] = useState(null) // null | success | error
  const [contactError, setContactError] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  const handleContactFieldChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (isSendingContact) return

    setContactStatus(null)
    setContactError('')
    setIsSendingContact(true)

    try {
      const composedMessage = contactForm.qualification
        ? `Qualification: ${contactForm.qualification}\n\n${contactForm.message}`
        : contactForm.message

      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: composedMessage
        })
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        const firstError = Object.values(data || {})[0]
        const errorText = Array.isArray(firstError) ? firstError[0] : 'Failed to send message.'
        throw new Error(errorText)
      }

      setContactStatus('success')
      setContactForm({ name: '', email: '', qualification: '', message: '' })
    } catch (error) {
      setContactStatus('error')
      setContactError(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSendingContact(false)
      setTimeout(() => {
        setContactStatus(null)
        setContactError('')
      }, 5000)
    }
  }

  return (
    <>
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2.5' 
          : 'bg-white shadow-none py-3'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="inline-flex"
            >
              <BrandLogo className="max-w-[75px] sm:max-w-[85px]" priority />
            </Link>

            <div className="flex items-center gap-6">
              {/* Scroll Down Button */}
              <motion.button
                onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                whileHover={{ y: 3 }}
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all duration-300"
                title="Scroll to Footer"
              >
                <FiArrowDown className="w-4 h-4" />
              </motion.button>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="group flex items-center gap-3 transition-colors duration-300 font-bold tracking-widest text-xs text-gray-900 hover:text-blue-600"
              >
                <div className="flex flex-col gap-[4px] justify-center items-end">
                  <span className="h-[1.5px] w-6 bg-gray-900 transition-all duration-300 group-hover:bg-blue-600"></span>
                  <span className="h-[1.5px] w-6 bg-gray-900 transition-all duration-300 group-hover:bg-blue-600 group-hover:w-4"></span>
                </div>
                MENU
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 min-h-screen bg-[#111111] z-50 flex flex-col justify-center overflow-hidden"
          >
            {/* Full Screen Background Image */}
            <AnimatePresence mode="wait">
              {menuContent[hoveredLink]?.image && (
                <motion.div
                  key={`bg-${hoveredLink}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 z-0 pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10" />
                  <img 
                    src={menuContent[hoveredLink].image} 
                    alt="Background" 
                    className="w-full h-full object-cover filter brightness-50"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Overlay Header (Close Button) */}
            <div className="absolute top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center z-20">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex"
               >
                <BrandLogo className="max-w-[92px] sm:max-w-[104px]" />
              </Link>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-3 text-white transition-colors duration-300 font-bold tracking-widest text-sm hover:text-gray-300"
              >
                Close
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Menu Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-16 md:mt-0 flex flex-col md:flex-row items-center justify-between h-full py-10 md:py-20">
              
              {/* Left Side: Navigation Links */}
              <div className="w-full md:w-1/2">
                <ul className="space-y-6 md:space-y-10">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                      onMouseEnter={() => setHoveredLink(link.href)}
                    >
                      <button
                        onClick={() => setHoveredLink(link.href)}
                        className="group flex flex-col md:flex-row md:items-center text-5xl md:text-7xl lg:text-8xl font-black transition-all duration-300 hover:translate-x-6 tracking-tight text-left"
                      >
                        <span className="text-xl md:text-2xl text-white/30 font-bold mb-1 md:mb-0 md:mr-10 group-hover:text-blue-500 transition-colors duration-300">
                          0{index + 1}
                        </span>
                        <span className={`bg-clip-text text-transparent transition-colors duration-300 ${
                          hoveredLink === link.href ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-gray-500 to-gray-700 group-hover:from-blue-400 group-hover:to-purple-400'
                        }`}>
                          {link.label}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Dynamic Content Panel */}
              <div className="hidden md:flex w-full md:w-1/2 flex-col justify-center pl-16 border-l border-white/10 h-full relative py-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredLink}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xl relative z-10"
                  >
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight filter drop-shadow-md">
                      {menuContent[hoveredLink]?.title}
                    </h3>

                    {hoveredLink === '/contact' ? (
                      <div className="flex flex-col gap-5 w-full max-w-sm">
                        <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
                          <input
                            type="text"
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactFieldChange}
                            required
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                          />
                          <input
                            type="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactFieldChange}
                            required
                            placeholder="Your Email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                          />
                          <select
                            name="qualification"
                            value={contactForm.qualification}
                            onChange={handleContactFieldChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-xs appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select Qualification</option>
                            <option value="Btech">BTech</option>
                            <option value="bca">BCA</option>
                            <option value="any degree">Any Degree</option>
                            <option value="freshers">Freshers</option>
                            <option value="class 12">Class 12</option>
                          </select>
                          <textarea
                            name="message"
                            value={contactForm.message}
                            onChange={handleContactFieldChange}
                            required
                            placeholder="Message"
                            rows={2}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-xs"
                          ></textarea>
                          <button
                            type="submit"
                            disabled={isSendingContact}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-500/30 text-xs mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSendingContact ? 'Sending...' : 'Send Message'}
                          </button>
                          {contactStatus === 'success' && (
                            <p className="text-emerald-400 text-[11px] font-semibold mt-1">
                              Message sent successfully.
                            </p>
                          )}
                          {contactStatus === 'error' && (
                            <p className="text-red-400 text-[11px] font-semibold mt-1">
                              {contactError || 'Something went wrong. Please try again.'}
                            </p>
                          )}
                        </form>
                        
                        <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Or talk to us directly</p>
                          <a 
                            href="https://wa.me/911234567890" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300 text-xs font-bold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.171.694 1.488 1.026 2.75.762 1.512-.316 1.432-.234 3.913-.235 5.561 0 10.086-4.525 10.088-10.087 0-2.699-1.051-5.236-2.961-7.146s-4.447-2.961-7.146-2.961c-5.563 0-10.088 4.524-10.09 10.088 0 2.126.659 4.154 1.905 5.865l-.427 1.56.406.406.812-.212 1.56-.406-.406-.406zm10.613-7.508c-.279-.14-1.652-.816-1.907-.908-.255-.093-.441-.14-.627.14-.186.279-.721.908-.884 1.093-.163.186-.326.209-.605.07-.279-.14-1.18-.435-2.246-1.385-.828-.738-1.387-1.65-1.55-1.93-.163-.279-.018-.431.122-.57.126-.126.279-.326.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488s-.627-1.512-.86-2.07c-.227-.544-.455-.47-.627-.47h-.535c-.186 0-.488.07-.744.349-.256.279-.977.953-.977 2.326s1.023 2.697 1.163 2.883c.14.186 2.013 3.074 4.877 4.314.681.295 1.213.471 1.627.603.683.221 1.305.19 1.796.117.547-.082 1.652-.674 1.884-1.326.233-.651.233-1.209.163-1.326-.07-.116-.256-.186-.535-.326z"/>
                            </svg>
                            Chat on WhatsApp
                          </a>
                        </div>
                      </div>
                    ) : hoveredLink === '/services' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                        {menuContent['/services'].items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + idx * 0.1 }}
                            className="group/card relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col gap-3"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover/card:bg-blue-500 group-hover/card:text-white transition-all duration-300">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <h4 className="text-lg font-bold text-white group-hover/card:text-blue-400 transition-colors">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8 whitespace-pre-line">
                          {menuContent[hoveredLink]?.description}
                        </p>
                        <ul className="space-y-4">
                          {menuContent[hoveredLink]?.links?.map((sublink, idx) => (
                            <li key={idx}>
                              <Link href={sublink.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors text-lg font-medium">
                                <span className="w-4 h-[2px] bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></span>
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
