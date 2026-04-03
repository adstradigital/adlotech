'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiPhone, FiX, FiAward } from 'react-icons/fi'

const EnquireFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    course: 'Python Full Stack'
  })

  const qualifications = [
    '10th Grade',
    '12th Grade',
    'Diploma',
    'Undergraduate',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:info.adlotech@gmail.com?subject=Course Enquiry: ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AQualification: ${formData.qualification}%0ACourse: ${formData.course}`
    setIsOpen(false)
  }

  useEffect(() => {
    const handleOpenEnquireForm = () => {
      setIsOpen(true)
    }

    window.addEventListener('open-enquire-form', handleOpenEnquireForm)

    return () => {
      window.removeEventListener('open-enquire-form', handleOpenEnquireForm)
    }
  }, [])

  return (
    <>
      {/* Enquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-[0_50px_100px_rgba(0,0,0,0.25)] border border-violet-50"
            >
              {/* Floating Violet Header - Matches Reference Image 2 Color */}
              <div className="p-4 px-6 mt-6 mx-6 rounded-2xl bg-violet-600 relative flex items-center justify-center shadow-lg shadow-violet-500/20">
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">Course Enquiry Form</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-20"
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="p-8 md:p-10 pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-black text-violet-600">
                      <FiUser className="w-5 h-5" />
                      Full Name <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-dashed border-violet-200 bg-white text-sm font-bold text-slate-800 placeholder:text-gray-300 focus:border-violet-500 focus:border-solid focus:ring-4 focus:ring-violet-500/5 outline-none transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-black text-violet-600">
                      <FiPhone className="w-5 h-5" />
                      Phone Number <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-dashed border-violet-200 bg-white text-sm font-bold text-slate-800 placeholder:text-gray-300 focus:border-violet-500 focus:border-solid focus:ring-4 focus:ring-violet-500/5 outline-none transition-all shadow-sm"
                    />
                  </div>

                  {/* Highest Qualification */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-black text-violet-600">
                      <FiAward className="w-5 h-5" />
                      Highest Qualification <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full appearance-none px-6 py-4 rounded-2xl border-2 border-dashed border-violet-200 bg-white text-sm font-bold text-slate-800 focus:border-violet-500 focus:border-solid focus:ring-4 focus:ring-violet-500/5 outline-none transition-all cursor-pointer shadow-sm"
                      >
                        <option value="" disabled>Highest Qualification</option>
                        {qualifications.map(q => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-violet-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 pb-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-violet-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-violet-500/20 hover:bg-violet-700 transition-all duration-300 uppercase tracking-widest shadow-[0_10px_20px_rgba(124,58,237,0.3)]"
                    >
                      Submit
                    </motion.button>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EnquireFloat
