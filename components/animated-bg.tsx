"use client"

import { motion } from "framer-motion"

export function AnimatedBG({ subtle = false }: { subtle?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.svg
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        className="absolute -top-40 -right-40 opacity-[0.06] dark:opacity-[0.12]"
        aria-hidden="true"
      >
        <motion.path
          initial={{ d: "M0,300 C300,150 600,450 900,300 C1200,150 900,0 600,100 C300,200 0,0 0,300 Z" }}
          animate={{
            d: subtle
              ? "M0,250 C300,150 600,350 900,250 C1200,150 900,50 600,120 C300,190 0,50 0,250 Z"
              : [
                  "M0,300 C300,150 600,450 900,300 C1200,150 900,0 600,100 C300,200 0,0 0,300 Z",
                  "M0,260 C300,200 600,420 900,260 C1200,140 900,80 600,140 C300,200 0,80 0,260 Z",
                  "M0,300 C300,180 600,420 900,300 C1200,180 900,20 600,120 C300,220 0,20 0,300 Z",
                ],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
