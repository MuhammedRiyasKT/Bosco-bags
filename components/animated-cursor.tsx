"use client"

import { useEffect, useRef } from "react"

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x,
      ty = y
    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      requestAnimationFrame(loop)
    }
    window.addEventListener("mousemove", onMove)
    loop()
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        boxShadow: "0 0 24px rgba(212,175,55,0.6), 0 0 4px rgba(212,175,55,0.9) inset",
        background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.3) 60%, transparent 70%)",
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  )
}
