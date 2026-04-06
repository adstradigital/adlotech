'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumbers = [
    { label: 'Counselor 1', number: '919567568185' },
    { label: 'Counselor 2', number: '919744779574' }
  ]

  return (
    <div className="fixed bottom-8 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 10, y: 10 }}
            className="mb-2 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#00c55f] p-6 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">Adlotech Support</p>
                <h3 className="text-xl font-black text-white">Chat with Us</h3>
              </div>
            </div>

            {/* List of Numbers */}
            <div className="p-4 space-y-3">
              {whatsappNumbers.map((item, idx) => (
                <motion.a
                  key={item.number}
                  href={`https://wa.me/${item.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 transition-all hover:bg-emerald-50 hover:border-emerald-200 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">WhatsApp</p>
                      <p className="text-sm font-black text-slate-800 leading-none">{item.label}</p>
                    </div>
                  </div>
                  <div className="text-slate-300 group-hover:text-emerald-500 transform transition-transform group-hover:translate-x-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Sub-footer */}
            {/* <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Typical response time: <span className="text-emerald-600">5 mins</span></p>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex items-center justify-center rounded-full h-16 w-16 transition-all duration-500 shadow-2xl overflow-hidden ${
          isOpen 
            ? 'bg-slate-900 text-white' 
            : 'bg-[#00c55f] text-white'
        }`}
      >
        <div className="relative flex items-center justify-center h-10 w-10">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <FiX className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <FaWhatsapp className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}

export default WhatsAppFloat
