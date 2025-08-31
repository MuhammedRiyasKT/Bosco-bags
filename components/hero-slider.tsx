"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { src: "/everyday-carry-bag.png", caption: "Everyday Carry" },
  { src: "/elevated-minimalism-bag.png", caption: "Elevated Minimalism" },
  { src: "/crafted-for-comfort-bag.png", caption: "Crafted for Comfort" },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card group">
      <div className="aspect-[16/10] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={slides[index].src || "/placeholder.svg"}
              alt={slides[index].caption}
              fill
              className="object-cover will-change-transform"
              priority
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-background/70 px-3 py-1 text-xs">
              {slides[index].caption}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-6 rounded-full transition ${index === i ? "bg-foreground" : "bg-foreground/30 hover:bg-foreground/60"}`}
          />
        ))}
      </div>
    </div>
  )
}
