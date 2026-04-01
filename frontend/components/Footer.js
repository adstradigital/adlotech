'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiInstagram, FiLinkedin, FiFacebook, FiArrowUp, FiMapPin, FiMail, FiPhone, FiGlobe, FiShield } from 'react-icons/fi'
import BrandLogo from './BrandLogo'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f4f4f5] border-t border-gray-200 pt-14 pb-6 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-[auto_auto_auto_auto] gap-y-8 md:gap-x-12 xl:gap-x-0 mb-5 items-start xl:justify-between">
          
          {/* Section 1: Minimal Branding */}
          <div className="space-y-4 justify-self-start text-left">
            <div className="flex flex-col items-start">
              <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <BrandLogo className="max-w-[47px]" />
              </Link>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                A training institute by <a href="https://adstradigital.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Adstra Digital</a>
              </p>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
              Empowering the next generation of tech leaders through industry-aligned training programs in Kerala, India.
            </p>
          </div>

          {/* Section 2: Links - Simplified */}
          <div className="md:pt-14 xl:min-w-[140px]">
            <h4 className="text-gray-900 font-black text-xs uppercase tracking-widest mb-8 flex items-center">
              Explore
              <span className="w-8 h-[1px] bg-gray-300 ml-3"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-menu', { detail: '/about' }))}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-menu', { detail: '/services' }))}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-menu', { detail: '/contact' }))}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact - Minimalist Style */}
          <div className="md:pt-14 xl:min-w-[260px]">
            <h4 className="text-gray-900 font-black text-xs uppercase tracking-widest mb-8 flex items-center">
              Connect
              <span className="w-8 h-[1px] bg-gray-300 ml-3"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Husna+Complex%2C+65%2F2244%2C+Kannur+Rd%2C+near+English+Church%2C+opp.+SL+Towers%2C+West+Nadakkave%2C+West%2C+Nadakkave%2C+Kozhikode%2C+Kerala+673011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm text-gray-600 group hover:text-blue-600 transition-colors"
                >
                  <FiMapPin className="mt-1 text-blue-500 w-4 h-4 group-hover:scale-125 transition-transform" />
                  <span className="leading-relaxed text-left">Husna Complex, 65/2244, Kannur Rd, near<br/>English Church, opp. SL Towers, West Nadakkave,<br/>West, Nadakkave, Kozhikode, Kerala 673011</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@adlotech.com" 
                  className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm text-gray-600 group hover:text-blue-600 transition-colors"
                >
                  <FiMail className="mt-1 text-blue-500 w-4 h-4 group-hover:scale-125 transition-transform" />
                  <span>info@adlotech.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919567568185" 
                  className="grid grid-cols-[16px_1fr] items-start gap-3 text-sm text-gray-600 group hover:text-blue-600 transition-colors"
                >
                  <FiPhone className="mt-1 text-blue-500 w-4 h-4 group-hover:scale-125 transition-transform" />
                  <span>+91 956 756 8185</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Accreditations - Clean Badges */}
          <div className="md:pt-14 space-y-8 xl:min-w-[320px]">
            <h4 className="text-gray-900 font-black text-xs uppercase tracking-widest flex items-center">
              Quality Assurance
              <span className="w-8 h-[1px] bg-gray-300 ml-3"></span>
            </h4>
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                  <FiShield className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-900 leading-none">ISO 9001:2015</span>
                  <span className="text-[8px] font-bold text-gray-500 mt-1 uppercase tracking-widest">Global Certified Org.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                  <FiGlobe className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-900 leading-none uppercase tracking-tighter">IAF ACCREDITED</span>
                  <span className="text-[8px] font-bold text-gray-500 mt-1 uppercase tracking-widest">Global Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar - Thin & Elegant */}
        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative">
          <p className="text-[10px] font-black tracking-widest text-gray-500 ">
            Copyright Â© 2024 <span className="text-gray-900 font-black">ADLOTECH</span>. All rights Served.
          </p>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/adlotech.training/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 transition-all duration-300"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/adlotech-training"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-white hover:border-transparent hover:bg-[#0077b5] transition-all duration-300"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/adlotechtraining"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-white hover:border-transparent hover:bg-[#1877f2] transition-all duration-300"
            >
              <FiFacebook className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center space-x-12">
            <Link href="/privacy" className="text-[10px] font-black tracking-[0.2em] text-gray-500 hover:text-blue-600 transition-colors uppercase relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
            </Link>
            <Link href="/terms" className="text-[10px] font-black tracking-[0.2em] text-gray-500 hover:text-blue-600 transition-colors uppercase relative group">
              Terms&Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center justify-center group bg-white border border-gray-200 w-12 h-12 rounded-full hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-xl"
            title="Scroll Top"
          >
            <FiArrowUp className="text-gray-500 group-hover:text-white w-5 h-5 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

