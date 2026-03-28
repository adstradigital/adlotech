'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CodeTypewriter = ({ code, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + code[index])
        setIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, code, speed])

  const highlightCode = (text) => {
    // Single-pass highlighting to avoid recursion/double-processing HTML
    const masterRegex = /(\b(?:def|for|in|import|from|return|if|else|elif|zip|print)\b)|("[^"]*")|(\b\d+\b)|([a-zA-Z_][a-zA-Z0-9_]*(?=\())|(#.*)/g;
    
    const lines = text.split('\n');
    return lines.map((line, i) => {
      let lastIndex = 0;
      let parts = [];
      let match;

      // Manual extraction to preserve order and avoid nested HTML issues
      while ((match = masterRegex.exec(line)) !== null) {
        // Push preceding plain text
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }

        // Push highlighted part
        const [full, keyword, string, number, func, comment] = match;
        if (keyword) parts.push(`<span class="text-purple-400 font-bold">${full}</span>`);
        else if (string) parts.push(`<span class="text-green-400">${full}</span>`);
        else if (number) parts.push(`<span class="text-orange-400">${full}</span>`);
        else if (func) parts.push(`<span class="text-blue-400 font-semibold">${full}</span>`);
        else if (comment) parts.push(`<span class="text-gray-500 italic">${full}</span>`);
        
        lastIndex = masterRegex.lastIndex;
      }
      
      // Push remaining plain text
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const highlightedLine = parts.join('') || '&nbsp;';

      return (
        <div key={i} className="min-h-[1.2rem] flex items-center">
          <span className="text-gray-600/30 mr-3 w-4 text-right select-none text-[8px] sm:text-[10px]">{i + 1}</span>
          <span className="flex-1 whitespace-pre text-[10px] sm:text-xs md:text-sm leading-tight" dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        </div>
      )
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        y: { 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      className="relative"
    >
      {/* Immersive Floating Code Area */}
      <div className="relative p-6 bg-blue-500/[0.02] backdrop-blur-[1px] rounded-[1.5rem] font-mono text-gray-100/80 shadow-[0_0_40px_rgba(0,0,0,0.2)] overflow-hidden min-h-[200px] border border-white/5">
        <div className="relative z-10 space-y-0.5">
          {highlightCode(displayedText)}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1.5 h-3.5 bg-blue-400/70 ml-1 align-middle shadow-[0_0_10px_rgba(96,165,250,0.4)]"
          />
        </div>
        
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default CodeTypewriter
