

'use client'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
        <span className="text-white text-2xl">{service.icon || '📚'}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default ServiceCard