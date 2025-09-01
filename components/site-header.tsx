"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = pathname === href
    return (
      <Link
        href={href}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
          "hover:-translate-y-0.5 hover:shadow-sm",
          active
            ? "bg-foreground text-background shadow-md"
            : "text-foreground hover:bg-foreground/10",
        )}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b bg-background/80">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          <img src="/logo.png" alt="logo" className="w-30 h-16 object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/catalogue">Catalogue</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-foreground/10 transition"
          >
            <svg
              className={cn("h-6 w-6 transition-transform", open ? "hidden" : "block")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              className={cn("h-6 w-6 transition-transform", open ? "block" : "hidden")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - With specific background color */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Overlay Background */}
        <div
          className="absolute inset-0 bg-black/70 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute right-0 top-0 h-screen w-80 bg-zinc-800 border-l-2 border-primary/30 shadow-2xl p-6 transition-transform duration-300 flex flex-col",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="font-semibold tracking-wide">
              <img src="/logo.png" alt="logo" className="w-30 h-16 object-contain" />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-3 flex-grow">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "px-5 py-4 rounded-xl text-lg font-semibold transition-all flex items-center",
                pathname === "/"
                  ? "bg-primary text-secondary shadow-lg"
                  : "text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={cn(
                "px-5 py-4 rounded-xl text-lg font-semibold transition-all flex items-center",
                pathname === "/about"
                  ? "bg-primary text-secondary shadow-lg"
                  : "text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
            <Link
              href="/catalogue"
              onClick={() => setOpen(false)}
              className={cn(
                "px-5 py-4 rounded-xl text-lg font-semibold transition-all flex items-center",
                pathname === "/catalogue"
                  ? "bg-primary text-secondary shadow-lg"
                  : "text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Catalogue
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                "px-5 py-4 rounded-xl text-lg font-semibold transition-all flex items-center",
                pathname === "/contact"
                  ? "bg-primary text-secondary shadow-lg"
                  : "text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </nav>

          <div className="pt-8 mt-auto border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Bosco Bags © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}