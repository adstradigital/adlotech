'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-28 right-7 z-[55] flex items-center justify-center group bg-white border border-gray-200 w-12 h-12 rounded-full hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl"
          title="Scroll to Top"
        >
          <FiArrowUp className="text-gray-500 group-hover:text-white w-5 h-5 transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
