"use client"

import { useMemo, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"

type Product = {
  slug: string
  title: string
  subtitle?: string
  price: number
  category?: string
  cover?: string
  images?: string[]
  materials?: string[]
  [key: string]: any
}

type Props = {
  products: Product[]
  pageSize?: number
  enableFilters?: boolean
}

export function CatalogueBrowser({ products, pageSize = 9, enableFilters = true }: Props) {
  const [category, setCategory] = useState<string>("all")
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [page, setPage] = useState<number>(1)

  // derive categories from products
  const categories = useMemo(() => {
    const set = new Set<string>()
    for (const p of products) {
      if (p.category) set.add(p.category)
    }
    return ["all", ...Array.from(set)]
  }, [products])

  const filtered = useMemo(() => {
    let list = products
    if (category !== "all") {
      list = list.filter((p) => (p.category || "").toLowerCase() === category.toLowerCase())
    }
    if (minPrice !== "") {
      const n = Number(minPrice)
      if (!Number.isNaN(n)) list = list.filter((p) => p.price >= n)
    }
    if (maxPrice !== "") {
      const n = Number(maxPrice)
      if (!Number.isNaN(n)) list = list.filter((p) => p.price <= n)
    }
    return list
  }, [products, category, minPrice, maxPrice])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const clampedPage = Math.min(Math.max(1, page), totalPages)

  useEffect(() => {
    setPage(1)
  }, [category, minPrice, maxPrice])

  const start = (clampedPage - 1) * pageSize
  const end = start + pageSize
  const paged = filtered.slice(start, end)

  const resetFilters = () => {
    setCategory("all")
    setMinPrice("")
    setMaxPrice("")
    setPage(1)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {enableFilters && (
        <div className="mb-6 rounded-xl border border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/30 p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-white dark:bg-black">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-neutral-900">
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c === "all" ? "All" : c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Min Price</label>
              <Input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="bg-white dark:bg-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Max Price</label>
              <Input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="9999"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="bg-white dark:bg-black"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full border-black/20 dark:border-white/20 bg-transparent"
              >
                Reset filters
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* grid */}
      <motion.div layout className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", "mb-6")}>
        {paged.map((p) => (
          <motion.div key={p.slug} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <ProductCard product={p} />
          </motion.div>
        ))}
        {paged.length === 0 && (
          <div className="col-span-full py-10 text-center text-sm text-gray-500 dark:text-gray-400">
            No products match your filters.
          </div>
        )}
      </motion.div>

      {/* pagination */}
      <nav aria-label="Catalogue pagination" className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Showing {filtered.length === 0 ? 0 : start + 1}–{Math.min(end, filtered.length)} of {filtered.length}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={clampedPage === 1}
            className="border-black/20 dark:border-white/20"
            aria-label="Previous page"
          >
            Prev
          </Button>

          {/* page numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1
              const isActive = pageNum === clampedPage
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "h-9 w-9 rounded-md text-sm transition",
                    "border border-black/20 dark:border-white/20",
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white text-black hover:bg-black/80 hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black",
                  )}
                >
                  {pageNum}
                </button>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={clampedPage === totalPages}
            className="border-black/20 dark:border-white/20"
            aria-label="Next page"
          >
            Next
          </Button>
        </div>
      </nav>
    </section>
  )
}

export default CatalogueBrowser
