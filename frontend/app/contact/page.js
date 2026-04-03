'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submit:', formData)
    // Handle form logic
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_top_10%]"
          style={{ backgroundImage: "url('/images/contact.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/80 via-[#0c2445]/65 to-[#061326]/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl translate-y-24 sm:translate-y-28">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">Contact</h1>
            <p className="mt-6 text-2xl font-medium text-white/90">
              Adlotech <span className="mx-2 text-white/40">{'>'}</span>{' '}
              <span className="text-blue-200">Contact</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-[#14213d] mb-4 relative inline-block">
                    Keep In Touch With Us
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-purple-600 rounded-full"></span>
                  </h2>
                  <p className="mt-8 text-gray-500 leading-relaxed font-medium">
                    If you require clarifications on any of the courses or the admission process, we are happy to help.
                  </p>
                </div>

                <div className="space-y-10">
                  {/* Call Section */}
                  <div className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-purple-100 flex items-center justify-center text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-200">
                      <FaPhoneAlt size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14213d] mb-2">Call us on:</h3>
                      <div className="text-gray-600 space-y-1 font-medium">
                        <p>+91 956 756 8185</p>
                        <p>+91 9744 77 9574</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-purple-100 flex items-center justify-center text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-200">
                      <FaEnvelope size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14213d] mb-2">Email us at:</h3>
                      <div className="text-gray-600 space-y-1 font-medium">
                        <p>info.adlotech@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-purple-100 flex items-center justify-center text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-200">
                      <FaMapMarkerAlt size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14213d] mb-2">Locate us on :</h3>
                      <p className="text-gray-600 leading-relaxed font-medium max-w-sm">
                        Husna Complex, 65/2244, Kannur Rd, near English Church, opp. SL Towers, West Nadakkave, West, Nadakkave, Kozhikode, Kerala 673011
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-50/50 shadow-[0_32px_64px_-16px_rgba(45,35,66,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-[80px] -mr-20 -mt-20 opacity-50"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-[#14213d] mb-4 relative inline-block">
                      Get in Touch
                      <span className="absolute -bottom-2 left-0 w-16 h-1 bg-purple-600 rounded-full"></span>
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#14213d] ml-1">Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name *"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300"
                            onChange={handleChange}
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#14213d] ml-1">E-mail *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail *"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300"
                            onChange={handleChange}
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#14213d] ml-1">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone *"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300"
                            onChange={handleChange}
                          />
                        </div>

                        {/* City */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#14213d] ml-1">City *</label>
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="City *"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Course Selection */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#14213d] ml-1">Select Course *</label>
                        <select
                          name="course"
                          required
                          className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300 appearance-none text-gray-500"
                          onChange={handleChange}
                        >
                          <option value="">Choose a course...</option>
                          <option value="python">Python & AI Masterclass</option>
                          <option value="fullstack">Full Stack Development</option>
                          <option value="datascience">Data Science with Python</option>
                          <option value="machinelearning">Machine Learning & Neural Networks</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#14213d] ml-1">Message</label>
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Message"
                          className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50 outline-none transition-all duration-300 resize-none"
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      {/* T&C */}
                      <div className="flex items-start gap-3 px-1">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          By registering I accept the <a href="#" className="text-blue-500 hover:underline">TnC</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> of the website and give my consent to send me updates via Messages/Email ^
                        </p>
                      </div>

                      {/* Dummy reCAPTCHA */}
                      <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 flex items-center justify-between max-w-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 border-2 border-gray-300 rounded bg-white"></div>
                          <span className="text-sm font-medium text-gray-600">I'm not a robot</span>
                        </div>
                        <div className="text-center">
                          <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 mx-auto" />
                          <p className="text-[9px] text-gray-400 mt-1 font-bold">reCAPTCHA</p>
                          <p className="text-[7px] text-gray-400 italic">Privacy - Terms</p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black rounded-xl shadow-xl shadow-purple-200 hover:shadow-2xl hover:shadow-purple-300 transition-all duration-300"
                        >
                          SEND MESSAGE
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
