"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active] || "/placeholder.svg"}
              alt={`Image ${active + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square rounded-lg overflow-hidden border ${active === i ? "ring-2 ring-foreground" : ""}`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Thumb ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
