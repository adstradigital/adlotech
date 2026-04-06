'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import BrandLogo from './BrandLogo'

const Footer = () => {

  return (
    <footer className="bg-[#f4f4f5] border-t border-gray-200 pt-14 pb-6 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_auto_auto_auto] gap-y-8 md:gap-x-12 xl:gap-x-10 mb-5 items-start xl:justify-between">

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

            <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-[240px]">
              Adlotech is a Python training institute powered by AdstraDigital, focused on delivering hands-on, career-oriented programming education.
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-[240px]">
              We prepare students with real-world skills, expert guidance, and industry exposure.
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
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-all hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Socialmedia */}
          <div className="md:pt-14 xl:min-w-[220px]">
            <h4 className="text-gray-900 font-black text-xs uppercase tracking-widest mb-8 flex items-center">
              Socials
              <span className="w-8 h-[1px] bg-gray-300 ml-3"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/adlotech.training/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-gray-600 hover:text-[#E4405F] transition-colors font-medium"
                >
                  <FaInstagram className="w-5 h-5 text-[#E4405F] group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/adlotech-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-gray-600 hover:text-[#0A66C2] transition-colors font-medium"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/adlotechtraining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-gray-600 hover:text-[#1877F2] transition-colors font-medium"
                >
                  <FaFacebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact - Minimalist Style */}
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
                  <span className="leading-relaxed text-left">Husna Complex, 65/2244, Kannur Rd, near<br />English Church, opp. SL Towers, West Nadakkave,<br />West, Nadakkave, Kozhikode, Kerala 673011</span>
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

        </div>

        {/* Footer Bottom Bar - Thin & Elegant */}
        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative">
          <p className="text-[10px] font-black tracking-widest text-gray-500 ">
            Copyright @ 2024 <span className="text-gray-900 font-black">ADLOTECH</span>. All rights Served.
          </p>

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

        </div>
      </div>
    </footer>
  )
}

export default Footer


