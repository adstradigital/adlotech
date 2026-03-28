'use client'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const Gallery = () => {
  const images = [
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image1.png',
    '/images/image2.png'
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatedSection>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Life at <span className="text-blue-600">ADLOTECH</span>
            </h2>
            <p className="text-lg text-gray-500 italic max-w-2xl">
              Capturing moments of learning, collaboration, and innovation within our campus.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative group">
        {/* Subtle shadow masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto no-scrollbar px-8 py-4 snap-x snap-mandatory scroll-smooth">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="min-w-[220px] md:min-w-[340px] aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0 snap-center transition-all duration-300 bg-gray-100"
            >
              <img 
                src={src} 
                alt={`Campus life ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Gallery
