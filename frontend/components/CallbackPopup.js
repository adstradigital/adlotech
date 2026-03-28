'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  qualification: ''
}

const CallbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // null | success | error
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 350)
    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
    setStatus(null)
    setErrorText('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setStatus(null)
    setErrorText('')
    setIsSubmitting(true)

    try {
      const message = `Callback request from website popup\nPhone: ${formData.phone || 'Not provided'}\nQualification: ${formData.qualification || 'Not provided'}`

      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name || 'Website Visitor',
          email: formData.email || 'callback@adlotech.com',
          message
        })
      })

      if (!response.ok) {
        throw new Error('Unable to submit callback request right now.')
      }

      setStatus('success')
      setFormData(initialForm)
      setTimeout(() => closePopup(), 1400)
    } catch (error) {
      setStatus('error')
      setErrorText(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={closePopup}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]"
          >
            <div className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(248,250,252,1)_0%,rgba(255,255,255,0.8)_30%,rgba(241,245,249,1)_100%)]" />

            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close popup"
            >
              x
            </button>

            <div className="relative z-10 p-6 sm:p-8">
              <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Quick Connect
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Request a Callback
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill this only if you want us to call you back. Otherwise, close this popup.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400/60 focus:bg-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mail"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400/60 focus:bg-white"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400/60 focus:bg-white"
                />
                <div className="relative">
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400/60 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Qualification</option>
                    <option value="Btech">BTech</option>
                    <option value="bca">  BCA</option>
                    <option value="any degree">Any Degree</option>
                    <option value="freshers">Freshers</option>
                    <option value="class 12">Class 12</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Callback'}
                  </button>
                  <button
                    type="button"
                    onClick={closePopup}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              </form>

              {status === 'success' && (
                <p className="mt-4 text-sm font-semibold text-emerald-600">
                  Callback request sent. We will contact you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm font-semibold text-red-600">
                  {errorText}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CallbackPopup
