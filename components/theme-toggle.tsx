"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = (resolvedTheme || theme) === "dark"
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border hover:shadow transition"
      aria-label="Toggle theme"
    >
      <Sun className={`size-4 transition ${isDark ? "opacity-0 scale-50" : "opacity-100 scale-100"}`} />
      <Moon className={`size-4 absolute transition ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
    </button>
  )
}
