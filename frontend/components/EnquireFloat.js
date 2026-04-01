'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiPhone, FiBookOpen, FiX, FiCalendar, FiAward, FiSend } from 'react-icons/fi'

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
    window.location.href = `mailto:info.adlotech@gmail.com?subject=New Course Enquiry: ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AQualification: ${formData.qualification}%0ACourse: ${formData.course}`
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button on the Right */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-slate-900 text-white px-7 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] font-black text-sm transition-all hover:bg-blue-600 overflow-hidden relative group"
        >
          <div className="relative z-10 flex items-center gap-3">
            <FiCalendar className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            <span className="tracking-tight uppercase">Enquire Now</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

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
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/20"
            >
              {/* Modern Header */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 pb-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-md">
                    Adlotech Admissions
                  </span>
                  <h3 className="text-3xl font-black tracking-tight leading-none">Course Enquiry</h3>
                  <p className="mt-2 text-blue-100 font-medium text-sm opacity-80">Fill the form below to start your tech journey.</p>
                </div>
                
                {/* Decorative background elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-6 top-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-20 backdrop-blur-md border border-white/10"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content - Integrated & Premium Layout */}
              <div className="p-8 md:p-10 -mt-6 rounded-t-[2.5rem] bg-white relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiUser className="w-3.5 h-3.5 text-blue-500" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-800 placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiPhone className="w-3.5 h-3.5 text-blue-500" />
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-800 placeholder:text-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Highest Qualification */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiAward className="w-3.5 h-3.5 text-blue-500" />
                        Qualification
                      </label>
                      <div className="relative">
                        <select
                          name="qualification"
                          required
                          value={formData.qualification}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-800 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all cursor-pointer"
                        >
                          <option value="" disabled>Choose Level</option>
                          {qualifications.map(q => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Course */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiBookOpen className="w-3.5 h-3.5 text-blue-500" />
                        Selected Course
                      </label>
                      <input
                        type="text"
                        name="course"
                        readOnly
                        value={formData.course}
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-500 outline-none cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Submit Button - Premium Design */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-black rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)] hover:translate-y-[-3px] active:translate-y-0 transition-all duration-300 group"
                    >
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      SUBMIT ENQUIRY
                    </button>
                    <p className="mt-4 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest opacity-60">Typical response time: Within 24 hours</p>
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
