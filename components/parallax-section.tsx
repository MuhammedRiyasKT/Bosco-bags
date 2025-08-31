"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export function ParallaxSection({
  children,
  speed = -0.2,
  className,
}: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  return (
    <motion.section ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.section>
  )
}
