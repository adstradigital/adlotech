'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const TeardropPin = ({ color, isHovered }) => (
  <motion.div
    animate={{ 
      y: isHovered ? -12 : 0,
      scale: isHovered ? 1.05 : 1
    }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="relative flex flex-col items-center cursor-pointer"
  >
    <svg width="70" height="95" viewBox="0 0 100 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <path 
        d="M50 135C50 135 100 88 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 88 50 135 50 135Z" 
        fill={color} 
      />
      <circle cx="50" cy="46" r="28" fill="white" />
    </svg>
    <div className={`absolute bottom-[-8px] w-10 h-3 bg-black/15 rounded-[100%] blur-md transition-opacity duration-300 ${isHovered ? 'opacity-40 scale-125' : 'opacity-20 scale-100'}`} />
  </motion.div>
)

const RoadmapTimeline = ({ steps }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  // PRECISION COORDINATES for the 6-pin "Masterpiece" SVG
  // Equidistant coordinates calculated along the roadmap dashPath curve
  const desktopPositions = [
    { x: '72.3%', y: '81.4%' }, // Month 1 - Python
    { x: '47.5%', y: '59.3%' }, // Month 2 - MySQL
    { x: '49.0%', y: '35.9%' }, // Month 3 - Web Foundations (HTML/CSS/JS)
    { x: '68.7%', y: '14.8%' }, // Month 4 - Django
    { x: '39.0%', y: '2.7%' },  // Month 5 - React
    { x: '7.4%',  y: '-3.4%' }  // Month 6 - Full Stack Implementation
  ]

  // Smooth curvy S-road: narrow at top, wider at bottom
  const leftEdgeP = "M 680 900 C 640 840, 590 772, 495 705 C 390 632, 295 575, 310 515 C 335 445, 490 405, 575 342 C 650 286, 645 228, 515 182 C 395 140, 250 110, -10 50"
  const rightEdgeP = "M 940 900 C 900 840, 850 768, 745 695 C 610 600, 470 545, 510 485 C 560 410, 730 372, 825 318 C 900 274, 885 210, 705 160 C 545 116, 350 85, 50 50"
  const roadSurface = `${leftEdgeP} L 50 50 C 350 85, 545 116, 705 160 C 885 210, 900 274, 825 318 C 730 372, 560 410, 510 485 C 470 545, 610 600, 745 695 C 850 768, 900 840, 940 900 Z`
  const dashPath = "M 810 900 C 770 840, 720 770, 620 700 C 500 620, 380 560, 410 500 C 450 430, 620 390, 700 330 C 770 280, 760 220, 610 170 C 470 120, 300 95, 20 50"
  const desktopCardPlacement = [
    { className: 'left-full top-0 ml-4', initialY: 0 }, // Month 1 (Bottom Right) -> Side Right (x: 72-96%)
    { className: 'top-full left-0 mt-2', initialY: -10 }, // Month 2 (Middle Bottom) -> Below Right (x: 47-71%)
    { className: 'right-full top-0 mr-4', initialY: 0 }, // Month 3 (Middle Top) -> Side Left (x: 25-49%)
    { className: 'top-full left-0 mt-2', initialY: -10 }, // Month 4 (Top Right) -> Below Right (x: 68-92%)
    { className: 'left-full top-0 ml-4', initialY: 0 }, // Month 5 (Blue, Top Left) -> Side Right (x: 39-63%)
    { className: 'top-full left-0 mt-2', initialY: -10 } // Month 6 (Top Far Left) -> Below Right (x: 7-31%)
  ]

  return (
    <div className="relative w-full py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative h-[1000px] hidden md:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 1000 900" className="w-full h-full drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)]" preserveAspectRatio="none">
             <defs>
                <linearGradient id="roadSurfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#9ba0a7" />
                   <stop offset="100%" stopColor="#7f858d" />
                </linearGradient>
             </defs>

             {/* Road shadow */}
             <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                d={roadSurface}
                transform="translate(6, 10)"
                fill="#111827"
                className="opacity-25"
             />

             {/* Main road surface */}
             <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d={roadSurface}
                fill="url(#roadSurfGrad)"
             />

             {/* Side edge lines */}
             <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.7, ease: "easeInOut" }}
                d={leftEdgeP}
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="5"
                strokeDasharray="20 12"
                strokeLinecap="round"
                style={{ strokeDasharray: "20, 12", strokeDashoffset: "var(--path-length)" }}
                className="opacity-85"
             />
             <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.7, ease: "easeInOut" }}
                d={rightEdgeP}
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="5"
                strokeDasharray="20 12"
                strokeLinecap="round"
                style={{ strokeDasharray: "20, 12" }}
                className="opacity-85"
             />

             {/* CENTER DASHED LINE */}
             <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.75 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d={dashPath}
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="30 20"
                strokeLinecap="round"
                className="opacity-75"
             />
          </svg>
        </div>

        {/* Milestones */}
        {steps.map((step, index) => {
          const pos = desktopPositions[index]
          const isHovered = hoveredIdx === index
          const cardPlacement = desktopCardPlacement[index] ?? desktopCardPlacement[1]
          
          return (
            <div 
              key={index} 
              className={`absolute flex flex-col items-center pointer-events-auto ${isHovered ? 'z-50' : 'z-20'}`}
              style={{ left: pos.x, top: pos.y }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Persistent Month & Subject Heading */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -top-14 whitespace-nowrap px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl z-10 flex flex-col items-center group/label transition-all hover:scale-105"
              >
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1.5">{step.month}</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                  <span className="text-xs font-black text-slate-900 tracking-tight">{step.title}</span>
                </div>
              </motion.div>

              <TeardropPin color={step.color} isHovered={isHovered} />

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: cardPlacement.initialY }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: cardPlacement.initialY }}
                    className={`absolute ${cardPlacement.className} z-30 w-[240px] bg-white/95 backdrop-blur-md rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/50`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: step.color }}>
                          <step.icon size={16} />
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[8px] font-black tracking-[0.2em] uppercase text-gray-400 leading-none mb-1">{step.month}</span>
                         <div className="h-1 w-4 rounded-full" style={{ backgroundColor: step.color }} />
                       </div>
                    </div>
                    <h4 className="text-lg font-black text-gray-900 mb-2 leading-tight tracking-tight">{step.title}</h4>
                    <p className="text-[11px] text-gray-500 mb-4 leading-relaxed font-medium">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                       {step.skills.map((skill, sIdx) => (
                         <span key={sIdx} className="text-[8px] font-black uppercase tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded-full border border-gray-100 shadow-sm">
                           {skill}
                         </span>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-12">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex gap-6 items-start bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg`} 
                 style={{ backgroundColor: step.color }}>
              <step.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{step.month}</p>
              <h3 className="text-xl font-black text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>
              <div className="flex flex-wrap gap-2">
                {step.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-bold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapTimeline
