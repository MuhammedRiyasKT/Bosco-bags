"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = pathname === href
    return (
      <Link
        href={href}
        className={cn(
          "px-3 py-2 rounded-md text-sm transition",
          "hover:-translate-y-0.5 hover:shadow-sm",
          active ? "bg-foreground text-background" : "text-foreground hover:bg-foreground/10",
        )}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
  <img src="/logo.png" alt="logo" className="w-32 h-auto" />
</Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/catalogue">Catalogue</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
