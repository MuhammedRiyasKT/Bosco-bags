"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"

export function ProductCard({
  product,
}: {
  product: { slug: string; title: string; subtitle: string; price: number; thumbnail: string }
}) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateY = ((x - midX) / midX) * 6
    const rotateX = -((y - midY) / midY) * 6
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
  const onLeave = () => {
    const el = cardRef.current
    if (el) el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <Link href={`/catalogue/${product.slug}`}>
      <motion.article
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.02 }}
        className="group rounded-2xl border bg-card overflow-hidden transition-transform will-change-transform"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded bg-background/70 backdrop-blur border opacity-0 group-hover:opacity-100 transition">
            View Details
          </div>
        </div>
        <div className="p-4">
          <p className="font-medium">{product.title}</p>
          <p className="text-sm text-muted-foreground">{product.subtitle}</p>
          <p className="mt-2 text-sm font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </motion.article>
    </Link>
  )
}

export default ProductCard
